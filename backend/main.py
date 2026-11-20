import logging
import os
from enum import Enum
from typing import Annotated

import mysql.connector
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator

load_dotenv()
logging.basicConfig(level=os.getenv("LOG_LEVEL", "INFO"))
logger = logging.getLogger(__name__)

app = FastAPI(title="GleanAgro Form Submission API")


class InquiryRole(str, Enum):
    commercial_buyer = "Commercial Buyer"
    smallholder_farmer = "Smallholder Farmer"
    impact_investor = "Impact Investor"
    equipment_partner = "Equipment Partner"
    general = "General"


class InquirySubmission(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    full_name: Annotated[str, Field(alias="fullName", min_length=1, max_length=150)]
    email: Annotated[EmailStr, Field(max_length=254)]
    phone: Annotated[str, Field(min_length=1, max_length=40)]
    organization: Annotated[str | None, Field(max_length=200)] = None
    role: InquiryRole
    produce_interest: Annotated[
        str | None, Field(alias="produceInterest", max_length=255)
    ] = None
    message: Annotated[str, Field(min_length=1, max_length=5000)]

    @field_validator(
        "full_name", "phone", "organization", "produce_interest", "message", mode="before"
    )
    @classmethod
    def trim_text(cls, value: object) -> object:
        if isinstance(value, str):
            stripped = value.strip()
            return stripped or None
        return value


def save_inquiry(submission: InquirySubmission) -> int:
    config = {
        "host": os.getenv("MYSQL_HOST", "127.0.0.1"),
        "port": int(os.getenv("MYSQL_PORT", "3306")),
        "user": os.getenv("MYSQL_USER", ""),
        "password": os.getenv("MYSQL_PASSWORD", ""),
        "database": os.getenv("MYSQL_DATABASE", "gleanagro"),
        "connection_timeout": 5,
    }
    if not config["user"] or not config["password"]:
        raise RuntimeError("MYSQL_USER and MYSQL_PASSWORD must be configured")

    connection = mysql.connector.connect(**config)
    cursor = None
    try:
        cursor = connection.cursor()
        cursor.execute(
            """
            INSERT INTO form_submissions
                (full_name, email, phone, organization, inquiry_role, produce_interest, message)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            """,
            (
                submission.full_name,
                str(submission.email),
                submission.phone,
                submission.organization,
                submission.role.value,
                submission.produce_interest,
                submission.message,
            ),
        )
        connection.commit()
        return int(cursor.lastrowid)
    except mysql.connector.Error:
        connection.rollback()
        raise
    finally:
        if cursor is not None:
            cursor.close()
        connection.close()


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok", "service": "form-submission-api"}


@app.post("/api/inquiries", status_code=status.HTTP_201_CREATED)
def create_inquiry(submission: InquirySubmission) -> dict[str, int | str]:
    try:
        submission_id = save_inquiry(submission)
    except (mysql.connector.Error, RuntimeError, ValueError):
        logger.exception("Could not save form submission")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Submissions are temporarily unavailable. Please try again later.",
        ) from None

    return {"id": submission_id, "message": "Submission received"}

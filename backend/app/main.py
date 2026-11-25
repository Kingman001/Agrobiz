
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError

from app.database import get_db
from app.models import Contact
from app.schemas import ContactCreate, ContactResponse

app = FastAPI(
    title="GleanAgro API",
    description="Backend API for GleanAgro website",
    version="1.0.0"
)

# Replace these with your actual frontend origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:3000",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "https://gleanagro.netlify.app",
        "https://gleanagrong.com"
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to GleanAgro API",
        "status": "running"
    }


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.post(
    "/api/contact",
    response_model=ContactResponse,
    status_code=201
)
def submit_contact(
    contact_data: ContactCreate,
    db: Session = Depends(get_db)
):
    new_contact = Contact(
        name=contact_data.name.strip(),
        email=str(contact_data.email),
        phone=contact_data.phone,
        role=contact_data.role.strip(),
  organization=contact_data.organization.strip(),
        subject=(contact_data.subject or "").strip() or "General enquiry",
        message=contact_data.message.strip()
    )

    try:
        db.add(new_contact)
        db.commit()
        db.refresh(new_contact)

        return new_contact

    except SQLAlchemyError:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="Unable to submit your enquiry. Please try again."
        )

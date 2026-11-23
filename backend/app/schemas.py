from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional


class ContactCreate(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=30)
    role: str = Field(min-length=2, max_length=200)
    organization: str = Field(min_length=2, max_length=200)
    subject: str = Field(min_length=2, max_length=200)
    message: str = Field(min_length=10, max_length=5000)


class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str]
    role: str
    organization: str
    subject: str
    message: str
    status: str

    model_config = ConfigDict(from_attributes=True)

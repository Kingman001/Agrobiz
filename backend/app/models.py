from sqlalchemy import Column, BigInteger, String, Text, TIMESTAMP, text
from app.database import Base


class Contact(Base):
    __tablename__ = "contacts"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String(150), nullable=False)
    email = Column(String(254), nullable=False)
    phone = Column(String(30), nullable=True)
    role = Column(String(200), nullable=False)
    organization = Column(String(200), nullable=False)
    subject = Column(String(200), nullable=False)
    message = Column(Text, nullable=False)
    status = Column(
        String(20),
        nullable=False,
        server_default=text("'new'")
    )
    created_at = Column(
        TIMESTAMP,
        nullable=True,
        server_default=text("CURRENT_TIMESTAMP")
    )

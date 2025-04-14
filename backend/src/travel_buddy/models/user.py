from datetime import UTC, datetime

from travel_buddy.core.database import Base

from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    phone_number = Column(String, unique=True, index=True)
    created_at = Column(DateTime, default=datetime.now(UTC))

    trips = relationship("Trip", back_populates="user")

from datetime import UTC, date

from sqlalchemy import Column, DateTime, Enum, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from travel_buddy.core.database import Base

class Trip(Base):
    __tablename__ = "trips"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    description = Column(String)
    total_cost = Column(Float)
    
    user = relationship("User", back_populates="trips")
    items = relationship("Item", back_populates="trip")


from datetime import UTC, datetime

from travel_buddy.core.database import Base
from sqlalchemy import Boolean, Column, DateTime, Float, ForeignKey, Integer, String, Enum
from sqlalchemy.orm import relationship

class ItemType(Enum):
    accommodation = "accommodation"
    transportation = "transportation"
    activity = "activity"
    other = "other"

class Item(Base):
    __tablename__ = "items"

    item_id = Column(Integer, primary_key=True, index=True, nullable=False, autoincrement=True)
    trip_id = Column(Integer, ForeignKey("trips.trip_id"))
    title = Column(String, nullable=False) # false = Required
    date = Column(DateTime, nullable=False, default=datetime.now(UTC))
    item_type = Column(Enum(ItemType), nullable=False)
    description = Column(String, nullable=True)
    cost = Column(Float, nullable = False)
    web_link = Column(String, nullable = True)

    trip = relationship("Trip", back_populates="items") # relationship to Trip (class) model

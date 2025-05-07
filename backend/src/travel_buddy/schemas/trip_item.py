from pydantic import BaseModel, constr, Field, HttpUrl
from typing import Optional
from datetime import datetime
import enum

# Also in models
class ItemType(str, enum.Enum):
    accommodation = "accommodation"
    transportation = "transportation"
    activity = "activity"
    other = "other"

class ItemCreate(BaseModel):
    title: constr(min_length=3, max_length=100)
    start_date: datetime
    end_date: datetime
    item_type: ItemType
    description: Optional[constr(max_length=300)] = None
    cost: float = Field(..., ge=0)
    web_link: Optional[constr(pattern=r'^https?://.+')] = None

class ItemResponse(ItemCreate):
    id: int
    trip_id: int

    class Config:
        from_attributes = True 

class ItemUpdate(BaseModel):
    title: Optional[constr(min_length=3, max_length=100)] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    item_type: Optional[ItemType] = None
    description: Optional[constr(max_length=300)] = None
    cost: Optional[float] = Field(None, ge=0)
    web_link: Optional[constr(pattern=r'^https?://.+')] = None
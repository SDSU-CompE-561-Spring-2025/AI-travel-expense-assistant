from pydantic import BaseModel, constr, Field, HttpUrl
from typing import Optional
from datetime import datetime
from enum import Enum

# Also in models
class ItemType(str, Enum):
    accommodation = "accommodation"
    transportation = "transportation"
    activity = "activity"
    other = "other"

class ItemCreate(BaseModel):
    title: constr(min_length=3, max_length=100, pattern=r"^[a-zA-Z0-9\s_]+$")
    date: datetime
    item_type: ItemType
    description: Optional[constr(max_length=300)]
    cost: float = Field(..., ge=0)
    web_link: Optional[HttpUrl] 

class ItemResponse(ItemCreate):
    id: int
    trip_id: int

    class Config:
        from_attributes = True 
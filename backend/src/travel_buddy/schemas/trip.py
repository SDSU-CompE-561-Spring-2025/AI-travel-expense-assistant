from datetime import datetime
from pydantic import BaseModel, constr, Field
from typing import Optional
from datetime import date
    

class TripCreate(BaseModel):
    title: str = Field(..., pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')
    start_date: date
    end_date: date
    description: Optional[str] = Field(None, pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')


class TripResponse(BaseModel):
    id: int = Field(..., gt=0)
    title: str = Field(..., pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')
    start_date: date
    end_date: date
    description: Optional[str] = Field(None, pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')

    class Config:
        from_attributes = True

class TripUpdate(BaseModel):
    title: str
    description: str
    start_date: date
    end_date: date
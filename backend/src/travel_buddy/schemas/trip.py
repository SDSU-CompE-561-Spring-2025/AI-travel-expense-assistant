from datetime import datetime
from pydantic import BaseModel, constr, Field
from typing import Optional
from datetime import date
    

class TripCreate(BaseModel):
    title: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    start_date: date
    end_date: date
    description: Optional[constr(min_length=0, max_length=200, pattern=r"^[a-zA-Z0-9_]+$")]
    user_id: int = Field(..., gt=0)


class TripResponse(BaseModel):
    id: int = Field(..., gt=0)
    title: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    start_date: date
    end_date: date
    description: Optional[constr(min_length=0, max_length=200, pattern=r"^[a-zA-Z0-9_]+$")]

    class Config:
        from_attributes = True



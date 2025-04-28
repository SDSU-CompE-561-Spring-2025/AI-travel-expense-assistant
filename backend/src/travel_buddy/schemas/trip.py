from datetime import datetime
from pydantic import BaseModel, constr, Field
from typing import Optional
from datetime import date
    

class TripCreate(BaseModel):
    title: str = Field(..., pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')
    start_date: datetime
    end_date: datetime
    description: Optional[str] = Field(None, pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')
    user_id: int = Field(..., gt=0)


class TripResponse(BaseModel):
    id: int = Field(..., gt=0)
    title: str = Field(..., pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')
    start_date: datetime
    end_date: datetime
    description: Optional[str] = Field(None, pattern=r'^[a-zA-Z0-9_\s\-.,!?]+$')

    class Config:
        from_attributes = True



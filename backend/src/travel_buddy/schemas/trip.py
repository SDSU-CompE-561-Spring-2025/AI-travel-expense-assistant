from datetime import datetime
from pydantic import BaseModel, constr, Field
    

class TripCreate(BaseModel):
    title: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    start_date: datetime.date
    end_date: datetime.date
    description: constr(min_length=0, max_length=200, pattern=r"^[a-zA-Z0-9_]+$") | None
    user_id: int = Field(..., gt=0)


class TripResponse(BaseModel):
    id: int = Field(..., gt=0)
    title: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    start_date: datetime.date
    end_date: datetime.date
    description: constr(min_length=0, max_length=200, pattern=r"^[a-zA-Z0-9_]+$") | None

    class Config:
        from_attributes = True



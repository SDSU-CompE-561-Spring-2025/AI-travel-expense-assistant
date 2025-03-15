from datetime import datetime
from pydantic import BaseModel, constr, EmailStr, Field


# Validate user input for username and email
class UserBase(BaseModel):
    username: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    email: EmailStr

# Validate user input for password password, specifically for user registration
class UserCreate(UserBase):
    password: constr(min_length=8, max_length=64)

# Validate a full user object based off user inputs 
class User(UserBase):
    id: int = Field(..., gt=0)
    username: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    email: EmailStr
    created_at: datetime
    # TODO: add phone_number

    # For retrieving user data from the database later on
    class Config:
        from_attributes = True

class UserResponse(BaseModel):
    id: int = Field(..., gt=0)
    username: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    email: EmailStr
    created_at: datetime

    # For retrieving user data from the database later on
    class Config:
        from_attributes = True

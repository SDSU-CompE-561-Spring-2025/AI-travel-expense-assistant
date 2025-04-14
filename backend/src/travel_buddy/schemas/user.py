from datetime import datetime
from pydantic import BaseModel, constr, EmailStr, Field, field_validator

from typing import Optional, Literal
from phonenumbers import parse, is_valid_number, format_number, PhoneNumberFormat, NumberParseException

# Validate user input for username and email
class UserBase(BaseModel):
    username: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    email: EmailStr

# Validate user input for password password, specifically for user registration
class UserCreate(UserBase):
    password: constr(min_length=8, max_length=64)
    phone_number: Optional[str] = Field(
        default=None,
        example="+14155552671",  # E.164 format
        description="Phone number in international E.164 format"
        )

    @field_validator("phone_number")
    def validate_phone_number(cls, value):
        if value is None:
            return value
        try:
            number = parse(value, "US")
            if not is_valid_number(number):
                raise ValueError("Invalid phone number")
            return format_number(number, PhoneNumberFormat.E164)
        except NumberParseException:
            raise ValueError("Could not parse phone number")

# Validate a full user object based off user inputs 
class User(UserBase):
    id: int = Field(..., gt=0)
    username: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    email: EmailStr
    created_at: datetime
    phone_number: Optional[str]

    @field_validator("phone_number")
    def validate_phone_number(cls, value):
        if value is None:
            return value
        try:
            number = parse(value, "US")
            if not is_valid_number(number):
                raise ValueError("Invalid phone number")
            return format_number(number, PhoneNumberFormat.E164)
        except NumberParseException:
            raise ValueError("Could not parse phone number")

    # For retrieving user data from the database later on
    class Config:
        from_attributes = True

class UserResponse(BaseModel):
    id: int = Field(..., gt=0)
    username: constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")
    email: EmailStr
    created_at: datetime
    phone_number: Optional[str] = None  

    # For retrieving user data from the database later on
    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    # Items that are eligible to be changed
    username: Optional[constr(min_length=3, max_length=50, pattern=r"^[a-zA-Z0-9_]+$")] = None
    email: Optional[EmailStr] = None
    phone_number: Optional[str] = None

    class Config:
        from_attributes = True

class UserUpdateResponse(BaseModel):
    message: str
    user: UserResponse

    class Config:
        from_attributes = True
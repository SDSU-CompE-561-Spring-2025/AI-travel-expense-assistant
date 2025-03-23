from sqlalchemy.orm import Session

from fastapi import HTTPException, status

# from travel_buddy.core.auth import get_password_hash                  # TODO: Write get_password_hash in
from travel_buddy.core.config import get_settings
from travel_buddy.models.user import User
from travel_buddy.schemas.user import UserCreate, UserUpdate

from typing import Optional

from passlib.context import CryptContext

settings = get_settings()


# Create, Read, Update, Delete Operations

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password: str):
    return pwd_context.hash(password)

def create_user(db: Session, user: UserCreate) -> tuple[User, Optional[str]]:
    """
    Create a new user in the database after validating unique constraints.
        @db (Session): SQLAlchemy database session.
        @user (UserCreate): Pydantic model containing user input data.

        @returns: tuple(User,str)
            - User: The newly created user object or None if creation fails.
            - str: The conflicting field name ("email" or "phone_number") if a uniqueness conflict is found, otherwise None.

    Notes:
        - If the email already exists, returns (None, "email").
        - If a phone number is provided and already exists, returns (None, "phone_number").
        - Otherwise, returns the created User and None.
    """
    if db.query(User).filter(User.email == user.email).first():
        return None, "email"
    if user.phone_number:
        if db.query(User).filter(User.phone_number == user.phone_number).first():
            return None, "phone_number"

    hashed_password = get_password_hash(user.password)                # TODO: Write get_password_hash in, Uncomment once implementerd     
    
    db_user = User(
        username = user.username,
        email = user.email,
        password_hash = hashed_password,                              # TODO: Write get_password_hash in, Uncomment once implementerd     
        phone_number = user.phone_number,
    )

    # Database transations
    db.add(db_user)             
    db.commit()
    db.refresh(db_user)

    return db_user, None

def get_user_by_id(db: Session, user_id: int):
    """
    Retrieve a user from the database by their ID.
        @db (Session): SQLAlchemy database session.
        @user_id (int): The ID of the user to retrieve.

        @returns User: The user object with the given ID.
    """
    user = db.query(User).filter(User.id == user_id).first()
    
    return user

def get_user_by_username(db: Session, username: str): 
    """
    Retrieve a user from the database by their ID.
        @db (Session): SQLAlchemy database session.
        @username (str): The username of the user to retrieve.

        @returns: The user object with the given username.
    """
    user = db.query(User).filter(User.username == username).first()

    return user 

def update_user(db: Session, user_id: int, user_update: UserUpdate):
    """
    Update a user from the database by their ID.
        @db (Session): SQLAlchemy database session.
        @username (str): The username of the user to retrieve.

        @returns: The user object with the given username.
    """
    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        # User not found
        return None

    # Update items that are given from user_update 
    for field, new_value in user_update.model_dump().items():
        setattr(user, field, new_value)

    db.commit()
    db.refresh(user)

    return {
        "message" : f'User {user.username} with {user_id} has been updated',
        'user' : user    
            }

def delete_user(db: Session, user_id: int):
    """
    Delete a user in the database.
        @db: SQLAlchemy database session
        @user_id: The ID of the user to be deleted

        @returns: dict - A message confirming successful deletion
    """
    user = db.query(User).filter(User.id == user_id).first()    
    
    if not user:
        # User not found
        return None
    
    username = user.username

    db.delete(user)
    db.commit()
    
    return {"message" : f'User {username} with {user_id} has been removed',}

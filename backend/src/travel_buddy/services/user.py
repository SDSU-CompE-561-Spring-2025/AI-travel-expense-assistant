from sqlalchemy.orm import Session
from typing import Optional
from fastapi import HTTPException, status
from travel_buddy.core.security import get_password_hash, verify_password
from travel_buddy.core.config import get_settings
from travel_buddy.models.user import User
from travel_buddy.schemas.user import UserCreate, UserUpdate

# from passlib.context import CryptContext

settings = get_settings()

# Create, Read, Update, Delete Operations
def create_user(db: Session, user: UserCreate) -> tuple[Optional[User], Optional[str]]:
    if db.query(User).filter(User.email == user.email).first():
        return None, "email"
    if user.phone_number and db.query(User).filter(User.phone_number == user.phone_number).first():
        return None, "phone_number"

    hashed_password = get_password_hash(user.password)

    db_user = User(
        username=user.username,
        email=user.email,
        password_hash=hashed_password,
        phone_number=user.phone_number,
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user, None

def authenticate_user(db: Session, username: str, password: str) -> Optional[User]:
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.password_hash):
        return None
    return user

def get_user_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def update_user(db: Session, user_id: int, user_update: UserUpdate):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        return None

    for field, value in user_update.model_dump().items():
        setattr(user, field, value)

    db.commit()
    db.refresh(user)

    return {
        "message": f"User {user.username} with ID {user_id} has been updated",
        "user": user
    }

def delete_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        return None

    username = user.username
    db.delete(user)
    db.commit()

    return {"message": f"User {username} with ID {user_id} has been removed"}
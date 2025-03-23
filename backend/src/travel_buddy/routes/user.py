from fastapi import APIRouter, Depends


from travel_buddy.schemas.user import UserResponse, UserCreate

from travel_buddy.dependencies import get_db

from sqlalchemy.orm import Session


router = APIRouter()

@router.post("/{id}}")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    return new_user

@router.delete("/{id}")
def delete_user():

    return

@router.get("/{id}")
def get_user():

    return
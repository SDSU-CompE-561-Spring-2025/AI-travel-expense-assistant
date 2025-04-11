from sqlalchemy.orm import Session
from sqlalchemy import Integer
from typing import Optional
from fastapi import HTTPException, status
from travel_buddy.core.config import get_settings
from travel_buddy.models.trip import Trip
from travel_buddy.schemas.trip import TripCreate
from travel_buddy.models.user import User

settings = get_settings()

#CrUD Operations

def create_trip(db: Session, trip: TripCreate):
    return

def get_trips(db: Session, user: User):
    return db.query(Trip).filter(Trip.user_id == user.id).all

def get_trip_by_id(db: Session, id: Integer):
    return db.query(Trip).filter(Trip.id == id).first()

def delete_trip(db: Session, id: Integer):
    return
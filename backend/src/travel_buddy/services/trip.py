from sqlalchemy.orm import Session
from typing import Optional
from fastapi import HTTPException, status
from travel_buddy.core.config import get_settings
from travel_buddy.models.trip import Trip
from travel_buddy.schemas.trip import TripCreate
from travel_buddy.models.user import User

settings = get_settings()

#CrUD Operations

def create_trip(db: Session, trip: TripCreate, user: User):
    db_trip = Trip(
        user_id = user.id,
        title = trip.title,
        start_date = trip.start_date,
        end_date = trip.end_date,
        description = trip.description
    )

    db.add(db_trip)
    db.commit()
    db.refresh(db_trip)
    return db_trip

def update_trip(db: Session, trip_id: int, user: User, newTrip: Trip):
    trip = get_trip_by_id(db, trip_id)
    trip.user_id = user.id,
    trip.title = newTrip.title,
    trip.start_date = newTrip.start_date,
    trip.end_date = newTrip.end_date,
    trip.description = newTrip.description

    db.commit()
    db.refresh(trip)

def get_trips(db: Session, user: User):
    return db.query(Trip).filter(Trip.user_id == user.id).all()

def get_trip_by_id(db: Session, id: int):
    trip = db.query(Trip).filter(Trip.id == id).first()
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    return trip

def delete_trip(db: Session, id: int):
    trip = get_trip_by_id(db, id)
    if not trip:
        return None
    title = trip.title
    db.delete(trip)
    db.commit()

    return {"message": f"Trip {title} with ID {id} has been successfully removed"}
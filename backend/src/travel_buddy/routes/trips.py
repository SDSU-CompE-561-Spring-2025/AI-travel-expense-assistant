from fastapi import APIRouter
from travel_buddy.schemas.trip import TripCreate, TripResponse
from travel_buddy.dependencies import get_db
from fastapi import Depends
from sqlalchemy import DateTime, Date
from sqlalchemy.orm import Session
from travel_buddy.models.trip import Trip
from travel_buddy.core.authentication import oauth2_scheme, decode_access_token
import travel_buddy.services.trip as trip_service
import travel_buddy.services.user as user_service
from datetime import datetime

router = APIRouter()

@router.post("/new", response_model=TripResponse)
def create_trip(
    trip: TripCreate,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme),
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    return trip_service.create_trip(db, trip, user)

@router.get("/trips", response_model=list[TripResponse])
def get_trips(
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db,username)

    return trip_service.get_trips(db,user)

@router.get("/trips/{id}", response_model=TripResponse)
def get_trip_by_id(
    db: Session = Depends(get_db),
    id: int=-1
):
    return trip_service.get_trip_by_id(db,id)

@router.put("/trips/{id}/edit", response_model=TripResponse)
def update_trip(
    db: Session = Depends(get_db),
    id: int=-1,
    token: str = Depends(oauth2_scheme),
    newTitle: str = "",
    newDescription: str = "",
    newStartDate: str = "",
    newEndDate: str = ""
):
    newTrip = Trip()
    newTrip.id = id
    newTrip.title = newTitle
    newTrip.description = newDescription
    newTrip.start_date = Date(newStartDate)
    newTrip.end_date = Date(newEndDate)

    username = decode_access_token(token)
    user = user_service.get_user_by_username(db,username)
    return trip_service.update_trip(db,id,user,newTrip)

@router.delete("/trips/{id}",response_model=TripResponse)
def delete_trip(
    db: Session = Depends(get_db),
    id: int=-1
):
    return trip_service.delete_trip(db,id)
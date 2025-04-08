
from fastapi import APIRouter
from travel_buddy.schemas.trip import TripCreate, TripResponse
from travel_buddy.dependencies import get_db
from fastapi import Depends
from sqlalchemy.orm import Session
#from travel_buddy.core.auth import oauth2_scheme, decode_access_token
#import travel_buddy.services.trip as trip_service ## create this in services??
#import travel_buddy.services.user as user_service

router = APIRouter()

'''
@router.post("/", response_model=TripResponse)
def create_trip(
    trip: TripCreate,
    db: Session = Depends(get_db),
    #token: str = Depends(oauth2_scheme),
):
    #username = decode_access_token(token).username
    #user = user_service.get_user_by_username(db, username)

    #user_id = user.id

    return trip_service.create_trip(db, trip, user_id)

'''


from fastapi import APIRouter
from travel_buddy.schemas.item import ItemCreate, ItemResponse
from travel_buddy.dependencies import get_db
from fastapi import Depends
from sqlalchemy.orm import Session
from travel_buddy.core.authentication import oauth2_scheme, decode_access_token
import travel_buddy.services.item as item_service
import travel_buddy.services.trip as trip_service 
import travel_buddy.services.user as user_service

router = APIRouter()

# Create a new item 
@router.post("/trips/{trip_id}/new", response_model=ItemResponse)
def create_item(
    item: ItemCreate,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme),
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    trip_id = trip_service.get_trip_by_id(db, trip_id, user.id)  

    return item_service.create_item(db, item, user)


# Get all items for a trip
@router.get("/trips/{trip_id}/items", response_model=list[ItemResponse])
def get_items(
    trip_id: int,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    return item_service.get_items(db, trip_id, user)

# Get a specific item from a trip
@router.get("/trips/{trip_id}/items/{item_id}", response_model=ItemResponse)
def get_trip_item_by_id(
    trip_id: int,
    item_id: int,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    return item_service.get_item(db, item_id, user, trip_id)

#DRAFT
# Update item 
@router.put("/trips/{trip_id}/items/{item_id}", response_model=ItemResponse)
def update_trip_item_by_id(
    trip_id: int,
    item_id: int,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    return item_service.get_item(db, item_id, user.id, trip_id)

# Delete an item from a trip
@router.delete("/trips/{trip_id}/items/{item_id}", response_model=ItemResponse)
def delete_trip_item(
    trip_id: int,
    item_id: int,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    return item_service.delete_item(db, item_id, user.id, trip_id)
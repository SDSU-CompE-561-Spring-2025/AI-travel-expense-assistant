from fastapi import APIRouter, Depends, HTTPException, status

from travel_buddy.dependencies import get_db
from fastapi import Depends
from sqlalchemy.orm import Session
from travel_buddy.core.authentication import oauth2_scheme, decode_access_token
import travel_buddy.services.trip_item as item_service
import travel_buddy.services.trip as trip_service 
import travel_buddy.services.user as user_service
from travel_buddy.schemas.trip_item import ItemCreate, ItemResponse

router = APIRouter()

# Create a new item 
@router.post("/{trip_id}/new", response_model=ItemResponse)
def create_item(
    trip_id: int,  
    item: ItemCreate,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme),
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    
    return item_service.create_item(db, item, user.id, trip_id)

# Get all items for a trip
@router.get("/{trip_id}/items", response_model=list[ItemResponse])
def get_items(
    trip_id: int,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")

    return item_service.get_items(db, trip_id, user.id)

# Get a specific item from a trip
@router.get("/{trip_id}/items/{id}", response_model=ItemResponse)
def get_trip_item_by_id(
    trip_id: int,
    item_id: int,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    
    return item_service.get_item(db, item_id, user.id, trip_id)

#DRAFT
# Update item 
@router.put("/{trip_id}/items/{id}", response_model=ItemResponse)
def update_trip_item_by_id(
    trip_id: int,
    item_id: int,
    updated_item: ItemCreate,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    
    return item_service.update_item(db, item_id, user.id, trip_id, updated_item)

# Delete an item from a trip
@router.delete("/{trip_id}/items/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_trip_item(
    trip_id: int,
    item_id: int,
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    username = decode_access_token(token).username
    user = user_service.get_user_by_username(db, username)

    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Un    authorized")
    
    item_service.delete_item(db, item_id, user.id, trip_id)
    return None
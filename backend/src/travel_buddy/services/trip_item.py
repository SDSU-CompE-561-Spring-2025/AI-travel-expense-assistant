from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from travel_buddy.models.trip_item import Item
from travel_buddy.schemas.trip_item import ItemCreate, ItemResponse, ItemUpdate
from travel_buddy.models.user import User
from pydantic import HttpUrl
from typing import List

# CREATE ITEM
def create_item(db: Session, item: ItemCreate, user_id: int, trip_id: int) -> ItemResponse:
    db_item = Item(
        trip_id=trip_id,
        title=item.title,
        start_date=item.start_date,
        end_date=item.end_date,
        item_type=item.item_type,
        description=item.description,
        cost=item.cost,
        web_link=item.web_link
    )

    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return ItemResponse.model_validate(db_item)

# READ ALL ITEMS FOR A TRIP
def get_items(db: Session, trip_id: int, user_id: int) -> List[ItemResponse]:
    records = db.query(Item).filter(Item.trip_id == trip_id).all()
    return [ItemResponse.model_validate(r) for r in records]

# READ ONE ITEM
def get_item(db: Session, id: int, user_id: int, trip_id: int) -> ItemResponse:
    item = db.query(Item).filter(
        Item.id == id,
        Item.trip_id == trip_id
    ).first()

    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")
    
    return ItemResponse.model_validate(item)

# UPDATE
def update_item(db: Session, item_id: int, user_id: int, trip_id: int, updated: ItemUpdate) -> ItemResponse:
    item = db.query(Item).filter(
        Item.id == item_id,
        Item.trip_id == trip_id
    ).first()

    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")
    
    updated_item = updated.model_dump(exclude_unset=True)
    for field, value in updated_item.items():
        if isinstance(value, HttpUrl):
            value = str(value)
        setattr(item, field, value)
        

    db.commit()
    db.refresh(item)
    return ItemResponse.model_validate(item)

# DELETE
def delete_item(db: Session, item_id: int, user_id: int, trip_id: int) -> ItemResponse:
    item = db.query(Item).filter(
        Item.id == item_id,
        Item.trip_id == trip_id
    ).first()

    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")
    
    db.delete(item)
    db.commit()
    
    return ItemResponse.model_validate(item)

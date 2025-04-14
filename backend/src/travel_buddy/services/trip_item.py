from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from travel_buddy.models.trip_item import Item
from travel_buddy.schemas.trip_item import ItemCreate, ItemResponse
from travel_buddy.models.user import User




# CREATE ITEM
def create_item(db: Session, item: ItemCreate, user_id: int, trip_id: int):
    db_item = Item(
        trip_id=trip_id,
        title=item.title,
        date=item.date,
        item_type=item.item_type,
        description=item.description,
        cost=item.cost,
        web_link=item.web_link
    )

    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

# READ ALL ITEMS FOR A TRIP
def get_items_for_trip(db: Session, trip_id: int, user_id: int):
    return db.query(Item).filter(Item.trip_id == trip_id).all()

# READ ONE ITEM
def get_item(db: Session, id: int, trip_id: int):
    item = db.query(Item).filter(
        Item.id == id,
        Item.trip_id == trip_id
    ).first()

    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    return item

# UPDATE
def update_item(db: Session, id: int, user_id: int, trip_id: int, updated_data: ItemCreate):
    item = get_item(db, id, user_id, trip_id)
    item.title = updated_data.title
    item.date = updated_data.date
    item.item_type = updated_data.item_type
    item.description = updated_data.description
    item.cost = updated_data.cost
    item.web_link = updated_data.web_link

    db.commit()
    db.refresh(item)
    return item

# DELETE
def delete_item(db: Session, id: int, user_id: int, trip_id: int):
    item = get_item(db, id, user_id, trip_id)

    db.delete(item)
    db.commit()
    return {"message": f"Item '{item.title}' has been deleted"}
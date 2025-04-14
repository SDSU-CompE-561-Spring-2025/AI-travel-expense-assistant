from fastapi import APIRouter

from travel_buddy.routes import user, trips, trip_item

api_router = APIRouter()

# User Group
api_router.include_router(
    user.router, 
    prefix="/user", 
    tags=["User"]
    )

# api_router.include_router(category.router, prefix="/category", tags=["Category"])

api_router.include_router(
    trips.router, 
    prefix="/trip", 
    tags=["Trip"]
    )

'''
api_router.include_router(
    trip_item.router, 
    prefix="/item", 
    tags=["Item"]
    )
'''


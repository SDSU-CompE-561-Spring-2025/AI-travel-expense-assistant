from fastapi import APIRouter

from travel_buddy.routes import user

api_router = APIRouter()

# User Group
api_router.include_router(
    user.router, 
    prefix="/user", 
    tags=["User"]
    )

# api_router.include_router(category.router, prefix="/category", tags=["Category"])
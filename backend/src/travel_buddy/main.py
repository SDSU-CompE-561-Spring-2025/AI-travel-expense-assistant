from fastapi import FastAPI

from travel_buddy.core.database import Base, engine
from travel_buddy.routes import api_router

# Creates our database tables based on models defined
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Include Routes
app.include_router(api_router, prefix="")

@app.get("/")
def home():
    return {"Data" : "Testing"}
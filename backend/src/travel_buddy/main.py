from fastapi import FastAPI

from travel_buddy.core.database import Base, engine
from travel_buddy.routes import api_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def home():
    return {"Data" : "Testing"}
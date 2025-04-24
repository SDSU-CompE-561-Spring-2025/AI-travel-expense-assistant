from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from travel_buddy.core.database import Base, engine
from travel_buddy.routes import user, login

# Creates our database tables based on models defined
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"Data" : "Testing"}
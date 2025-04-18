from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from travel_buddy.core.config import settings

# DEFINE CONSTANTS 
SQLALCHEMY_DATABASE_URL = settings.DATABASE_URL

# Engine: Acts as the core interface to the database
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Starts database session to allow database interaction 
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Will be used to define database models in models directory
Base = declarative_base()
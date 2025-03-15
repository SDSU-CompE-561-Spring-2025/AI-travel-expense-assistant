from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache

class Settings(BaseSettings):
    DATABASE_URL : str
    SECRET_KEY : str

    # Class will be configured using .env file 
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

# @lru_cache: If function called, store in memory, improves optization 
@lru_cache
def get_settings() -> Settings:
    return Settings()

settings = get_settings()
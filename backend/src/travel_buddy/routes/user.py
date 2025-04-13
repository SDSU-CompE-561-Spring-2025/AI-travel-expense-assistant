from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from datetime import timedelta

from travel_buddy.schemas.user import UserResponse, UserCreate, UserUpdate, UserUpdateResponse
from travel_buddy.dependencies import get_db
import travel_buddy.services.user as user_service
from travel_buddy.core.authentication import oauth2_scheme, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES, decode_access_token
from travel_buddy.schemas.token import TokenData, Token

from sqlalchemy.orm import Session


router = APIRouter()

@router.post("/register", response_model=UserResponse)
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user, conflict_field = user_service.create_user(db = db, user = user)

    if not new_user:
        # User not created due to some conflict
        if conflict_field == "email":
            detail = "Email is already in use."
        elif conflict_field == "phone_number":
            detail = "Phone number is already in use."
        else:
            detail = "Conflict in user data."
        raise HTTPException(status_code=400, detail=detail)
    
    return new_user

@router.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
):
    user = user_service.authenticate_user(
        db=db,
        username=form_data.username,
        password=form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires
    )

    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=UserResponse)
def read_users_me(
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
):
    token_data: TokenData = decode_access_token(token)
    user = user_service.get_user_by_username(db=db, username=token_data.username)

    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    return user

@router.delete("/{id}")
def delete_user(id: int, db: Session = Depends(get_db)):
    result = user_service.delete_user(db = db, user_id=id)

    if not result:
        # The detail will be returned if 
        raise HTTPException(
            status_code = status.HTTP_404_NOT_FOUND,
            detail = f'User with ID {id} not found.' 
        )
    return result

@router.get("/{id}", response_model=UserResponse)
def get_user(id: int, db: Session = Depends(get_db)):
    result = user_service.get_user_by_id(db=db, user_id=id)

    if not result:
    # The detail will be returned if not found
        raise HTTPException(
            status_code = status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return result

@router.get("/by-username/{username}", response_model=UserResponse)
def get_user_by_username(username: str, db: Session = Depends(get_db)):
    result = user_service.get_user_by_username(db=db, username=username)

    if not result:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    return result

@router.put("/{id}", response_model=UserUpdateResponse)
def update_user(id: int, user_update: UserUpdate, db: Session = Depends(get_db)):
    result = user_service.update_user(db=db, user_id=id, user_update=user_update)

    if not result:
        raise HTTPException(
            status_code = status.HTTP_404_NOT_FOUND,
            detail = f'User with ID {id} not found.' 
        )
    
    return result
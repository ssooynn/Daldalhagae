from typing import List

from fastapi import Depends, FastAPI, HTTPException, Request, Response
from sqlalchemy.orm import Session
import crud, models, schemas
from database import SessionLocal, engine
import pandas as pd
from pandas import DataFrame

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response = Response("Internal server error", status_code=500)
    try:
        request.state.db = SessionLocal()
        response = await call_next(request)
    finally:
        request.state.db.close()
    return response


# Dependency
def get_db(request: Request):
    return request.state.db


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.get("/get_review")
async def get_review(db: Session = Depends(get_db)):
    db_review = crud.get_reviews(db)
    if db_review is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_review


@app.get("/get_review/{item_review_no}")
async def get_review_by_id(item_review_no: int, db: Session = Depends(get_db)):
    db_review = crud.get_reviews_by_id(db, item_review_no)
    if db_review is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_review


@app.post("/to_csv")
async def to_csv(reviews: schemas.ReviewList, db: Session = Depends(get_db)):
    # db_review = crud.get_reviews(db, item_review_no=item_review_no)'
    data = {'ITEM_REVIEW_NO': [],
            'USERS_SNO': [],
            'PURCHASE_NO': [],
            'PET_SNO': [],
            'ITEM_SNO': [],
            'RATE': [],

            }
    # print(reviews.reviews[0].ITEM_REVIEW_NO)
    for review in reviews.reviews:
        data['ITEM_REVIEW_NO'].append(review.ITEM_REVIEW_NO)
        data['USERS_SNO'].append(review.USERS_SNO)
        data['PURCHASE_NO'].append(review.PURCHASE_NO)
        data['PET_SNO'].append(review.PET_SNO)
        data['ITEM_SNO'].append(review.ITEM_SNO)
        data['RATE'].append(review.RATE)

    df = DataFrame(data)
    df.to_csv('ItemCsvFile.csv')
    return

from typing import List

from fastapi import Depends, FastAPI, HTTPException, Request, Response,BackgroundTasks
from sqlalchemy.orm import Session
import crud, models, schemas
import recommendations
import train
from database import SessionLocal, engine
import pandas as pd
from pandas import DataFrame
import pickle

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
#
@app.get("/train")
# 백그라운드 태스크로 처리.
async def train_data(background_tasks: BackgroundTasks,db: Session = Depends(get_db)):
    # 새로운 리뷰들  db에서 꺼내와 csv로 저장.
    db_review = crud.get_new_reviews(db)
    train.save_new_reviews(db_review)
    # train돌리기.>>백그라운드
    background_tasks.add_task(train.train_all())
    return {"saved new reviews, now i'm training.."}

# 추천리스트
@app.get("/api/item/{pet_no}")
async def recommendation(pet_no: str):
    rec = recommendations.get_recommendations(pet_no)
    return rec
@app.get("/api/item/tfidf/{item_no}")
async def item_ifidf(item_no: str):
    rec = recommendations.get_tdidf(item_no)
    return rec

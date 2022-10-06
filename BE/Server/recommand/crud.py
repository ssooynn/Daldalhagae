from sqlalchemy.orm import Session
import models, schemas


#
# def get_user(db: Session, user_id: int):
#     return db.query(models.User).filter(models.User.id == user_id).first()


def get_reviews_by_id(db: Session, no: int):
    return db.query(models.ItemReview).filter(models.ItemReview.ITEM_REVIEW_NO == no).first()


def get_reviews(db: Session, skip: int = 0, limit: int = 1000):
    return db.query(models.ItemReview).offset(skip).limit(limit).all()


def get_new_reviews(db: Session):
    return db.query(models.ItemReview).filter(models.ItemReview.PURCHASE_NO != 1).all()


#
# def create_user(db: Session, user: schemas.UserCreate):
#     fake_hashed_password = user.password + "notreallyhashed"
#     db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user

#
# def get_items(db: Session, skip: int = 0, limit: int = 100):
#     return db.query(models.Item).offset(skip).limit(limit).all()
#
#
# def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
#     db_item = models.Item(**item.dict(), owner_id=user_id)
#     db.add(db_item)
#     db.commit()
#     db.refresh(db_item)
#     return db_item

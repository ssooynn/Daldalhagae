from typing import List, Union, Optional

from pydantic import BaseModel


class Review(BaseModel):
    ITEM_REVIEW_NO: int
    USERS_SNO: str
    PURCHASE_NO: int
    PET_SNO: str
    ITEM_SNO: str
    RATE: int
    CONTENT: Optional[str]

    class Config:
        orm_mode = True


class ReviewList(BaseModel):
    reviews: List[Review]

    class Config:
        orm_mode = True

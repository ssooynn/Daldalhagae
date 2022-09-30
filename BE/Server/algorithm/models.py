from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from database import Base


class ItemReview(Base):
    __tablename__ = "ITEM_REVIEW"

    ITEM_REVIEW_NO = Column(Integer, primary_key=True)
    USERS_SNO = Column(String)
    PURCHASE_NO = Column(Integer)
    PET_SNO = Column(String)
    ITEM_SNO = Column(String)
    RATE = Column(Integer)
    CONTENT = Column(String)

    # owner_id = Column(Integer, ForeignKey("users.id"))
    # owner = relationship("User", back_populates="items")



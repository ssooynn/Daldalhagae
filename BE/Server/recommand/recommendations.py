import pickle
from config import ROOT_DIR
import pandas as pd
from algorithm import SVD
from algorithm import TDIDF

# 데이터 로드
# 딕셔너리형태로 저장되어있음. key:petSno, value:list
with open(ROOT_DIR+'\\result\\SVD_feed.pkl', 'rb') as f:
    feeds = pickle.load(f)
with open(ROOT_DIR+'\\result\\SVD_snack.pkl', 'rb') as f:
    snacks = pickle.load(f)
# with open('..\\result\\toys_SVD.pkl', 'rb') as f:
#     toys = pickle.load(f)



# with open('..\\result\\pOmovikry2EJ5hVKxkf2K.pkl', 'rb') as f:
#     snacks = pickle.load(f)

# algo: [KNN,SVD,TDIDF]
# item: [feed,snack,toy]


def get_recommendations(pet_no):
    print("method call")
    recommendations = {}
    print(feeds.get(pet_no,[]))
    # 두 번째 인자에(리뷰 기록이 없을 경우 출력값) 인기차트 넣을것.
    recommendations['feeds'] = feeds.get(pet_no,[])
    recommendations['snacks'] = snacks.get(pet_no,[])
    return recommendations


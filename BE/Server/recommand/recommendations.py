import pickle
from config import ROOT_DIR

# 데이터 로드
# 딕셔너리형태로 저장되어있음. key:petSno, value:list
with open(ROOT_DIR+'/result/SVD_feed.pkl', 'rb') as f:
    feeds = pickle.load(f)
with open(ROOT_DIR+'/result/SVD_snack.pkl', 'rb') as f:
    snacks = pickle.load(f)
with open(ROOT_DIR+'/result/SVD_toy.pkl', 'rb') as f:
    toys = pickle.load(f)

def get_recommendations(pet_no):
    recommendations = {}
    print(feeds.get(pet_no,[]))
    # 두 번째 인자에(리뷰 기록이 없을 경우 출력값) 인기차트 넣을것.
    recommendations['feeds'] = feeds.get(pet_no,[])
    recommendations['snacks'] = snacks.get(pet_no,[])
    recommendations['toys'] = toys.get(pet_no, [])
    return recommendations
def get_tdidf(item_no:str):
    print("method call")

    if item_no.startswith('f'):
        item = 'feed'
    elif item_no.startswith('s'):
        item = 'snack'
    else:
        item = 'toy'
    with open(ROOT_DIR + '/result/TFIDF_'+item+'.pkl', 'rb') as f:
        recommendations = pickle.load(f)
    return recommendations[item_no]



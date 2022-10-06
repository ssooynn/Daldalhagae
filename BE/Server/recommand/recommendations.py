import pickle
from config import ROOT_DIR
import json

# 데이터 로드
# 딕셔너리형태로 저장되어있음. key:petSno, value:list


with open(ROOT_DIR+'/result/SVD_feed.pkl', 'rb') as f:
    feeds = pickle.load(f)
with open(ROOT_DIR+'/result/SVD_snack.pkl', 'rb') as f:
    snacks = pickle.load(f)
with open(ROOT_DIR+'/result/SVD_toy.pkl', 'rb') as f:
    toys = pickle.load(f)
with open(ROOT_DIR+'/result/popular.pkl', 'rb') as f:
    popular = pickle.load(f)
with open(ROOT_DIR + '/data/feed_detail.JSON', 'r') as f:
    feed_detail = json.load(f)
with open(ROOT_DIR + '/data/snack_detail.JSON', 'r') as f:
    snack_detail = json.load(f)
def get_recommendations(pet_no:str,alergy:list):
    # load_data()
    recommendations = {}
    # 두 번째 인자에(리뷰 기록이 없을 경우 출력값) 인기차트 넣을것.
    recommendations['feeds'] = alergy_filter(feeds.get(pet_no,popular['feeds']),alergy)[:10]
    recommendations['snacks'] =  alergy_filter(snacks.get(pet_no,popular['snacks']),alergy)[:10]
    recommendations['toys'] =  alergy_filter(toys.get(pet_no, popular['toys']),alergy)[:10]
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
def alergy_filter(recs:list,alergy:list):
    # print("진입")
    # print(alergy)
    new_recs=recs.copy()
    # alergy =[1,3,4,5]
    for rec in recs:
        for item in feed_detail:
            if item['item_sno']==rec:
                for x in alergy:
                    if x in item['materials']:
                        # print("알러지필터링:"+rec+"에 "+str(x)+" 가 포함됨")
                        new_recs.remove(rec)
                        break
    return new_recs

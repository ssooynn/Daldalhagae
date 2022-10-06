
import pandas as pd
from surprise import Dataset, SVD,Reader,KNNBasic
from surprise.model_selection import train_test_split
from config import ROOT_DIR
import pickle

# Surprise : 리뷰 평점기반 SVD,knn

def train(algorithm:str,type:str):
    # csv encoding
    encoding = 'CP949'
    if type=='toy':
        encoding='utf-8'
    # set type
    print("[training started] algo:"+algorithm+" item_type:"+type)

    # data loading
    df = pd.DataFrame(pd.read_csv(ROOT_DIR+'/data/' + type + '_review_csv.csv', encoding=encoding)).filter(items=['pet_sno', 'item_sno', 'rate'])
    df_new = pd.DataFrame(pd.read_csv(ROOT_DIR+'/data/' + type + '_new_review.csv', encoding=encoding)).filter(items=['pet_sno', 'item_sno', 'rate'])
    items = pd.read_csv(ROOT_DIR+'/data/' + type + '_csv.csv', encoding=encoding)
    pets = pd.read_csv(ROOT_DIR+'/data/' + type + '_review_csv.csv', encoding=encoding)
    df_concat = pd.concat([df,df_new])

    # active pet 리스트
    pet_set = set(df_new['pet_sno'])

    # surprise dataset으로 넘겨주기.
    reader = Reader(rating_scale=(1, 5))
    data = Dataset.load_from_df(df_concat, reader)
    # trainset = result.build_full_trainset()
    trainset, testset = train_test_split(data, test_size=0.001, random_state=42)


    # set algo
    if algorithm=='KNN':
        algo = KNNBasic(k=50)
    else:
        algo=SVD(n_factors=50, n_epochs=20, random_state=42)
    algo.fit(trainset)

    #펫, 아이템 데이터
    result = {}
    # train : active user에 대해서만 수행.
    for pet_id in pet_set:
        # 평가완료 데이터
        unrated = get_unrated(items,pets,pet_id)
        predictions = [algo.predict(pet_id, item) for item in unrated]
        # 내림차순 정렬
        predictions.sort(key=lambda x: x.est,reverse=True)
        top_preds = predictions[:20]
        top_items = [pred.iid for pred in top_preds]
        # top_rates = [pred.est for pred in top_preds]
        # top_names = items[items.item_sno.isin(top_items)]['name']
        # #튜플로 담기
        # top_item_preds = [(ids, rating, name) for ids, rating, name in
        #                   zip(top_items, top_rates, top_names)]
        result[pet_id]=top_items

    # pickle 저장.
    with open(ROOT_DIR+'/result/'+algorithm+'_'+type+'.pkl', 'wb') as f:
        pickle.dump(result, f, protocol=pickle.HIGHEST_PROTOCOL)

    print("[completed train] algo:"+algorithm+" item_type:"+type)
def get_unrated(items,pets,petSno):
    rated_items = pets[pets.pet_sno == petSno]['item_sno'].tolist()
    total_items = items['item_sno'].tolist()
    unrated_items = [item for item in total_items if item not in rated_items]
    # print("pet_sno 의 unrated items:"+len(unrated_items))
    return unrated_items

    # print(petId + " 를 위한 사료추천 by SVD")
    # for item in top_item_preds:
    #     #     print(item)

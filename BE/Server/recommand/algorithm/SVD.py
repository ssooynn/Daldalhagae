# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
import pandas as pd
import numpy as np
from io import StringIO
from surprise import accuracy, Dataset, SVD,Reader,KNNBasic
from surprise.model_selection import train_test_split,cross_validate

# Surprise : 리뷰 평점기반 SVD,knn

if __name__ == '__main__':
    # 인코딩 추가안하면 error
    df = pd.DataFrame(pd.read_csv('C:\\Users\\KMLEE\\Desktop\\data\\review_csv.csv', encoding='CP949'))

    # # 순서 지켜야 함.
    df_filtered= df.filter(items=['pet_sno', 'item_sno', 'rate'])
    # surprise dataset으로 넘겨주기.
    reader = Reader(rating_scale=(1, 5))

    data = Dataset.load_from_df(df_filtered, reader)
    # trainset = predictions.build_full_trainset()
    trainset, testset = train_test_split(data, test_size=0.001, random_state=42)

    # algo = KNNBasic(k=50)
    algo=SVD(n_factors=50, n_epochs=20, random_state=42)
    algo.fit(trainset)

    uid = 'pOmovikry2EJ5hVKxkf2K'  # raw user id (as in the ratings file). They are **strings**!
    # iid = 'fZ529EWuqunmK7byYWfM5'  # raw item id (as in the ratings file). They are **strings**!

    # get a prediction for specific users and items.
    # pred = algo.predict(uid, iid, r_ui=4, verbose=True)
    # cross_validate(algo, predictions, measures=['RMSE', 'MAE'], cv=5, verbose=True)
    # print(df_filtered.head(20))
    # 베이스라인 알고리즘 선택 : sgd vs als : https://velog.io/@2chalsu/SGD-vs-ALS-in-MF#sgdstochastic-gradient-descent
    # 유사도 측정 알고리즘 선택: RMSE, MAE\
    # result = [(pred.uid, pred.iid, pred.est) for pred in predictions]


    #펫, 아이템 데이터
    items = pd.read_csv('..\\data\\feed_csv.csv', encoding='CP949')
    pets = pd.read_csv('..\\data\\feed_review_csv.csv', encoding='CP949')
    # 평가완료 데이터
    def get_unrated(items,pets,petSno):
        rated_items = pets[pets.pet_sno == petSno]['item_sno'].tolist()
        total_items = items['item_sno'].tolist()
        unrated_items = [item for item in total_items if item not in rated_items]
        return unrated_items
    print("----평가아직안한 데이터수----")
    print(len(get_unrated(items,pets,'pOmovikry2EJ5hVKxkf2K')))

    petId = 'pOmovikry2EJ5hVKxkf2K'
    unrated = get_unrated(items,pets,petId)
    predictions = [algo.predict(petId, item) for item in unrated]

    print(predictions)
    # 내림차순 정렬
    predictions.sort(key=lambda x: x.est,reverse=True)
    top_preds = predictions[:10]

    top_items = [pred.iid for pred in top_preds]
    top_rates = [pred.est for pred in top_preds]
    top_names = items[items.item_sno.isin(top_items)]['name']
    #튜플로 담기
    top_item_preds = [(ids, rating, name) for ids, rating, name in
                      zip(top_items, top_rates, top_names)]

    print(petId + " 를 위한 사료추천 by SVD")
    for item in top_item_preds:
        print(item)

#cf
#cb
# See PyCharm hrelp at https://www.jetbrains.com/help/pycharm/

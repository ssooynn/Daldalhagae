
import pandas as pd
from surprise import accuracy, Dataset, SVD,Reader,KNNBasic
from surprise.model_selection import train_test_split,cross_validate
import pickle

# 하이퍼마라미터 튜닝용 testpage
if __name__ == '__main__':
    # 인코딩 추가안하면 error
    df = pd.DataFrame(pd.read_csv('C:/Users/KMLEE/Desktop/data/review_csv.csv', encoding='CP949'))

    # # 순서 지켜야 함.
    df_filtered= df.filter(items=['pet_sno', 'item_sno', 'rate'])
    # surprise dataset으로 넘겨주기.
    reader = Reader(rating_scale=(1, 5))

    data = Dataset.load_from_df(df_filtered, reader)
    # trainset = result.build_full_trainset()
    trainset, testset = train_test_split(data, test_size=0.001, random_state=42)

    # algo = KNNBasic(k=50)
    algo=SVD(n_factors=50, n_epochs=20, random_state=42)
    algo.fit(trainset)

    uid = 'pOmovikry2EJ5hVKxkf2K'  # raw user id (as in the ratings file). They are **strings**!
    iid = 'fZ529EWuqunmK7byYWfM5'  # raw item id (as in the ratings file). They are **strings**!

    # cross validate
    pred = algo.predict(uid, iid, r_ui=4, verbose=True)
    cross_validate(algo, result, measures=['RMSE', 'MAE'], cv=5, verbose=True)
    # print(df_filtered.head(20))
    # 베이스라인 알고리즘 선택 : sgd vs als : https://velog.io/@2chalsu/SGD-vs-ALS-in-MF#sgdstochastic-gradient-descent
    # 유사도 측정 알고리즘 선택: RMSE, MAE\
    result = [(pred.uid, pred.iid, pred.est) for pred in result]



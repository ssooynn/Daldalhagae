import pickle
import pandas as pd
from algorithm import SVD
from algorithm import TDIDF


def save_new_reviews(db_review):
    data = [
        {'pet_sno': [], 'item_sno': [], 'rate': []},
        {'pet_sno': [], 'item_sno': [], 'rate': []},
        {'pet_sno': [], 'item_sno': [], 'rate': []},
    ]
    # print(reviews.reviews[0].ITEM_REVIEW_NO)
    for review in db_review:
        if review.ITEM_SNO[0] == 'f':
            type = 0
        elif review.ITEM_SNO[0] == 's':
            type = 1
        else:
            type = 2
        data[type]['pet_sno'].append(review.PET_SNO)
        data[type]['item_sno'].append(review.ITEM_SNO)
        data[type]['rate'].append(review.RATE)

    for i in range(3):
        name = ['feed', 'snack', 'toy']
        df = pd.DataFrame(data[i])
        df.to_csv('data\\' + name[i] + '_new_review.csv')
    return


def train_all():
    # algo=['SVD','KNN','TDIDF']
    algos='SVD'
    # types=['feed','snack','toy']
    types = ['feed', 'snack']
    for type in types:
        SVD.train(algos,type)
    return


def train(algo, type, new_reviews):
    if algo == 'SVD':
        SVD.train(algo, type)
    elif algo == 'TDIDF':
        TDIDF(algo, type)
    return

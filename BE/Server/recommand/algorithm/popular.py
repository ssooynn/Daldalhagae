import numpy as np
import pandas as pd
import pickle

from sqlalchemy import over

from config import ROOT_DIR

# def top_mean_rating():
if __name__=='__main__':
    result = {}
    item_types=['feed','snack','toy']
    df_feed = pd.DataFrame(pd.read_csv(ROOT_DIR + '/data/feed_review_csv.csv', encoding='CP949')).filter(
        items=['item_sno', 'rate'])
    df_snack = pd.DataFrame(pd.read_csv(ROOT_DIR + '/data/snack_review_csv.csv', encoding='CP949')).filter(
        items=['item_sno', 'rate'])
    df_toy = pd.DataFrame(pd.read_csv(ROOT_DIR + '/data/toy_review_csv.csv', encoding='utf-8')).filter(
        items=['item_sno', 'rate'])

    # 평가데이터가 100개가 넘는 상품을 평균 평점으로 정렬
    rank_feed = df_feed.groupby('item_sno')['rate'].agg(**{'mean_rate' : 'mean','cnt':'count'}).reset_index().query('cnt>100')
    rank_feed = rank_feed.sort_values(by='mean_rate', ascending=False)['item_sno'].head(20)
    # print(rank_feed.sort_values(by='mean_rate', ascending=False))
    feeds = rank_feed.values.tolist()

    rank_snack = df_snack.groupby('item_sno')['rate'].agg(**{'mean_rate': 'mean', 'cnt': 'count'}).reset_index().query('cnt>100')
    rank_snack = rank_snack.sort_values(by='mean_rate', ascending=False)['item_sno'].head(20)
    # print(rank_feed.sort_values(by='mean_rate', ascending=False))
    snacks = rank_snack.values.tolist()

    rank_toy = df_toy.groupby('item_sno')['rate'].agg(**{'mean_rate': 'mean', 'cnt': 'count'}).reset_index().query('cnt>100')
    rank_toy = rank_toy.sort_values(by='mean_rate', ascending=False)['item_sno'].head(20)
    # print(rank_feed.sort_values(by='mean_rate', ascending=False))
    toys = rank_toy.values.tolist()

    result['feeds'] = feeds
    result['snacks'] = snacks
    result['toys'] = toys



    # pickle 저장.
    with open(ROOT_DIR + '/result/popular.pkl', 'wb') as f:
        pickle.dump(result, f, protocol=pickle.HIGHEST_PROTOCOL)
    # return

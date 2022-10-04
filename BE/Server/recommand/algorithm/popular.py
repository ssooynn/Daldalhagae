import pandas as pd
from config import ROOT_DIR

if __name__=='__main__':
    item_types=['feed','snack','toy']
    df_feed = pd.DataFrame(pd.read_csv(ROOT_DIR + '/data/feed_review_csv.csv', encoding='CP949')).filter(
        items=['item_sno', 'rate'])
    df_snack = pd.DataFrame(pd.read_csv(ROOT_DIR + '/data/snack_review_csv.csv', encoding='CP949')).filter(
        items=['item_sno', 'rate'])
    df_toy = pd.DataFrame(pd.read_csv(ROOT_DIR + '/data/toy_review_csv.csv', encoding='utf-8')).filter(
        items=['item_sno', 'rate'])

    rank_feed = df_feed.groupby('item_sno').size()
    # print(rank_feed.head(10))
    print(rank_feed)
    # print(rank_feed.sort_values('rate',ascending=False).head(10))




    # pickle 저장.
    # with open(ROOT_DIR + '\\result\\' + algorithm + '_' + type + '.pkl', 'wb') as f:
    #     pickle.dump(result, f, protocol=pickle.HIGHEST_PROTOCOL)
    # return

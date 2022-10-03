import pandas as pd
import numpy as np
from konlpy.tag import Okt
from sklearn.feature_extraction.text import TfidfVectorizer,CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import re

# 전처리.
# concept. 형태소 분석 시 원하는 정보를 얻을 수 없으므로, 리뷰 데이터를 분석하여 중요한 키워드를 선정,
# 해당 키워드의 count만 고려한다.
# 문맥을 고려하는 방법?
if __name__ == '__main__':
    okt = Okt()
    review_data = pd.DataFrame(pd.read_csv('..\\data\\feed_review_csv.csv', encoding='CP949'))
    reviews = review_data.filter(items=['item_sno', 'content'])

    # id리스트
    itemids = reviews['item_sno'].tolist()
    # itemset = set(itemids)
    # print("리뷰 있는 아이템 수 : "+str(len(itemset)))

    # content리스트
    contents = reviews['content'].tolist()
    integrated=[]
    curr=-1;
    for i in range(0,len(itemids)):
        if itemids[i]!= itemids[i-1]:
            curr+=1
            integrated.append([itemids[i],contents[i]])
        elif itemids[i]==itemids[i-1]:
            integrated[curr][1]+=" "+contents[i]

    # print(len(integrated))
    # for i in range(0,len(integrated)):
    #     print(integrated[i][0])

    # 전처리
    # print(re.sub('[:punct:]|\n',"",integrated[0][1]))
    def parse(list):
        parsedcontent = []
        for item in list:
            parsedcontent.append(re.sub('[:punct:]|\n',"",item[1])[:100])
        return parsedcontent

    # todo:형태소분석
    # print(okt.pos('안녕하세요 반려견 구독 서비스 달달하개 입니다. 좋은 상품을 추천해 드리겠습니다!'))
    def getPosList(list):
        posList = []
        for item in list:
            posList.append(okt.pos(item[1]))
        return posList

    train = parse(integrated)

    # CountVectorizer
    # vect = CountVectorizer()
    # vect.fit(train)
    # print(vect.transform([train[0]]).toarray())

    # 차원 50으로 고정.
    tfidv = TfidfVectorizer(max_features=100).fit(train)
    tfidv = tfidv.transform(train).toarray()

    #유사도행렬
    cosine_matrix = cosine_similarity(tfidv,tfidv)
    np.round(cosine_matrix,4)
    print("cosine matrix--------")
    print(cosine_matrix)

    # 아이템 인덱싱
    feed_data =pd.DataFrame(pd.read_csv('C:\\Users\\KMLEE\\Desktop\\data\\feed_csv.csv', encoding='CP949')).filter(items=['item_sno', 'name'])

    idx2sno = {} # index =>sno
    for idx, sno in enumerate(integrated):
        idx2sno[idx] = sno[0]
    sno2idx ={} # sno=>index
    for idx, sno in idx2sno.items():
        sno2idx[sno] = idx
    # sno2name ={} # sno => name
    # for sno,name in enumerate(feed_data['name']):
    #     sno2name[sno]= name

    print(idx2sno)
    print(sno2idx)

    # 추천리스트 생성
    sno = 'fZ529EWuqunmK7byYWfM5'
    idx = sno2idx[sno]
    print(sno)
    print(idx)
    print(cosine_matrix[idx])
    sim_scores = [(i, c,feed_data[feed_data.item_sno == idx2sno[i]].iat[0, 1]) for i, c in enumerate(cosine_matrix[idx]) if i != idx]
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True) #정렬

    # 10등까지 출력
    for i in sim_scores[:10]:
        print(i)





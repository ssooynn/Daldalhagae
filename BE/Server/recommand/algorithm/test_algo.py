from config import ROOT_DIR
import json

if __name__ == '__main__':
    # SVD.train('KNN','feed')
    # type='feed'
    # df = pd.DataFrame(pd.read_csv('..\\data\\' + type + '_review_csv.csv', encoding='CP949')).filter(items=['pet_sno', 'item_sno', 'rate'])
    # df_new = pd.DataFrame(pd.read_csv('..\\data\\' + type + '_new_review.csv', encoding='CP949')).filter(items=['pet_sno', 'item_sno', 'rate'])
    # df_concat= pd.concat([df,df_new])
    #
    # pet_set = set(df_new['pet_sno'])
    # print(pet_set)
    # print(ROOT_DIR)
    # df = pd.DataFrame(pd.read_csv(ROOT_DIR + '/data/' + type + '_review_csv.csv', encoding=encoding)).filter(
    #     items=['pet_sno', 'item_sno', 'rate'])
    lst = ['a','b','c']
    lst2 = ['a','c']
    lst.remove(lst2[0])
    print(lst)
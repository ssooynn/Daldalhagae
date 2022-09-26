import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'

const MypageSubscriptions = () => {
 const location = useLocation()
 const path = location.pathname
 
 const [subscriptionList, setSubscriptionList] = useState([{
  subscriptionNo:'A1235312',
  subscriptionName: 'Light All In One Package',
  purchaseList : [{
              itemSno:'T11215',
              itemName: '미니스타터',
              itemImg:'https://img.danawa.com/prod_img/500000/000/236/img/3236000_1.jpg?shrink=330:330&_v=20220725154103',
              purchaseNo:'P13251'
              },
              {
                itemSno:'T11215',
                itemName: '미니스타터',
                itemImg:'https://img.danawa.com/prod_img/500000/000/236/img/3236000_1.jpg?shrink=330:330&_v=20220725154103',
                purchaseNo:'P13252'
                }],
  petSno:'asdfdasf',
  petName: '해리',
  subscriptionStartDate: '2022-09-20',
  subscriptionEndDate: '2022-10-19',
  autoPaymentFlag: 1,
  },
  {
    subscriptionNo:'A1235312',
    subscriptionName: 'Toy Package',
    purchaseList : [{
      itemSno:'T11215',
      itemName: '미니스타터',
      itemImg:'',
      purchaseNo:'P13251'
      },{
        itemSno:'T11215',
        itemName: '미니스타터',
        itemImg:'',
        purchaseNo:'P13252'
        }],
    petSno:'asdfdasf',
    petName: '해리',
    subscriptionStartDate: '2022-09-20',
    subscriptionEndDate: '2022-10-19',
    autoPaymentFlag: 1,
    },
 ])

  useEffect(()=>{
    // fetching 
    // path에 따라 /mypage || /mypage/subscriptionsNow => 현재 구독 리스트 
    //  /mypage/subscriptions => 전체 구독 리스트

  },[])

  return (
    <div style={{padding:'10px 5px'}}>
    {subscriptionList ? 
      subscriptionList.map((subscription, idx)=>{
        return(
          // 구독 리스트 아이템 컴포넌트
          <div id={idx}>
            <SubscriptionItem page='subsNow' bgImg={subscription.subscriptionName.replaceAll(' ','')} subscription={subscription} reviewConnect={false} isDetail={false}></SubscriptionItem>
          </div>

        )
      })
    :
      <div></div>
    }
    </div>
  )
}

export default MypageSubscriptions
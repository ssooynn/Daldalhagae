import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'

const MypageSubscriptions = () => {
 const location = useLocation()
 const path = location.pathname
 
 const [subscriptionList, setSubscriptionList] = useState([{
  subscriptionPk:'A1235312',
  subscriptionsName: 'Toy Package',
  price: 25000,
  items : [{
              sno : '(String)',
              name : '(String)',
              image : '(String)',
              effects: '(Array)',
              targets: '(Array)',
              materials: '(Array)',
              particle: '(String)',
              grade: '(String)',
              }],
  petName: '해리',
  startDate: '2022-09-20',
  endDate: '2022-10-19',
  autoPaymentFlag: 1,
  },
  {
    subscriptionPk:'A1235312',
    subscriptionsName: 'All In One Package',
    price: 25000,
    items : [{
                sno : '(String)',
                name : '(String)',
                image : '(String)',
                effects: '(Array)',
                targets: '(Array)',
                materials: '(Array)',
                particle: '(String)',
                grade: '(String)',
                }],
    petName: '해리',
    startDate: '2022-09-20',
    endDate: '2022-10-19',
    autoPaymentFlag: 1,
    }])

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
            <SubscriptionItem page='subsNow' bgImg={subscription.subscriptionsName.replaceAll(' ','')} subscription={subscription} reviewConnect={false} isDetail={false}></SubscriptionItem>
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
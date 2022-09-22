import React from 'react'
import { useEffect, useState } from 'react'
import { SubscriptionItem } from '../../components/Mypage/MypageCommon'

const MypageSubscriptionsNow = () => {
 const [subscriptionList, setSubscriptionList] = useState([{
  subscriptionPk:'A1235312',
  subscriptionsName: 'All In One Package',
  price: 25000,
  items : [{
              sno : (String),
              name : (String),
              image : (String),
              effects: (Array),
              targets: (Array),
              materials: (Array),
              particle: (String),
              grade: (String),
              }],
  petName: '해리',
  startDate: '2022-09-20',
  endDate: '2022-10-19',
  autoPaymentFlag: 1,
  }])

  useEffect(()=>{
    // fetching 현재 구독 내역 조회

  },[])

  return (
    <>
    {subscriptionList ? 
      subscriptionList.map((subscription, idx)=>{
        return(
          // 구독 리스트 아이템 컴포넌트
          <div id={idx}>
            <SubscriptionItem></SubscriptionItem>
          </div>

        )
      })
    :
      <div></div>
    }
    </>
  )
}

export default MypageSubscriptionsNow
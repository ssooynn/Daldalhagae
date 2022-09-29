import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import LoadingComponent from '../../components/LoadingComponent'

import { currentSubscription, subscriptionAll } from '../../api/mypageSubscription'

const MypageSubscriptions = () => {
 const location = useLocation()
 const path = location.pathname
 console.log(path)
 const userSno = 'uXJFRDEC7DuyYasedNxU1'
 
 const [subscriptionList, setSubscriptionList] = useState([])

  useEffect(()=>{
    // fetching 
    // path에 따라 /mypage || /mypage/subscriptionsNow => 현재 구독 리스트 
    //  /mypage/subscriptions => 전체 구독 리스트
    setSubscriptionList([])
    const path = location.pathname
    if (['/mypage','/mypage/subscriptionsNow'].includes(path)) {
      currentSubscription(userSno)
      .then((res)=>{
        console.log(res.data)
        const data = res.data
        const newData = data.map((subs, idx)=>{
          let newSubs = subs
          newSubs.subscriptionEndDate = subs.endDate.join('.')
          newSubs.subscriptionStartDate = subs.startDate.join('.')
          return (newSubs)
        })
        setSubscriptionList(newData)
      }) 
      .catch((err)=>{console.log(err)})
    } else{
      subscriptionAll(userSno)
      .then((res)=>{
        console.log(res.data, 'all')
        const data = res.data
        const newData = data.map((subs, idx)=>{
          let newSubs = subs
          newSubs.subscriptionEndDate = subs.endDate.join('.')
          newSubs.subscriptionStartDate = subs.startDate.join('.')
          return (newSubs)
        })
        setSubscriptionList(newData)
      }) 
      .catch((err)=>{console.log(err)})
    }
  },[location])

  return (
    <div style={{padding:'10px 5px', position:'relative'}}>
    {/* <LoadingComponent></LoadingComponent> */}
    {subscriptionList ? 
      subscriptionList.map((subscription, idx)=>{
        return(
          // 구독 리스트 아이템 컴포넌트
          <div key={idx}>
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
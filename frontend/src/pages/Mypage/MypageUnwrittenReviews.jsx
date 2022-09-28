import React from 'react'
import { useEffect, useState } from 'react'
import '../../components/Mypage/MypageStyle.css'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import { reviewUnwritten } from '../../api/mypageReview'


const MypageUnwrittenReviews = () => {
  const userSno = 'uXJFRDEC7DuyYasedNxU1'
  const [subscriptionList, setSubscriptionList] = useState([])
    useEffect(()=>{
      // fetching 
      // path에 따라 /mypage || /mypage/subscriptionsNow => 현재 구독 리스트 
      //  /mypage/subscriptions => 전체 구독 리스트
      reviewUnwritten(userSno)
      .then((res)=>{
        console.log(res.data)
        setSubscriptionList(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
    const [popup, setPopup] = useState(false)


    useEffect(()=>{
      const body = document.getElementsByTagName('body')[0];
      if (popup) {
        body.classList.add('scrollLock');
      } else { 
        body.classList.remove('scrollLock');
      }
  
    }, [popup])

  return (
    <div style={{padding:'10px 5px'}}>
    {subscriptionList ? 
      subscriptionList.map((subscription, idx)=>{
        return(
          // 구독 리스트 아이템 컴포넌트
          <div key={idx}>
            <SubscriptionItem popup={popup} setPopup={setPopup} page='unwritten' bgImg={subscription.subscriptionName.replaceAll(' ','')} subscription={subscription} reviewConnect={true} isDetail={false}></SubscriptionItem>
          </div>

        )
      })
    :
      <div></div>
    }
    {/* <div style={{height:'300px'}}></div> */}
    </div>
  )
}

export default MypageUnwrittenReviews
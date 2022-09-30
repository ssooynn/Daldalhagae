import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { reviewList } from '../../api/mypageReview'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'


const MypageReviews = () => {
  const userSno = 'uXJFRDEC7DuyYasedNxU1'
  const [reviews , setReviews] = useState([])

  useEffect(()=>{
    reviewList(userSno)
    .then((res)=>{
      console.log(res)
      setReviews(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      {reviews.map((review,idx)=>{
        return(
          <div key={idx}>
            <SubscriptionItem page='reviewList' bgImg={review.subscriptionName.replaceAll(' ','')} subscription={review} reviewConnect={false} isDetail={false} isToggle={true}></SubscriptionItem>
          </div>
        )
      })}

    </div>
  )
}

export default MypageReviews
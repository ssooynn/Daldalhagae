import React from 'react'
import { useEffect, useState } from 'react'
import '../../components/Mypage/MypageStyle.css'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import MypagePagination from '../../components/Mypage/MypagePagination'

import { reviewUnwritten } from '../../api/mypageReview'

import { range } from "lodash";


const MypageUnwrittenReviews = () => {
  const userSno = 'udZ0a32z4Ur2LvGlmEXsN'
  const [subscriptionList, setSubscriptionList] = useState([])
  const [popup, setPopup] = useState(false)
  const [page, setPage] = useState(1);
  const [contentCnt, setContentCnt] = useState(0);
  const [totPage, setTotPage] = useState(0);
  const [viewablePages, setViewablePages] = useState([]);
  const reviewsPerPage = 3;
  const [showContents, setShowContents] = useState([]);
  const [rerender, setRerender] = useState(0);
  
  useEffect(()=>{
      // fetching 
      // path에 따라 /mypage || /mypage/subscriptionsNow => 현재 구독 리스트 
      //  /mypage/subscriptions => 전체 구독 리스트
      reviewUnwritten(userSno)
      .then((res)=>{
        console.log(res.data)
        setSubscriptionList(res.data)
        setContentCnt(res.data.length)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
  
    useEffect(() => {
      console.log(totPage)
      console.log(contentCnt)
      setTotPage(Math.ceil(contentCnt / reviewsPerPage));
      setViewablePages(contentCnt ? [...range(1, Math.min(totPage, 5) + 1)] : []);
    }, [contentCnt, totPage]);
  
    useEffect(() => {
      const tmp = subscriptionList.slice((page - 1) * reviewsPerPage, page * reviewsPerPage);
      setShowContents(tmp);
    }, [page, subscriptionList, rerender]);


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
      <>
      {showContents.map((subscription, idx)=>{
        return(
          // 구독 리스트 아이템 컴포넌트
          <div key={idx}>
            <SubscriptionItem popup={popup} setPopup={setPopup} page='unwritten' bgImg={subscription.subscriptionName.replaceAll(' ','')} subscription={subscription} reviewConnect={true} isDetail={false}></SubscriptionItem>
          </div>

        )
      })}      
      <MypagePagination 
        totPage={totPage}
        page={page}
        viewablePages={viewablePages}
        setPage={setPage}
        setViewablePages={setViewablePages}
      ></MypagePagination>
      </>

    :
      <div></div>
    }
    {/* <div style={{height:'300px'}}></div> */}
    </div>
  )
}

export default MypageUnwrittenReviews
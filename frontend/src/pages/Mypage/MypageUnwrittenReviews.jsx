import React from 'react'
import { useEffect, useState } from 'react'
import '../../components/Mypage/MypageStyle.css'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import MypagePagination from '../../components/Mypage/MypagePagination'

import { reviewUnwritten } from '../../api/mypageReview'
import { useSelector } from 'react-redux'


import { range } from "lodash";


const MypageUnwrittenReviews = (props) => {
  const usersSno = useSelector((state)=>state.user.user.user?.usersSno)
  const [subscriptionList, setSubscriptionList] = useState([])
  const [popup, setPopup] = useState(false)
  const [page, setPage] = useState(1);
  const [contentCnt, setContentCnt] = useState(0);
  const [totPage, setTotPage] = useState(0);
  const [viewablePages, setViewablePages] = useState([]);
  const reviewsPerPage = 3;
  const [showContents, setShowContents] = useState([]);
  const [rerender, setRerender] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetched, setIsFetched] = useState(false)
  
  useEffect(()=>{
      // fetching 
      // path에 따라 /mypage || /mypage/subscriptionsNow => 현재 구독 리스트 
      //  /mypage/subscriptions => 전체 구독 리스트
      setIsLoading(true)
      setIsFetched(false)
      reviewUnwritten(usersSno)
      .then((res)=>{
        console.log(res.data)
        setSubscriptionList(res.data)
        setContentCnt(res.data.length)
        setIsFetched(true)
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
      if (isFetched) {
        setIsLoading(false)
      }
    },[isFetched])


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
      {isLoading ? 
        <div style={{color:'#AC998A',margin:'100px auto', textAlign:'center'}}>LOADING...</div>  
      :
      <>
        {subscriptionList?.length ? 
        <>
        {showContents.map((subscription, idx)=>{
          return(
            // 구독 리스트 아이템 컴포넌트
            <div key={idx}>
              <SubscriptionItem popup={popup} setPopup={setPopup} page='unwritten' bgImg={subscription.subscriptionName.replaceAll(' ','')} subscription={subscription} reviewConnect={true} isDetail={false}></SubscriptionItem>
            </div>

          )
        })}
        {totPage > 1 ?
        <MypagePagination 
          totPage={totPage}
          page={page}
          viewablePages={viewablePages}
          setPage={setPage}
          setViewablePages={setViewablePages}
        ></MypagePagination>
        :
        <></>
      }      
        </>

      :
        <div style={{margin:'auto', marginTop:'150px', textAlign:'center'}}>
          현재 작성 가능한 후기가 없어요 🐾
        </div>
      }
       </>
      }
    </div>
  )
}

export default MypageUnwrittenReviews
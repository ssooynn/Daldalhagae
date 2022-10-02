import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import LoadingComponent from '../../components/LoadingComponent'
import MypagePagination from '../../components/Mypage/MypagePagination'

import { currentSubscription, subscriptionAll } from '../../api/mypageSubscription'

import { useSelector } from 'react-redux'

import { range } from "lodash";
import { FlexBox } from '../../components/MainComponent'

const MypageSubscriptions = () => {
 const location = useLocation()
 const path = location.pathname
 console.log(path)
 const usersSno = useSelector((state)=>state.user.user.user.usersSno)
 
 const [subscriptionList, setSubscriptionList] = useState([])
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
    setSubscriptionList([])
    const path = location.pathname
    if (['/mypage','/mypage/subscriptionsNow'].includes(path)) {
      currentSubscription(usersSno)
      .then((res)=>{
        console.log(res.data)
        const data = res.data
        const newData = data.map((subs, idx)=>{
          let newSubs = subs
          newSubs.subscriptionEndDate = subs.endDate.join('.')
          newSubs.subscriptionStartDate = subs.startDate.join('.')
          return (newSubs)
        })
        setSubscriptionList(newData.reverse())
        setContentCnt(newData.length)
        setIsFetched(true)
      }) 
      .catch((err)=>{console.log(err)})
    } else{
      subscriptionAll(usersSno)
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
        setContentCnt(newData.length)
        setIsFetched(true)
      }) 
      .catch((err)=>{console.log(err)})
    }
  },[location])

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

  return (
    <div style={{padding:'10px 5px', position:'relative'}}>
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
                <SubscriptionItem page='subsNow' bgImg={subscription.subscriptionName.replaceAll(' ','')} subscription={subscription} reviewConnect={false} isDetail={false}></SubscriptionItem>
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
          {['/mypage','/mypage/subscriptionsNow'].includes(location.pathname) ? 
            '현재 구독 중인 상품이 없어요 🐾' :
            '구독 내역이 존재하지 않아요 🐾'}
          </div>  }
      </>
            
      }
    {/* <LoadingComponent></LoadingComponent> */}

    </div>
  )
}

export default MypageSubscriptions
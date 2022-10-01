import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import MypageSideBar from '../../components/Mypage/MypageSideBar'
import MypageSubscriptions from './MypageSubscriptions'
import MypageUnwrittenReviews from './MypageUnwrittenReviews'
import MypageReviews from './MypageReviews'
import MypageUser from './MypageUser'
import MypageUserUpdate from './MypageUserUpdate'
import MypagePetUpdate from './MypagePetUpdate'
import MypagePetDetail from './MypagePetDetail'
import MypageRoutingTitle from '../../components/Mypage/MypageRoutingTitle'
import MypageSubscriptionDetail from './MypageSubscriptionDetail'

import MypageHeaderCard from '../../components/Mypage/MypageHeaderCard'

import { mypageMain } from '../../api/mypageUser'

const Mypage = () => {
  const userSno = 'udZ0a32z4Ur2LvGlmEXsN'
  const [userInfo, setUserInfo] = useState({name:'',
  subscriptionCnt:0, 
  unReviewCnt: 0, 
  pets: []
 })
  const [currentFocus, setCurrentFocus] = useState({})
  const [rerender, setRerender] = useState(0)

// userfetching api: 마이페이지 메인
  useEffect(()=>{
    mypageMain(userSno).then((res)=>{
      setUserInfo(res.data)
      console.log(res.data,'main')  
    }
    )
  },[rerender])

  useEffect(()=>{
  }, [currentFocus])


  const headerContainer = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
    width:'100%',
    height: '25vw',
    minHeight:'280px',
    maxHeight:'360px',
    backgroundColor: '#F7F0EA',
    margin: '0',
    display:'flex',

  }

  const contentContainer = {
    width:'70%',
    margin:'0 auto',
    paddingTop:'2em',
    display:'flex',
    justifyContent:'space-between',

  }

  const routingContainer ={
    width: '76%',
    minHeight: '100%',
    marginLeft: '3%',
    boxSizig: 'border-box'
  }


  return (
    <div>
      <div style={{height:'70px'}}></div>
      <div style={headerContainer}>
        <MypageHeaderCard user={userInfo} rerender={rerender}/>
      </div>
      <div style={contentContainer}>
        <MypageSideBar></MypageSideBar>
        <div style={routingContainer}>
          <MypageRoutingTitle currentFocus={currentFocus}></MypageRoutingTitle>
          <Routes>
            <Route
              exact="true"
              path=""
              element={
                <MypageSubscriptions setCurrentFocus={setCurrentFocus}/>
              }
            />
            <Route
              path="subscriptionsNow"
              element={
                <MypageSubscriptions setCurrentFocus={setCurrentFocus}/>
              }
            />
            <Route
              path="subscriptions"
              element={
                <MypageSubscriptions setCurrentFocus={setCurrentFocus}/>
              }            
            />
            <Route
              path="subscriptionDetail"
              element={
                <MypageSubscriptionDetail/>
              }            
            />
            <Route
              path="unwrittenReviews"
              element={
                <MypageUnwrittenReviews/>
              }               
            />
            <Route
              path="reviews"
              element={
                <MypageReviews />
              }   
            />
            <Route
              path="user"
              element={
                <MypageUser/>
              }               
            />
            <Route
              path="userUpdate"
              element={
                <MypageUserUpdate rerender={rerender} setRerender={setRerender}/>
              }               
            />
            <Route
              path="petDetail"
              element={
                <MypagePetDetail rerender={rerender} setCurrentFocus={setCurrentFocus}/>
              }               
            />
            <Route
              path="petAdd"
              element={
                <MypagePetUpdate rerender={rerender} setRerender={setRerender}/>
              }               
            />
            <Route
              path="petUpdate"
              element={
                <MypagePetUpdate rerender={rerender} setRerender={setRerender}/>
              }               
            />
          </Routes>  
        </div>       
        </div>
        <div style={{height:'400px'}}></div>
      </div>

  )
}

export default Mypage
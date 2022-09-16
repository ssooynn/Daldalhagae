import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import MypageSideBar from '../../components/Mypage/MypageSideBar'
import MypageSubscriptionsNow from './MypageSubscriptions'
import MypageSubscriptions from './MypageSubscriptions'
import MypageUnwrittenReviews from './MypageUnwrittenReviews'
import MypageReviews from './MypageReviews'
import MypageUser from './MypageUser'
import MypageUserUpdate from './MypageUserUpdate'
import MypagePet from './MypagePet'
import MypagePetUpdate from './MypagePetUpdate'

import MypageHeaderCard from '../../components/Mypage/MypageHeaderCard'

const Mypage = () => {
  const params = useParams()
  const param = Object.values(params)[0]


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
  }

  const titleDiv = {
    width: '100%',
    textAlign:'left',
    padding: '0 0.1em 0.6em',
    borderBottom:'0.5px solid ',
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
    color: '#1f1d1d',
    fontSize: '1.1em',
    fontWeight: '600'
  }

  const title = {
    '':'진행 중인 구독',
    'subscriptionsNow':'진행 중인 구독',
    'subscriptions':'전체 구독',
    'unwrittenReviews':'미작성 후기',
    'reviews':'내가 작성한 후기',
    'user':'개인 정보 관리',
    'userUpdate':'개인 정보 수정',
    'pet':'반려견 관리',
    'petUpdate':'반려견 정보 수정',
  }

  return (
    <div>
      <div style={{height:'100px'}}></div>
      <div style={headerContainer}>
        <MypageHeaderCard/>
      </div>
      <div style={contentContainer}>
        <MypageSideBar></MypageSideBar>
        <div style={routingContainer}>
          <div style={titleDiv}>
            {title[param]}
          </div>
          <Routes>
            <Route
              exact="true"
              path=""
              element={
                <MypageSubscriptionsNow/>
              }
            />
            <Route
              path="subscriptionsNow"
              element={
                <MypageSubscriptionsNow/>
              }
            />
            <Route
              path="subscriptions"
              element={
                <MypageSubscriptions/>
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
                <MypageReviews/>
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
                <MypageUserUpdate/>
              }               
            />
            <Route
              path="pet"
              element={
                <MypagePet/>
              }               
            />
            <Route
              path="petUpdate"
              element={
                <MypagePetUpdate/>
              }               
            />
          </Routes>  
        </div>       
        </div>
      </div>

  )
}

export default Mypage
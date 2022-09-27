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
  const userSno = 'uXJFRDEC7DuyYasedNxU1'
  const [userInfo, setUserInfo] = useState({
    user:{
      name:'김김김',
      profile:'',
    },
    delivering:0,
    subscribingCnt: 1,
    unwrittenReviews: 2,
    pet: [
      {
        name:'해리',
        petId:'A12455',
        profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
    ]
  }
)
  const [currentFocus, setCurrentFocus] = useState({})

// userfetching api: 마이페이지 메인
  useEffect(()=>{
    mypageMain(userSno).then((res)=>{
      setUserInfo(res.data)
      console.log(res.data)  
    }
    )
  },[])

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
        <MypageHeaderCard user={userInfo}/>
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
                <MypageUserUpdate/>
              }               
            />
            <Route
              path="petDetail"
              element={
                <MypagePetDetail setCurrentFocus={setCurrentFocus}/>
              }               
            />
            <Route
              path="petAdd"
              element={
                <MypagePetUpdate/>
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
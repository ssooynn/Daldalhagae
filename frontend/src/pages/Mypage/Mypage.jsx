import React, {useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import MypageSideBar from '../../components/Mypage/MypageSideBar'
import MypageSubscriptionsNow from './MypageSubscriptions'
import MypageSubscriptions from './MypageSubscriptions'
import MypageUnwrittenReviews from './MypageUnwrittenReviews'
import MypageReviews from './MypageReviews'
import MypageUser from './MypageUser'
import MypageUserUpdate from './MypageUserUpdate'
import MypagePetUpdate from './MypagePetUpdate'
import MypagePetDetail from './MypagePetDetail'
import MypageRoutingTitle from '../../components/Mypage/MypageRoutingTitle'

import MypageHeaderCard from '../../components/Mypage/MypageHeaderCard'

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({
    name:'김김김',
    phoneNo:'010-1234-1234',
    email:'email@gmail.com',
    address: '서울특별시 강남구 역삼동 테헤란로 212',
    addressDetail: '1102호',
    zip: '06220',
    delivering:0,
    subscribingCnt: 1,
    unwrittenReviews: 2,
    repPets: [
      {
        name:'해리',
        petId:'A12455',
        profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
    ]
  }
)
  const [currentSubsList, setCurrentSubsList] = useState([])
  const [subsList, setSubsList] = useState([])
  const [unwrittenReviewList, setUnwrittenReviewList] = useState([])
  const [reviewList, setReviewList] = useState([])
  const [currentFocus, setCurrentFocus] = useState({})

// userfetching
      


  useEffect(()=>{

  }, [])

  useEffect(()=>{
    console.log(currentFocus)
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
      <div style={{height:'60px'}}></div>
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
                <MypageSubscriptionsNow currentSubsList={currentSubsList} setCurrentFocus={setCurrentFocus}/>
              }
            />
            <Route
              path="subscriptionsNow"
              element={
                <MypageSubscriptionsNow currentSubsList={currentSubsList} setCurrentFocus={setCurrentFocus}/>
              }
            />
            <Route
              path="subscriptions"
              element={
                <MypageSubscriptions subsList={subsList} setCurrentFocus={setCurrentFocus}/>
              }            
            />
            <Route
              path="unwrittenReviews"
              element={
                <MypageUnwrittenReviews unwrittenReviewList={unwrittenReviewList}/>
              }               
            />
            <Route
              path="reviews"
              element={
                <MypageReviews reviewList={reviewList} />
              }   
            />
            <Route
              path="user"
              element={
                <MypageUser user={userInfo}/>
              }               
            />
            <Route
              path="userUpdate"
              element={
                <MypageUserUpdate user={userInfo}/>
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
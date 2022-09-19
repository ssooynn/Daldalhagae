import React, {useEffect, useState} from 'react'
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
import MypagePetDetail from './MypagePetDetail'

import MypageHeaderCard from '../../components/Mypage/MypageHeaderCard'

const Mypage = () => {
  const params = useParams()
  const param = Object.values(params)[0]
  const [userInfo, setUserInfo] = useState({
    name:'김김김',
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
  const [petList, setPetList] = useState([
    {
      name:'해리',
      petId:'A12455',
      profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },    {
      name:'해리',
      petId:'A12455',
      profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },    {
      name:'해리',
      petId:'A12455',
      profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },    {
      name:'해리',
      petId:'A12455',
      profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ])
  const [currentSubsList, setCurrentSubsList] = useState([])
  const [subsList, setSubsList] = useState([])
  const [unwrittenReviewList, setUnwrittenReviewList] = useState([])
  const [reviewList, setReviewList] = useState([])

// userfetching
      


  useEffect(()=>{

  }, [])


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
    'petList':'반려견 정보',
    'petList/petDetail': '반려견 관리',
    'petList/petUpdate':'반려견 정보 수정',
    'petList/petAdd':'반려견 등록'
  }

  return (
    <div>
      <div style={{height:'100px'}}></div>
      <div style={headerContainer}>
        <MypageHeaderCard user={userInfo}/>
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
                <MypageSubscriptionsNow currentSubsList={currentSubsList}/>
              }
            />
            <Route
              path="subscriptionsNow"
              element={
                <MypageSubscriptionsNow currentSubsList={currentSubsList}/>
              }
            />
            <Route
              path="subscriptions"
              element={
                <MypageSubscriptions subsList={subsList}/>
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
                <MypageReviews reviewList={reviewList}/>
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
              path="petList"
              element={
                <MypagePet petList={petList}/>
              }               
            />
            <Route
              path="petList/petDetail"
              element={
                <MypagePetDetail/>
              }               
            />
            <Route
              path="petList/petAdd"
              element={
                <MypagePetUpdate/>
              }               
            />
            <Route
              path="petList/petUpdate"
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
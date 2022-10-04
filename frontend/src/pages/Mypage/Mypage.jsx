import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

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
import Footer from '../../components/Footer';

import Swal from 'sweetalert2'
import { mypageMain } from '../../api/mypageUser'

const Mypage = () => {
  const navigate = useNavigate()
  const user = useSelector((state)=>state.user.user.user)
  console.log(user)
  const [usersToken, setUsersToken] = useState(user?.token || '')
  const [usersSno, setUsersSno] = useState(user?.usersSno || '')
  


  const [userInfo, setUserInfo] = useState({name:'',
  subscriptionCnt:0, 
  unReviewCnt: 0, 
  pets: []
 })
  const [currentFocus, setCurrentFocus] = useState({})
  const [rerender, setRerender] = useState(0)

  useEffect(()=>{
    setUsersToken(user?.token || '')
    setUsersSno(user?.usersSno || '')
  },[user])
  useEffect(()=>{
    if (!usersToken) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "잘못된 접근입니다. \n 로그인을 진행해주세요.",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title:'midFont'
        }
      }).then(()=>{
        navigate("/");
      })
    }
  },[])
// userfetching api: 마이페이지 메인
  useEffect(()=>{
    mypageMain(usersSno).then((res)=>{
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
        <MypageHeaderCard user={userInfo} rerender={rerender} />
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
                <MypageSubscriptions setCurrentFocus={setCurrentFocus} usersSno={usersSno}/>
              }
            />
            <Route
              path="subscriptionsNow"
              element={
                <MypageSubscriptions setCurrentFocus={setCurrentFocus} usersSno={usersSno}/>
              }
            />
            <Route
              path="subscriptions"
              element={
                <MypageSubscriptions setCurrentFocus={setCurrentFocus} usersSno={usersSno}/>
              }            
            />
            <Route
              path="subscriptionDetail"
              element={
                <MypageSubscriptionDetail usersSno={usersSno}/>
              }            
            />
            <Route
              path="unwrittenReviews"
              element={
                <MypageUnwrittenReviews usersSno={usersSno}/>
              }               
            />
            <Route
              path="reviews"
              element={
                <MypageReviews usersSno={usersSno}/>
              }   
            />
            <Route
              path="user"
              element={
                <MypageUser usersSno={usersSno}/>
              }               
            />
            <Route
              path="userUpdate"
              element={
                <MypageUserUpdate rerender={rerender} setRerender={setRerender} usersSno={usersSno}/>
              }               
            />
            <Route
              path="petDetail"
              element={
                <MypagePetDetail rerender={rerender} setCurrentFocus={setCurrentFocus} usersSno={usersSno}/>
              }               
            />
            <Route
              path="petAdd"
              element={
                <MypagePetUpdate rerender={rerender} setRerender={setRerender} pets={userInfo.pets}/>
              }               
            />
            <Route
              path="petUpdate"
              element={
                <MypagePetUpdate rerender={rerender} setRerender={setRerender} pets={userInfo.pets}/>
              }               
            />
          </Routes>  
        </div>       
        </div>
        <div style={{height:'200px'}}></div>
        <Footer></Footer>
      </div>

  )
}

export default Mypage
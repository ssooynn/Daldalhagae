import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import SubscriptionCarousel from './SubscriptionCarousel'
import { FlexBox } from '../../components/Mypage/MypageCommon'
import { userInfoGet } from '../../api/mypageUser'
import { subscriptionCancel } from '../../api/mypageSubscription'
import Swal from 'sweetalert2'


const MypageSubscriptionDetail = (props) => {
  const {usersSno} = props
  const [user, setUser] = useState({})
  const [reCredit, setReCredit] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const subscription = location.state
  // autoPaymentFlag: 1
  // endDate: 1666137600000
  // feed: [null]
  // petName: "초코"
  // price: 30000
  // snack: []
  // startDate: 1663632000000
  // subscriptionEndDate: 1666137600000
  // subscriptionName: "Basic Package"
  // subscriptionNum: 15
  // subscriptionStartDate: 1663632000000
  // toy: []

  useEffect(()=>{
    userInfoGet(usersSno)
    .then((res)=>{
      setUser(res.data)
      console.log(res.data)
    }) .catch((err)=>{
      console.log(err)
    })
    const end = subscription?.endDate
    if (end){
      end[2] = end[2] - 1
    }
    setReCredit(end?.join('.'))
  } ,[])

  const onRecommendChoose = () => {
    navigate("/resetRecommentList", {state: subscription})
  }

  const detailDiv = {
    position:'relative',
    backgroundColor:'#FFFDFB',
    boxSizing: 'border-box',
    // height:'400px',
    width:'100%',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
    padding:'5%',
    borderRadius:'5px'
  }
  
  const hrStyle = {
    width : '100%',
    height : '2px',
    backgroundColor : '#CCAA90',
    border : '0'
  }
  
  const title ={
    fontSize:'16px',
    fontWeight:'500'
  }


  const gridDiv = {
    display:'grid',
    gridTemplateColumns:'repeat(4, minmax(0, 1fr))',
    gap: '7%',
    marginBottom: '16px',
    fontSize: '14px'
  }

  const cancelStyle = {
    color: '#828282',
    cursor:'pointer',
    position:'absolute',
    bottom: '2%',
    right:'5%',
    fontSize:'12px',
    fontWeight:'300'
  }

  let delivery = []
  if (subscription?.feeds.length) {
    delivery.push(`사료 ${subscription?.feeds.length}`)
  }
  if (subscription?.snacks.length) {
    delivery.push(`간식 ${subscription?.snacks.length}`)
  }
  if (subscription?.toys.length) {
    delivery.push(`간식 ${subscription?.toys.length}`)
  }

    // 구독 진행중 여부 판단
  const endDate = new Date(subscription?.subscriptionEndDate)
  console.log(endDate)
  const today = new Date()

  let onGoing
  if (endDate >= today) {
    onGoing = '구독 중'
  } else{
    onGoing = '구독 종료'
  }

  const cancelSubs = ()=>{
    Swal.fire({
      title: "정말 구독을 취소하시겠어요? &#128546 \n 다음달부터 상품을 받아볼 수 없어요",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#A9ACB1',
      cancelButtonColor: '#AC998A',
      confirmButtonText: '구독 그만하기',
      cancelButtonText: '구독 계속하기',
      focusConfirm:false,
      focusCancel:true,
      customClass:{
        title:'midFont'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        subscriptionCancel(subscription.subscriptionNum).then((res)=>{
          console.log(res)
          navigate('/mypage')
          Swal.fire({
            width:'25%',
            position: "center",
            title: "구독이 취소되었습니다. \n언제든 재구독해주세요 :)",
            showConfirmButton: false,
            timer: 1500,
            customClass:{
              icon:'smallIcon',
              title:'midFont'
            }
          })
        })
        
  }})

  }



  return (
    <div>
      <SubscriptionItem page='subsDetail' bgImg={subscription?.subscriptionName.replaceAll(' ','')} subscription={subscription} reviewConnect={false} isDetail={true}></SubscriptionItem>
      <div style={detailDiv}>
        <FlexBox justify='space-between' align='end' padding='0px'>
          <div style={{...title}}>배송 상품 <span style={{fontSize:'14px', fontWeight:'400', marginLeft:'7px'}}>[ {delivery.join('+')} ]</span></div>
          {onGoing==='구독 중'?<div style={{fontSize:'12px', fontWeight:'400', color:'#525252', cursor:'pointer'}} onClick={onRecommendChoose}>다음 배송 상품 고르기</div>:<></>}
        </FlexBox>
        <hr style={hrStyle}/>

          {/* carousel */}
        <SubscriptionCarousel feed={subscription?.feeds||[]} snack={subscription?.snacks||[]} toy={subscription?.toys||[]}></SubscriptionCarousel>
        <div style={{...title, marginTop:'30px'}}>구독 정보</div>
        <hr style={hrStyle}/>
        {/* grid로 */}
        <div style={{padding:'12px 24px', marginBottom:'25px'}}>
          <div style={gridDiv}>
            <div >대상 반려견</div>
            <div>{subscription?.petName}</div>
          </div>
          <div style={gridDiv}>
            <div >결제금</div>
            <div>{subscription?.price} 원</div>
          </div>
          <div style={gridDiv}>
            <div >시작일</div>
            <div>{subscription?.subscriptionStartDate}</div>
          </div>
          <div style={gridDiv}>
            <div >종료일</div>
            <div>{subscription?.subscriptionEndDate}</div>
          </div>
          <div style={gridDiv}>
            <div >재결제일</div>
            <div>{reCredit}</div>
          </div>
        </div>
       

        <div style={title}>배송 정보</div>
        <hr style={hrStyle}/>
        <div style={{padding:'12px 24px', marginBottom:'25px'}}>
          <div style={gridDiv}>
            <div >배송지</div>
            <div style={{gridColumn:'span 3'}}>{user?.address?.replaceAll(';', ' ')}</div>
          </div>
          <div style={gridDiv}>
            <div >수령인</div>
            <div style={{gridColumn:'span 3'}}>{user.name}</div>
          </div>          
          <div style={gridDiv}>
            <div >전화번호</div>
            <div style={{gridColumn:'span 3'}}>{user.phone}</div>
          </div>
        </div>
        {onGoing==='구독 중'?<div style={cancelStyle} onClick={cancelSubs}>구독 취소하기</div>:<></>}
      </div>  
    </div>
  )
}

export default MypageSubscriptionDetail
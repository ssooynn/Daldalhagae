import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SubscriptionItem from '../../components/Mypage/SubscriptionItem'
import SubscriptionCarousel from './SubscriptionCarousel'
import { userInfo } from '../../api/mypageUser'

const MypageSubscriptionDetail = () => {

  const [user, setUser] = useState({})
  const [reCredit, setReCredit] = useState('')
  const location = useLocation()
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
  console.log(subscription)

  useEffect(()=>{
    const userSno = 'udZ0a32z4Ur2LvGlmEXsN'
    userInfo(userSno)
    .then((res)=>{
      setUser(res.data)
      console.log(res.data)
    }) .catch((err)=>{
      console.log(err)
    })
    const end = subscription.endDate
    end[2] = end[2] - 1
    setReCredit(end.join('.'))
  } ,[])

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
    height : '2.5px',
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
  return (
    <div style={{paddingBottom:'50px'}}>
      <SubscriptionItem page='subsDetail' bgImg={subscription.subscriptionName.replaceAll(' ','')} subscription={subscription} reviewConnect={false} isDetail={true}></SubscriptionItem>
      <div style={detailDiv}>
        <div style={{...title, marginBottom:'10px'}}>배송 상품</div>
          {/* carousel */}
        <SubscriptionCarousel feed={subscription.feeds} snack={subscription.snacks} toy={subscription.toys}></SubscriptionCarousel>
        <div style={{...title, marginTop:'30px'}}>구독 정보</div>
        <hr style={hrStyle}/>
        {/* grid로 */}
        <div style={{padding:'12px 24px', marginBottom:'25px'}}>
          <div style={gridDiv}>
            <div >대상 반려견</div>
            <div>{subscription.petName}</div>
          </div>
          <div style={gridDiv}>
            <div >결제금</div>
            <div>{subscription.price} 원</div>
          </div>
          <div style={gridDiv}>
            <div >시작일</div>
            <div>{subscription.subscriptionStartDate}</div>
          </div>
          <div style={gridDiv}>
            <div >종료일</div>
            <div>{subscription.subscriptionEndDate}</div>
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
        <div style={cancelStyle} >구독 취소하기</div>
      </div>  
    </div>
  )
}

export default MypageSubscriptionDetail
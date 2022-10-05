import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ImgDiv, FlexBox} from './MypageCommon'
import ReviewModal from './ReviewModal'

import { ImStarFull } from "react-icons/im";
import Emo1Full from '../../assets/img/ReviewEmo1Full.png'
import Emo2Full from '../../assets/img/ReviewEmo2Full.png'
import Emo3Full from '../../assets/img/ReviewEmo3Full.png'
import Emo4Full from '../../assets/img/ReviewEmo4Full.png'
import Emo5Full from '../../assets/img/ReviewEmo5Full.png'


import PlayPackage from '../../assets/img/PlayPackage.png'
import AllInOnePackage from '../../assets/img/AllInOnePackage.png'
import BasicPackage from '../../assets/img/BasicPackage.png'
import DalDalPackage from '../../assets/img/DalDalPackage.png'
import LightAllInOnePackage from '../../assets/img/LightAllInOnePackage.png'
import ToyPackage from '../../assets/img/ToyPackage.png'

const SubscriptionItem = (props) => {
  const navigate = useNavigate()
  const {width, height, bgImg, page, subscription, reviewConnect, isDetail, popup, setPopup, isToggle} = props
  const [isHover, setIsHover] = useState(false)
  const [toggle, setToggle] = useState(false)  

  const imgStyle = {
    zIndex:'-1',
    opacity: '.45',
    position: 'absolute',
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderRadius: isDetail||toggle ?'10px 10px 0px 0px':'10px'

}

const textStyle = ({isHover}) => ({
    boxSizing:'border-box',
    zIndex:'0',
    position: 'absolute',
    width:'100%',
    height:'100%',
    backgroundColor: isHover||isDetail||toggle ? 'rgba(0,0,0,0.055)':'rgba(255,250,250,0.2)',
    borderRadius: isDetail||toggle ?'10px 10px 0px 0px':'10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    padding: '0px 5%',
    cursor: isHover ? 'pointer':''

})

const titleStyle = {
 fontSize:'18px',
 fontWeight: '500',
 textAlign:'baseline'
}

const subTitleStyle = {
  fontSize:'14px',
  fontWeight: '400',
  marginLeft:'8px'
}

const detailStyle = {
  fontSize: '14px',
  fontWeight:'400'
}


const openReviewStyle={
  fontSize:'13px',
  fontWeight: '500',
  width:'auto', height:'50%', whiteSpace:'nowrap'
}

const bgList = {
  PlayPackage,
  AllInOnePackage,
  BasicPackage,
  DalDalPackage,
  LightAllInOnePackage,
  ToyPackage ,
}


let onClick
if (['subsNow', 'subs'].includes(page)) {
  onClick = () => {
      navigate('/mypage/subscriptionDetail', {state:subscription})}
} else if (page === 'unwritten'){
  onClick = () => {
    setPopup(true)
  }
} else if (page === 'subsDetail'){
  onClick = () => {}
} else{
  onClick = ()=>{
    setToggle(!toggle)
  }
}

const onReviewOpen = (e) => {
  console.log(e)
  e.stopPropagation()
  setPopup(true)
}

// 구독 진행중 여부 판단
const endDate = new Date(subscription?.subscriptionEndDate)
const today = new Date()

let onGoing
if (endDate >= today) {
  onGoing = '구독 중'
} else{
  onGoing = '구독 종료'
}

const detailDiv = {
  position:'relative',
  backgroundColor:'#FFFDFB',
  boxSizing: 'border-box',
  // height:'400px',
  width:'100%',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.2)',
  padding:'4%',
  borderRadius:'5px'
}

const title ={
  fontSize:'15px',
  fontWeight:'400',
  marginBottom:'7px'
}

const gridDiv = {
  display:'grid',
  gridTemplateColumns:'repeat(6, minmax(0, 1fr))',
  gap: '2%',
  marginBottom: '16px',
  fontSize: '14px'
}


return(
  <>
    <ImgDiv width={width} height={height} onClick={onClick} radius={isDetail||toggle ?'10px 10px 0px 0px':'10px'} margin={isDetail ?'25px 0px 0px 0px': (toggle ? '12px 0px 0px 0px':'')}>
        <img style={imgStyle} src={bgList[bgImg]||bgList.BasicPackage} alt="" />
        <div style={textStyle({isHover})}     
            onPointerOver={()=> setIsHover(!isDetail&&true)}
            onPointerOut={() => setIsHover(false)}>

          <div>
            <div style={titleStyle}>{subscription?.subscriptionName} <span style={subTitleStyle}>[ {onGoing} | {subscription?.petName} ]</span></div>
          </div>
          <FlexBox justify='space-between' align='end' padding='0px'>
            <FlexBox direction='column' align='start' padding='0px'>
              <div style={detailStyle}>구독 ID: {subscription?.subscriptionNo||subscription?.subscriptionNum}</div>
              <div style={detailStyle}>구독 기간 {subscription?.subscriptionStartDate.toString().replaceAll('-','.')} ~ {subscription?.subscriptionEndDate.toString().replaceAll('-','.')}</div>
            </FlexBox>
            {reviewConnect? 
              <div onClick={onReviewOpen} 
                  style={openReviewStyle}
                  >리뷰 작성하기</div>
              :
              (isDetail ? 
                <></> :
                (isToggle ?
                  <div style={{whiteSpace:'nowrap', fontSize:'12px', fontWeight:'400'}}>후기 작성일: {subscription?.serviceReviewRegDate?.replaceAll('-', '.')} <span style={{fontWeight:'500', marginLeft:'5px', fontSize:'11.5px'}}>{toggle ? '∧': '∨'}</span></div>
                  :
                  <div style={openReviewStyle}>상세보기</div>
                  )
              )
              }
          </FlexBox>
        </div>
    </ImgDiv>
    {popup &&<ReviewModal setPopup={setPopup} subscription={subscription}></ReviewModal>}
    
    
    {toggle && 
      <div style={detailDiv}>
        <div style={title}>서비스 리뷰</div>
        <div style={{...gridDiv, borderBottom:'0.1px solid #929292', paddingBottom:'16px'}}>
          {subscription.serviceReviewImg && 
          <img src={subscription.serviceReviewImg} alt="리뷰 이미지" style={{aspectRatio:'1/1', width:'100%', borderRadius:'5px'}}/>}
          <FlexBox padding='0px' justify='start' align='start' direction='column' style={{gridColumn: subscription.serviceReviewImg ? 'span 5' :'span 6'}}>
            <div style={{marginBottom:'4px'}}>
              {[...Array(subscription.serviceReviewRate)].map((_,idx)=>{
                return(
                  <ImStarFull
                  key={idx}
                  style={{marginRight:'2px', color:'#FFD875'}}
                  size="20"
                  /> 
                )
              })}
              {[...Array(5-subscription.serviceReviewRate)].map((_,idx)=>{
                return(
                  <ImStarFull
                  key={5-idx}
                  style={{marginRight:'2px', color:'#BEC3C6'}}
                  size="20"
                  /> 
                )
              })}
            </div>
            <div style={{boxSizing:'border-box',padding:'10px 12px', backgroundColor:'#fff', borderRadius:'5px', border:'0.1px solid #929292', color:subscription.serviceReviewContent ? 'black':'#828282', width:'100%', height:'100%'}}>{subscription.serviceReviewContent ? subscription.serviceReviewContent: '다음엔 리뷰 텍스트를 작성해주세요 :)'}</div>
          </FlexBox>
        </div>
        {subscription?.itemReviewResList.length &&
        <>
          <div style={title}>상세 상품 리뷰</div>
          {subscription.itemReviewResList.map((itemReview,idx)=>{
            const expression = ['아주 불만족', '불만족', '보통', '만족', '아주 만족']
            const colorImg = [Emo1Full, Emo2Full, Emo3Full, Emo4Full, Emo5Full]
            
            return(
              <div key={idx}>
                <div style={{fontSize:'13px', fontWeight:'300', marginBottom:'10px'}}>{itemReview.itemName}</div>
                <div style={{...gridDiv,gridTemplateColumns:'repeat(8, minmax(0, 1fr))', border:'0.1px solid #929292', backgroundColor:'white', borderRadius:'5px', gap:'0'}}>
                  <FlexBox padding='10px 0px'>
                    <img src={colorImg[itemReview.rate-1]} style={{width:'24px', margin:'auto'}} alt="" />
                  </FlexBox>
                  <FlexBox padding='15px 20px' direction='column' align='start' justify='start' style={{gridColumn:'span 7', borderLeft:'0.1px solid #929292'}}>
                    <div style={{fontSize:'12.5px', color:'#525252'}}>{expression[itemReview.rate-1]}</div>
                    <div style={{fontSize:'13px' ,marginTop:'3px'}}>{itemReview.content}</div>
                  </FlexBox>
                  
                  </div>
              </div>
            )
          })}
        </>
        }
      </div>}
  </>
)
}



export default SubscriptionItem
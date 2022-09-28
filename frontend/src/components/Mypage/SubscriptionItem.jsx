import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {ImgDiv, FlexBox} from './MypageCommon'
import ReviewModal from './ReviewModal'

import PlayPackage from '../../assets/img/PlayPackage.png'
import AllInOnePackage from '../../assets/img/AllInOnePackage.png'
import BasicPackage from '../../assets/img/BasicPackage.png'
import DalDalPackage from '../../assets/img/DalDalPackage.png'
import LightAllInOnePackage from '../../assets/img/LightAllInOnePackage.png'
import ToyPackage from '../../assets/img/ToyPackage.png'
import { useEffect } from 'react'

const SubscriptionItem = (props) => {
  const navigate = useNavigate()
  const {width, height, bgImg, page, subscription, reviewConnect, isDetail, popup, setPopup} = props
  const [isHover, setIsHover] = useState(false)



  const imgStyle = {
    zIndex:'-1',
    opacity: '.5',
    position: 'absolute',
    width:'100%',
    height:'100%',
    objectFit:'cover',
    borderRadius: '10px'

}

const textStyle = ({isHover}) => ({
    boxSizing:'border-box',
    zIndex:'0',
    position: 'absolute',
    width:'100%',
    height:'100%',
    backgroundColor: isHover? 'rgba(0,0,0,0.01)':'rgba(255,255,255,0.3)',
    borderRadius: '10px',
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
  fontSize:'14px',
  fontWeight: '500',
  '&:hover':{
    transform: 'scale(1.1)',
  },
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
} else {
  onClick = () => {
    setPopup(true)
  }
}

const onReviewOpen = (e) => {
  console.log(e)
  e.stopPropagation()
  setPopup(true)
}

// 구독 진행중 여부 판단
const endDate = new Date(subscription.subscriptionEndDate)
const today = new Date()

let onGoing
if (endDate >= today) {
  onGoing = '구독 중'
} else{
  onGoing = '구독 종료'
}



return(
  <>
    <ImgDiv width={width} height={height} onClick={onClick}>
        <img style={imgStyle} src={bgList[bgImg]||bgList.BasicPackage} alt="" />
        <div style={textStyle({isHover})}     
            onPointerOver={()=> setIsHover(true)}
            onPointerOut={() => setIsHover(false)}>

          <div>
            <div style={titleStyle}>{subscription.subscriptionName} <span style={subTitleStyle}>[ {onGoing} ]</span></div>
          </div>
          <FlexBox justify='space-between' align='end'>
            <FlexBox direction='column' align='start'>
              <div style={detailStyle}>구독 ID: {subscription.subscriptionNo}</div>
              <div style={detailStyle}>구독 기간 {subscription.subscriptionStartDate.replaceAll('-','.')} ~ {subscription.subscriptionEndDate.replaceAll('-','.')}</div>
            </FlexBox>
            {reviewConnect? 
              <div onClick={onReviewOpen} 
                  style={openReviewStyle}
                  >리뷰 작성하기</div>
              :
              (isDetail ? 
                <></> :
                <div style={openReviewStyle}>상세보기</div>
              )
              }
          </FlexBox>
        </div>
    </ImgDiv>
    {popup &&<ReviewModal setPopup={setPopup} subscription={subscription}></ReviewModal>}    
  </>
)
}

export default SubscriptionItem
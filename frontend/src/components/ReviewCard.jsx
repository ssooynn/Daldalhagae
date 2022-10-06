import React from 'react'
import placeholder from '../assets/img/placeholder-image.jpg'
import { FlexBox } from './Mypage/MypageCommon'

const ReviewCard = (props) => {
  const stars = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐']
  const {review} = props
  // userSno, userName, subName, rate, content, image, date: []
  return (
    <div style={{boxShadow: '0px 1px 1.5px rgba(0, 0, 0, 0.2)',width:'100%', height: '360px',backgroundColor:'white',borderRadius:'5px', padding:'15px', boxSizing:'border-box'}}>
      <img src={review.image || placeholder} alt="리뷰 이미지" style={{width:'100%',maxHeight:'180px', aspectRatio:'1.4/1', objectFit:'cover', marginBottom:'5px'}}/>
      <FlexBox direction='column' justify='space-between' align='start' width='100%' height='140px'>
        <div>
          <div style={{fontSize:'16px', fontWeight:'500'}}>{review.userName} <span style={{fontSize:'14px'}}>{review?.date?.join('.')}</span></div>
          <div>{stars[review?.rate-1]}</div>
        </div>
        <div style={{fontSize:'14px', height:'65px', width:'100%' }} className='scrollBar2'>{review?.content}</div>
      </FlexBox>
    </div>
  )
}

export default ReviewCard
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FlexBox } from './Mypage/MypageCommon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import MoreReview from '../components/MoreReview'

import leftArrow from '../assets/img/왼쪽.png'
import rightArrow from '../assets/img/오른쪽.png'
import imgD from '../assets/img/구독상세페이지4.png'

const SubscriptionCarousel = (props) => {
  const [reviewOpen, setReviewOpen] = useState(false)
  const showMoreReview = ()=>{
    setReviewOpen(true)
  }

  const [slides, setSlides] = useState([])
  const [index, setIndex] = useState(0)
  const feeds = [{
    name:'도비 어덜트',
    image: 'https://image.homeplus.kr/td/2e4bb58e-2579-401e-ae75-9a5c14819ed9'
  }]
  const toy = [{
    name:'치석제거 장난감 공',
    image:'http://m.puppymind.co.kr/web/product/big/201612/17_shop1_934311.jpg'
  },
  {
    name:'삑삑이 아령공',
    image:'http://mstatic1.e-himart.co.kr/contents/goods/00/02/28/81/27/0002288127__971CF4B37EA7DA75906C49A0D9__1_640_640.jpg'
  },{
    name:'치석제거 장난감 공',
    image:'http://m.puppymind.co.kr/web/product/big/201612/17_shop1_934311.jpg'
  },
  {
    name:'삑삑이 아령공',
    image:'http://mstatic1.e-himart.co.kr/contents/goods/00/02/28/81/27/0002288127__971CF4B37EA7DA75906C49A0D9__1_640_640.jpg'
  },{
    name:'치석제거 장난감 공',
    image:'http://m.puppymind.co.kr/web/product/big/201612/17_shop1_934311.jpg'
  },
  {
    name:'삑삑이 아령공',
    image:'http://mstatic1.e-himart.co.kr/contents/goods/00/02/28/81/27/0002288127__971CF4B37EA7DA75906C49A0D9__1_640_640.jpg'
  }]
  const snacks = [  {
    name:'공공펫 꼬꼬바',
    image:'https://shop.peopet.co.kr/data/goods/512/2022/04/_temp_16512024923869view.jpg'
  },
  {
    name:'공공펫 꼬꼬바',
    image:'https://shop.peopet.co.kr/data/goods/512/2022/04/_temp_16512024923869view.jpg'
  }]

  useEffect(()=>{
    setSlides([...feeds,...toy,...snacks])
  },[])

  const carouselGrid = {
    width:`${slides.length * (100 / 30)}%`,
    display: 'flex',
    padding: '10px 20px',
    boxSizing: 'border-box'
  }
  const cards = useState([])
  for (let i = 0; i < slides.length; i++) {
    cards.push(
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '200px',
        height: '100%',
        borderRadius: '5px',
        border: 'solid 3px',
        borderColor: 'rgba(204, 170, 144, 0.3)',
        padding: '30px 10px 10px 10px',
        textAlign: 'center',
        marginRight: '1rem',
        ...carouselGrid,
        transform: `translate3d(${-index * (953/slides.length)}%,0,0)`,
        transitionDuration:'1s'
       }}>
      <div>
        <div>
          <img src={slides[i].image} width='180px' alt="" />
          <p>{slides[i].name}</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px'
          }}>
          <p>주 원료</p>
          <p>주 원료</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px'
          }}>
          <p>급여 대상</p>
          <p>급여 대상</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px'
          }}>
          <p>입자 크기</p>
          <p>입자 크기</p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '12px'
          }}>
          <p>기능</p>
          <p>기능</p>
        </div>
        <div> {/* 리뷰 */}
          <p
            onClick={event=>{
              event.preventDefault()
              showMoreReview()
            }}
            style={{cursor: 'pointer'}} className='moreReview'>리뷰 더보기</p>
          {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} />}
        </div>
      </div>
    </div>)
  }

  return (
    <>
    <div
      style={{
        backgroundColor: '#FFFDFB',
        height: '100%',
        borderRadius: '0 0 5px 5px',
        boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
        padding: '10px 30px 20px 30px',
        position: 'relative',
      }}>
      <h3>이번 달 배송 예정 상품</h3>
      { slides.length <= 5 ?
        <div
          style={{
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>{cards}</div>
        </div> :
        <div
          style={{
            paddingTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <img onClick={()=>{setIndex(Math.max(0, index-1))}} src={leftArrow} style={{cursor: 'pointer', width: '30px', height: '30px'}} alt="" />
          <div  // 상품 정보 카드리스트
            style={{
              display: 'flex',
              overflow: 'hidden',
            }}>
            {cards}
          </div>
          <img onClick={()=>{setIndex(Math.min(slides.length-3, index+1))}} src={rightArrow} style={{cursor: 'pointer', width: '30px', height: '30px'}} alt="" />
        </div>
      }
    </div>
  </>
    
  )
}

export default SubscriptionCarousel
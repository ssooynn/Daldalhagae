import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MoreReview from '../components/MoreReview'

import leftArrow from '../assets/img/왼쪽.png'
import rightArrow from '../assets/img/오른쪽.png'

const PaymentCarousel = (props) => {
  const infos = props.infos
  console.log('캐러셀', infos)
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
  const toy = [
    {
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
    }
  ]
    const snacks = [  {
      name:'공공펫 꼬꼬바',
      image:'https://shop.peopet.co.kr/data/goods/512/2022/04/_temp_16512024923869view.jpg'
    },
    {
      name:'공공펫 꼬꼬바',
      image:'https://shop.peopet.co.kr/data/goods/512/2022/04/_temp_16512024923869view.jpg'
    }
  ]

  useEffect(()=>{
    setSlides([...feeds,...toy,...snacks])
  },[])

  const carouselGrid = {
    width:`${slides.length * (4)}%`,
    display: 'flex',
    padding: '10px 20px',
    boxSizing: 'border-box'
  }
  const cardCase = []
  infos.map((info, idx)=>{
    const cards = []
    if (info[7].length <= 4) {
      info[7].map((product, jdx)=>{
        cards.push(<div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '5px',
          border: 'solid 3px',
          borderColor: 'rgba(204, 170, 144, 0.3)',
          padding: '30px 10px 10px 10px',
          textAlign: 'center',
          marginRight: '10px',
          }}>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={product.image} width='180px' alt="" />
              <p>{product.name}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>주 원료</p>
              <p>{product.materials}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>급여 대상</p>
              <p>{product.targets}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>입자 크기</p>
              <p>{product.particle}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>기능</p>
              <p>{product.effects}</p>
            </div>
          </div>
          <div> {/* 리뷰 */}
            <p
              onClick={event => {
                event.preventDefault()
                showMoreReview()
              }} className='moreReview'>리뷰 더보기</p>
            {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={product} />}
          </div>
        </div>)})
    } else {
      // for (let i = 0; i < slides.length; i++) {
      //   cards.push(
      //   <div
      //     style={{
      //       backgroundColor: '#FFFFFF',
      //       height: '100%',
      //       borderRadius: '5px',
      //       border: 'solid 3px',
      //       borderColor: 'rgba(204, 170, 144, 0.3)',
      //       padding: '30px 10px 10px 10px',
      //       textAlign: 'center',
      //       marginRight: '10px',
      //       ...carouselGrid,
      //       transform: `translate3d(${-index * (940/slides.length)}%,0,0)`,
      //       transitionDuration:'1s'
      //     }}>
      //     <div>
      //       <div>
      //         <img src={slides[i].image} width='180px' alt="" />
      //         <p>{slides[i].name}</p>
      //       </div>
      //       <div
      //         style={{
      //           display: 'flex',
      //           justifyContent: 'space-between',
      //           fontSize: '12px'
      //         }}>
      //         <p>주 원료</p>
      //         <p>주 원료</p>
      //       </div>
      //       <div
      //         style={{
      //           display: 'flex',
      //           justifyContent: 'space-between',
      //           fontSize: '12px'
      //         }}>
      //         <p>급여 대상</p>
      //         <p>급여 대상</p>
      //       </div>
      //       <div
      //         style={{
      //           display: 'flex',
      //           justifyContent: 'space-between',
      //           fontSize: '12px'
      //         }}>
      //         <p>입자 크기</p>
      //         <p>입자 크기</p>
      //       </div>
      //       <div
      //         style={{
      //           display: 'flex',
      //           justifyContent: 'space-between',
      //           fontSize: '12px'
      //         }}>
      //         <p>기능</p>
      //         <p>기능</p>
      //       </div>
      //       <div> {/* 리뷰 */}
      //         <p
      //           onClick={event=>{
      //             event.preventDefault()
      //             showMoreReview()
      //           }}
      //           style={{cursor: 'pointer'}} className='moreReview'>리뷰 더보기</p>
      //         {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} />}
      //       </div>
      //     </div>
      //   </div>)
      // }
    }
    cardCase.push(cards)
  })
  console.log('카드케이스', cardCase)
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
        {cardCase.map((cards, idx)=>{
          return cards.map((card, jdx)=>{
            return <div>
              {card}
            </div>
          })
        })}
      </div>
    </div>
  </>
    
  )
}

export default PaymentCarousel
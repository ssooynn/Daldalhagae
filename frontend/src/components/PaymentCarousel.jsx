import React, { useState, useEffect } from 'react'
import MoreReview from '../components/MoreReview'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Toggle.css'
import './CarouselFeed.css'

const PaymentCarousel = (props) => {
  const info = props.info
  const types = props.pickedProducts

  const [reviewOpen, setReviewOpen] = useState(false)
  const [reviewCategory, setReviewCategory] = useState("");
  const [index, setIndex] = useState(0)
  function showMoreReview(e, kind, index) {
    e.preventDefault()
    setReviewOpen(true)
    setReviewCategory(kind)
    setIndex(index)
  }
  
  const pickedProductsCarouselGrid = {
    width:`${(types[0].length + types[1].length + types[2].length) * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${types[0].length + types[1].length + types[2].length}, minmax(0, 1fr))`,
    gap: '1%',
    padding: '10px 2px',
    boxSizing: 'border-box',
    justifyItems: 'center',
  }
  const [cardcase, setCardcase] = useState([])
  useEffect(()=>{
    const copyCardcase = [...cardcase]
    types.map((type, idx) =>{
      type.map((product, jdx)=>{
        if (idx === 0) {
          copyCardcase.push(<div className='card'>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={product.image} width='180px' alt="" />
              <p class='product_name'>{product.name}</p>
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
          <p onClick={(e) => {props.showMoreReview(e, "사료", idx)}} className='moreReview'>리뷰 더보기</p>
        </div>)
        } else if (idx === 1) {
          copyCardcase.push(<div className='card'>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={product.image} width='180px' alt="" />
              <p class='product_name'>{product.name}</p>
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
              <p>기능</p>
              <p>{product.effects}</p>
            </div>
          </div>
          <p onClick={(e) => {props.showMoreReview(e, "간식", idx)}} className='moreReview'>리뷰 더보기</p>
        </div>)
        } else {
          copyCardcase.push(<div className='card'>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={product.image} width='180px' alt="" />
              <p class='product_name'>{product.name}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>소재</p>
              <p>{product.materials}</p>
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
          <p onClick={(e) => {props.showMoreReview(e, "장난감", idx)}} className='moreReview'>리뷰 더보기</p>
        </div>)
        }
      })
    })
    setCardcase(copyCardcase)
  }, [])
  
  return (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFDFB'}}>
    {(types[0].length + types[1].length + types[2].length)>3 ? 
      <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
      onClick={()=>{setIndex(Math.max(0, index-1))}}/> :
      <div></div>
    }
    {(types[0].length + types[1].length + types[2].length)>3 ? 
      <div style={{overflow: 'hidden'}}>
        <div style={{...pickedProductsCarouselGrid, transform: `translate3d(${-index * (100/(types[0].length + types[1].length + types[2].length))}%,0,0)`, transitionDuration:'1s'}}>
          {cardcase}
        </div>
      </div> : 
      <div style={{display: 'flex'}}>
        {cardcase}
      </div>
    }
    {(types[0].length + types[1].length + types[2].length)>3 ? 
      <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
      onClick={()=>{setIndex(Math.min((types[0].length + types[1].length + types[2].length)-3, index+1))}}/> :
      <div></div>
    }
  </div>
  )
}

export default PaymentCarousel
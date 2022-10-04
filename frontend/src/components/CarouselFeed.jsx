import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Toggle.css'
import './CarouselFeed.css'

function Reviews(props) {
  const reviews = props.reviews
  switch (props.kind) {
    case '사료':
      return <div> {/* 리뷰 */}
        <p>{props.reviewNum}명이 이 {props.kind}를 받았어요</p>
        <div>
          <p style={{ margin: 'auto' }}>최근 리뷰</p>
        </div>
        <div>
        {reviews.map((review, idx)=>{
          let star = ''
          switch (review.rate) {
            case 1:
              star = '★☆☆☆☆'
              break;
            case 2:
              star = '★★☆☆☆'
              break;
            case 3:
              star = '★★★☆☆'
              break;
            case 4:
              star = '★★★★☆'
              break;
            default:
              star = '★★★★★'
              break;
          }
          return <div>
            <div style={{ margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ color: 'orange' }}>{star}</p>
              <p>{review.usersName}</p>
            </div>
            <p className='content'>{review.content}</p>
          </div>
        })}
      </div>
    </div>
    case '간식':
      return <div> {/* 리뷰 */}
      <p>{props.reviewNum}명이 이 {props.kind}을 받았어요</p>
      <div>
        <p style={{ margin: 'auto' }}>최근 리뷰</p>
      </div>
      <div>
          {reviews.map((review, idx)=>{
            let star = ''
            switch (review.rate) {
              case 1:
                star = '★☆☆☆☆'
                break;
              case 2:
                star = '★★☆☆☆'
                break;
              case 3:
                star = '★★★☆☆'
                break;
              case 4:
                star = '★★★★☆'
                break;
              default:
                star = '★★★★★'
                break;
            }
            return <div>
              <div style={{ margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ color: 'orange' }}>{star}</p>
                <p>{review.usersName}</p>
              </div>
              <p className='content'>{review.content}</p>
            </div>
          })}
        </div>
    </div>
    default:
      return <div> {/* 리뷰 */}
      <p>{props.reviewNum}명이 이 {props.kind}을 받았어요</p>
      <div>
        <p style={{ margin: 'auto' }}>최근 리뷰</p>
      </div>
      <div>
        {reviews.map((review, idx)=>{
          let star = ''
          switch (review.rate) {
            case 1:
              star = '★☆☆☆☆'
              break;
            case 2:
              star = '★★☆☆☆'
              break;
            case 3:
              star = '★★★☆☆'
              break;
            case 4:
              star = '★★★★☆'
              break;
            default:
              star = '★★★★★'
              break;
          }
          return <div>
            <div style={{ margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
              <p style={{ color: 'orange' }}>{star}</p>
              <p>{review.usersName}</p>
            </div>
            <p className='content'>{review.content}</p>
          </div>
        })}
      </div>
    </div>
  }
  
}

const CarouselFeed = (props) => {  // products, checkProducts, setCheckProducts, products, setPickedProducts, numbers
  const products1 = props.products1
  const checkProducts = props.checkProducts
  const [index, setIndex] = useState(0)

  function clickFeedCard(e, i, numbers, kind) {
    e.preventDefault()
    let copiedFeeds = [...checkProducts]
    const copyProducts = [...props.products]
    const maxNum = numbers
    let num = props.packageNo
    let idx = 0
    switch (kind) {
      case '사료':
        idx = 0
        break
      case '간식':
        idx = 1
        break
      default:
        idx = 2
        break
    }
    if (copiedFeeds[i]) {
      copiedFeeds[i] = false
      props.setCheckProducts(copiedFeeds)
      for (let j = 0; j < copyProducts[num][idx].length; j++) {
        if (copyProducts[num][idx][j].name === products1[i].name) {
          copyProducts[num][idx].splice(j, 1)
        }break}
    } else {
      if (copyProducts[num][idx].length < maxNum) {
        copiedFeeds[i] = true
        props.setCheckProducts(copiedFeeds)
        copyProducts[num][idx].push(products1[i])
      } else {alert(`${maxNum}개까지만 선택해주세요.`)}
    }
    props.setPickedProducts(copyProducts)
  }
  const feedCarouselGrid = {
    width:`${products1.length * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${products1.length}, minmax(0, 1fr))`,
    gap: '1%',
    padding: '10px 2px',
    boxSizing: 'border-box',
  }
  
  const [ppp, setPPP] = useState('')
  useEffect(()=>{
    switch (props.kind) {
      case '사료':
        return setPPP(products1.map((product, i)=>{
          return <div className={checkProducts[i] ? 'clickCard' : 'card'}>
            <div onClick={(e) => { clickFeedCard(e, i, props.numbers, props.kind) }}>
              <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                <div>
                  <img src={products1[i].image} width='180px' alt="" />
                  <p class='product_name'>{products1[i].name}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>주 원료</p>
                  <p>{products1[i].materials}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>급여 대상</p>
                  <p>{products1[i].targets}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>입자 크기</p>
                  <p>{products1[i].particle}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>기능</p>
                  <p>{products1[i].effects}</p>
                </div>
              </div>
              <Reviews reviews={product.itemReviewResList} kind={props.kind} reviewNum={product.reviewNum} />
            </div>
            <p onClick={(e) => {props.showMoreReview(e, props.kind, i)}} className='moreReview'>리뷰 더보기</p>
          </div>}))
      case '간식':
        return setPPP(products1.map((product, i)=>{
          return <div className={checkProducts[i] ? 'clickCard' : 'card'}>
            <div onClick={(e) => { clickFeedCard(e, i, props.numbers, props.kind) }}>
              <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                <div>
                  <img src={products1[i].image} width='180px' alt="" />
                  <p class='product_name'>{products1[i].name}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>주 원료</p>
                  <p>{products1[i].materials}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>급여 대상</p>
                  <p>{products1[i].targets}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>기능</p>
                  <p>{products1[i].effects}</p>
                </div>
              </div>
              <Reviews reviews={product.itemReviewResList} kind={props.kind} reviewNum={product.reviewNum} />
            </div>
            <p onClick={(e) => {props.showMoreReview(e, props.kind, i)}} className='moreReview'>리뷰 더보기</p>
          </div>}))
      default:
        return setPPP(products1.map((product, i)=>{
          return <div className={checkProducts[i] ? 'clickCard' : 'card'}>
            <div onClick={(e) => { clickFeedCard(e, i, props.numbers, props.kind) }}>
              <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                <div>
                  <img src={products1[i].image} width='180px' alt="" />
                  <p class='product_name'>{products1[i].name}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>소재</p>
                  <p>{products1[i].materials}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '12px'
                  }}>
                  <p>기능</p>
                  <p>{products1[i].effects}</p>
                </div>
              </div>
              <Reviews reviews={product.itemReviewResList} kind={props.kind} reviewNum={product.reviewNum} />
            </div>
            <p onClick={(e) => {props.showMoreReview(e, props.kind, i)}} className='moreReview'>리뷰 더보기</p>
          </div>}))
    }
  }, [])

  return (
    <div style={{marginBottom: '3rem'}}>  {/* 사료 */}
      {props.kind === '사료' ?
      <p style={{textAlign: 'start',margin: '0 0 1rem 0'}}>추천된 {props.kind}를 선택해 주세요.(택{props.numbers})</p> :
      <p style={{textAlign: 'start',margin: '0 0 1rem 0'}}>추천된 {props.kind}을 선택해 주세요.(택{props.numbers})</p>}
      <div style={{display: 'flex',justifyContent: 'space-between'}}>
        {products1.length <= 3 ?
          {ppp} :
          <div
          style={{
            display: 'flex',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
            onClick={()=>{setIndex(Math.max(0, index-1))}}/>
            <div style={{overflow:'hidden', width:'100%'}}>
              <div style={{...feedCarouselGrid, transform: `translate3d(${-index * (100/products1.length)}%,0,0)`, transitionDuration:'1s'}}>
                {ppp}
              </div> 
            </div> 
            <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
            onClick={()=>{setIndex(Math.min(products1.length-3, index+1))}}/>
          </div>
        }
      </div>
    </div>
)
}

export default CarouselFeed
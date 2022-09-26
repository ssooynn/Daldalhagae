import React, { useState } from 'react'
import MoreReview from '../components/MoreReview'
import imgA from '../assets/img/추천페이지1.png'
import imgD from '../assets/img/구독상세페이지4.png'

function RecommendProducts(props) {
  const [reviewOpen, setReviewOpen] = useState(false)
  const showMoreReview = ()=>{
    setReviewOpen(true)
  }
  return (
  <div  // 추천 제품 상세 목록
    style={{
      backgroundColor: '#FFFDFB',
      width: '100%',
      height: '100%',
      borderRadius: '0 0 5px 5px',
      boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
      padding: '50px 0 70px 0',
      position: 'relative',
    }}>
    <div style={{margin: '0 50px 0 50px'}}>
      <p
        style={{
          textAlign: 'start',
          margin: '0 0 1rem 0'
        }}>'{props.name}' 을/를 위한 사료 추천(택1)</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div  // 카드
          style={{
            backgroundColor: '#FFFFFF',
            width: '28%',
            height: '100%',
            borderRadius: '5px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
            padding: '30px 10px 10px 10px',
          }}>
          <div style={{textAlign: 'center'}}>
            <div>
              <img src={imgD} width='180px' alt="" />
              <p>사료 이름</p>
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
          </div>
          <div>
            <p>0명이 이 사료를 받았어요</p>
            <div>
              <p>최근 리뷰</p>
            </div>
            <p
              onClick={event=>{
                event.preventDefault()
                showMoreReview()
              }}
              style={{
                fontSize: '10px',
                color: 'gray',
                textAlign: 'end',
                cursor: 'pointer'
              }}>리뷰 더보기</p>
            {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} />}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
const Toggle = (props) => {
  const [togleOpen, setTogleOpen] = useState(false)
  const showTogle = ()=>{
    setTogleOpen(true)
  }
  const closeTogle = ()=>{
    setTogleOpen(false)
  }
  return (<div>
		<div
			style={{
        backgroundImage: `url(${imgA})`,
        backgroundRepeat: 'no-repeat',
				width: '100%',
				height: '160px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '3rem',
        borderRadius: '5px 5px 0 0'
			}}>
			<div
				style={{
					width: '80%',
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
					<h2>{props.info[0]} - {props.info[4]}</h2>
					<p>월 {props.info[3]}원</p>
				</div>
			<p>{props.info[1]}</p>
			{togleOpen ? 
				<p
					onClick={event=>{
						event.preventDefault()
						closeTogle()
					}}
					style={{
						cursor: 'pointer',
						textAlign: 'end',
						fontSize: '12px',
						// fontWeight: 'bold',
					}}>접기 △</p> : 
				<p
					onClick={event=>{
						event.preventDefault()
						showTogle()
					}}
					style={{
						cursor: 'pointer',
						textAlign: 'end',
						fontSize: '12px',
						// fontWeight: 'bold',
					}}>추천 제품 고르기 ▽</p>}
			</div>
		</div>
		{togleOpen && <RecommendProducts name={props.info[4]} setTogleOpen={setTogleOpen} />}
	</div>
  )
}

export default Toggle
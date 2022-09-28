import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoreReview from '../components/MoreReview'
import imgD from '../assets/img/구독상세페이지4.png'
import PackageImage1 from '../assets/img/구독리스트1.png'
import PackageImage2 from '../assets/img/구독리스트2.png'
import PackageImage3 from '../assets/img/구독리스트3.png'
import daldalPackage from '../assets/img/otherPackage1.png'
import toyPackage from '../assets/img/otherPackage2.png'
import lightPackage from '../assets/img/otherPackage3.png'
import 자유구독 from '../assets/img/자유구독1.png'
import './Toggle.css'
import { StyledButton } from '../components/CommonComponent';

const ToggleBox  = styled.div`
background-image: ${(props) => {
  let iamge;
  switch (props.packageName) {
    case 'Basic Package':
      iamge = `url(${PackageImage1})`;
      break;
    case 'Play Package':
      iamge = `url(${PackageImage2})`;
      break;
    case 'All In One Package':
      iamge = `url(${PackageImage3})`;
      break;
    case 'DalDal Package':
      iamge = `url(${daldalPackage})`;
      break;
    case 'Toy Package':
      iamge = `url(${toyPackage})`;
      break;
    case 'Light Package':
      iamge = `url(${lightPackage})`;
      break;
    default:
      iamge = `url(${자유구독})`;
      break;
  }
  return iamge
}};
background-repeat: no-repeat;
background-size: cover;
opacity: 0.8;
width: 100%;
height: 160px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
border-radius: 10px 10px 0 0;
`

function Reviews() {
  const recentreview = []
  for (let i = 0; i < 2; i++) {
    recentreview.push(<div>
      <div style={{margin: 'auto', display: 'flex', justifyContent: 'space-between'}}>
        <p style={{color: 'orange'}}>★★★★★</p>
        <p>이이이</p>
      </div>
      <p style={{margin: 'auto'}}>아이가 좋아해요!</p>
    </div>)
  }
  return <div>
    {recentreview}
  </div>
}

function RecommendProducts(props) {
  const [reviewOpen, setReviewOpen] = useState(false)
  const showMoreReview = ()=>{
    setReviewOpen(true)
  }
  const closeTogle = ()=>{
    props.setTogleOpen(false)
  }
  const [feeds, setFeeds] = useState([])
  useEffect(()=>{
  for (let i = 0; i < 3; i++) {
    feeds.push(false)
  }}, [])
  function clickCard(i) {
    let copiedFeeds = [...feeds]
    if (feeds[i]) {
      copiedFeeds[i] = false
      setFeeds(copiedFeeds)
    } else {
      for (let j = 0; j < 3; j++) {
        copiedFeeds[j] = false
      }
      copiedFeeds[i] = true
      setFeeds(copiedFeeds)
    }
  }
  const cards = useState([])
  for (let i = 0; i < 3; i++) {
    cards.push(
    <div className={feeds[i] ? 'clickCard' : 'card'} onClick={(e)=>{clickCard(i)}}>
      <div style={{textAlign: 'center'}}> {/* 상품설명 */}
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
      <div> {/* 리뷰 */}
        <p>67명이 이 사료를 받았어요</p>
        <div>
          <p style={{margin: 'auto'}}>최근 리뷰</p>
        </div>
        <Reviews />
        <p
          onClick={event=>{
            event.preventDefault()
            showMoreReview()
          }} className='moreReview'>리뷰 더보기</p>
        {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} />}
      </div>
    </div>)
  }
  return (
  <div  // 추천 제품 상세 목록
    style={{
      backgroundColor: '#FFFDFB',
      width: '100%',
      height: '100%',
      borderRadius: '0 0 5px 5px',
      boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
      paddingTop: '50px',
      position: 'relative',
    }}>
    <div style={{margin: '0 50px 0 50px'}}>
      <p
        style={{
          textAlign: 'start',
          margin: '0 0 1rem 0'
        }}>추천된 사료를 선택해 주세요.(택1)</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        {cards}
      </div>
      <div style={{textAlign: 'center', }}>
        <StyledButton onClick={closeTogle} SmallWhite style={{width: '250px', margin: '50px auto'}}>선택 완료</StyledButton>
      </div>
    </div>
  </div>
  )
}

const Toggle = (props) => {
  console.log(props)
  const [togleOpen, setTogleOpen] = useState(true)
  const showTogle = ()=>{
    setTogleOpen(true)
  }
  const closeTogle = ()=>{
    setTogleOpen(false)
  }
  return (<div>
		<ToggleBox packageName={props.info[0]}>
			<div
				style={{
					width: '80%',
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
            fontWeight: '900'
					}}>
					<h2>{props.info[0]} - {props.info[6]}</h2>
					<p>월 {props.info[3]}원</p>
				</div>
			<p style={{fontWeight: '700'}}>{props.info[1]}</p>
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
            fontWeight: '700'
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
            fontWeight: '700'
					}}>추천 제품 고르기 ▽</p>}
			</div>
		</ToggleBox>
		{togleOpen && <RecommendProducts name={props.info[6]} setTogleOpen={setTogleOpen} />}
	</div>
  )
}

export default Toggle
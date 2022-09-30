import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoreReview from '../components/MoreReview'
import { StyledButton } from '../components/CommonComponent';
import './Toggle.css'

import imgD from '../assets/img/구독상세페이지4.png'
import PackageImage1 from '../assets/img/추천페이지1.png'
import PackageImage2 from '../assets/img/toggle_play.png'
import PackageImage3 from '../assets/img/toggle_all.png'
import daldalPackage from '../assets/img/toggle_daldal.png'
import toyPackage from '../assets/img/toggle_toy.png'
import lightPackage from '../assets/img/toggle_light.png'
import 자유구독 from '../assets/img/toggle_custom.png'

const ToggleBox = styled.div`
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
      case 'Light All Package':
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
width: 100%;
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
      <div style={{ margin: 'auto', display: 'flex', justifyContent: 'space-between' }}>
        <p style={{ color: 'orange' }}>★★★★★</p>
        <p>이이이</p>
      </div>
      <p style={{ margin: 'auto' }}>아이가 좋아해요!</p>
    </div>)
  }
  return <div>
    {recentreview}
  </div>
}

function RecommendProducts(props) {
  const [reviewOpen, setReviewOpen] = useState(false)
  const showMoreReview = () => {
    setReviewOpen(true)
  }
  const feeds = [
    {
      sno: '',
      name: '사료1',
      image: '',
      effects: ['건강에 좋음'],
      targets: ['전연령'],
      materials: ['밀가루', '돼지고기'],
      particle: '중',
      grade: '',
      reviewNum: '',
      reviewList: [{
        rate: '',
        content: '',
        usersName: '',
        date: ''
      }]
    },
    {
      sno: '',
      name: '사료2',
      image: '',
      effects: ['건강에 좋음'],
      targets: ['전연령'],
      materials: ['밀가루', '돼지고기'],
      particle: '중',
      grade: '',
      reviewNum: '',
      reviewList: [{
        rate: '',
        content: '',
        usersName: '',
        date: ''
      }]
    },
    {
      sno: '',
      name: '사료3',
      image: '',
      effects: ['건강에 좋음'],
      targets: ['전연령'],
      materials: ['밀가루', '돼지고기'],
      particle: '중',
      grade: '',
      reviewNum: '',
      reviewList: [{
        rate: '',
        content: '',
        usersName: '',
        date: ''
      }]
    }
  ]
  const [checkFeeds, setcheckFeeds] = useState([])
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      checkFeeds.push(false)
    }
  }, [])

  function clickCard(i) {
    let copiedFeeds = [...checkFeeds]
    if (checkFeeds[i]) {
      copiedFeeds[i] = false
      setcheckFeeds(copiedFeeds)
    } else {
      for (let j = 0; j < 3; j++) {
        copiedFeeds[j] = false
      }
      copiedFeeds[i] = true
      setcheckFeeds(copiedFeeds)
    }
  }
  function closeTogle() {
    props.setTogleOpen(false)
  }
  const cards = useState([])
  for (let i = 0; i < 3; i++) {
    cards.push(
      <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickCard(i) }}>
        <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
          <div>
            <img src={imgD} width='180px' alt="" />
            <p>{feeds[i].name}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px'
            }}>
            <p>주 원료</p>
            <p>{feeds[i].materials}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px'
            }}>
            <p>급여 대상</p>
            <p>{feeds[i].targets}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px'
            }}>
            <p>입자 크기</p>
            <p>{feeds[i].particle}</p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '12px'
            }}>
            <p>기능</p>
            <p>{feeds[i].effects}</p>
          </div>
        </div>
        <div> {/* 리뷰 */}
          <p>67명이 이 사료를 받았어요</p>
          <div>
            <p style={{ margin: 'auto' }}>최근 리뷰</p>
          </div>
          <Reviews />
          <p
            onClick={event => {
              event.preventDefault()
              showMoreReview()
            }} className='moreReview'>리뷰 더보기</p>
          {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={feeds[i]} />}
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
      <div style={{ margin: '0 50px 0 50px' }}>
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
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeTogle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
    </div>
  )
}


const Toggle = (props) => {
  const [togleOpen, setTogleOpen] = useState(true)
  const showTogle = () => {
    setTogleOpen(true)
  }
  const closeTogle = () => {
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
          }}>
          <h2>{props.info[0]} - {props.info[6]}</h2>
          <p>월 {props.info[3]}원</p>
        </div>
        <p>{props.info[1]}</p>
        {togleOpen ?
          <p
            onClick={event => {
              event.preventDefault()
              closeTogle()
            }}
            style={{
              cursor: 'pointer',
              textAlign: 'end',
              fontSize: '12px',
            }}>접기 △</p> :
          <p
            onClick={event => {
              event.preventDefault()
              showTogle()
            }}
            style={{
              cursor: 'pointer',
              textAlign: 'end',
              fontSize: '12px',
            }}>추천 제품 고르기 ▽</p>}
      </div>
    </ToggleBox>
    {togleOpen && <RecommendProducts name={props.info[6]} setTogleOpen={setTogleOpen} />}
  </div>
  )
}

export default Toggle
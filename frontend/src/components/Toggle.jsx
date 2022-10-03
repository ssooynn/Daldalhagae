import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoreReview from '../components/MoreReview'
import { StyledButton } from '../components/CommonComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Toggle.css'

import 사료 from '../assets/img/구독상세페이지4.png'
import 간식 from '../assets/img/상품구성_간식.png'
import 장난감 from '../assets/img/상품구성_장난감.png'

import PackageImage1 from '../assets/img/BasicPackage.png'
import PackageImage2 from '../assets/img/PlayPackage.png'
import PackageImage3 from '../assets/img/AllInOnePackage.png'
import daldalPackage from '../assets/img/DalDalPackage.png'
import toyPackage from '../assets/img/ToyPackage.png'
import lightPackage from '../assets/img/LightAllInOnePackage.png'
import 자유구독 from '../assets/img/나만의구독서비스.png'
import Left from '../assets/img/왼쪽.png'
import Right from '../assets/img/오른쪽.png'

const ToggleBox = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.2rem;
::before{
  border-radius: 10px;
  background-size: cover;
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
  content: "";
  position: absolute;
  top: 0%;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0.35;
}
&:hover{
    background-color: ${(props)=> props.hoverColor || '#d2d2d2'};
    border-radius: 10px;
    // color:white;
    font-weight: 900;
  }
object-fit: cover;
cursor: pointer;
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

const Toggle = (props) => {
  const [toggleOpen, setToggleOpen] = useState(false)
  const showToggle = () => {setToggleOpen(true)}
  const closeToggle = () => {setToggleOpen(false)}
  const [flag, setFlag] = useState(true)
  function ToggleOnOff(e, flag) {
    e.preventDefault()
    if (flag) {
      showToggle()
      setFlag(false)
    } else {
      closeToggle()
      setFlag(true)
    }
  }
  
  // 추천 상품
  const [reviewOpen, setReviewOpen] = useState(false)
  const showMoreReview = () => {
    setReviewOpen(true)
  }
  const [checkFeeds, setcheckFeeds] = useState([])
  const [checkSnacks, setcheckSnacks] = useState([])
  const [checkToys, setcheckToys] = useState([])
  const [index, setIndex] = useState(0)
  
  function clickFeedCard(e, i, numbers) {  // 사료 클릭
    e.preventDefault()
    let copiedFeeds = [...checkFeeds]
    const copyProducts = [...props.products]
    const maxNum = numbers[0]
    if (checkFeeds[i]) {
      copiedFeeds[i] = false
      setcheckFeeds(copiedFeeds)
      for (let j = 0; j < copyProducts[props.index][0].length; j++) {
        if (copyProducts[props.index][0][j].name === feeds[i].name) {
          copyProducts[props.index][0].splice(j, 1)
        }break}
    } else {
      if (copyProducts[props.index][0].length < maxNum) {
        copiedFeeds[i] = true
        setcheckFeeds(copiedFeeds)
        copyProducts[props.index][0].push(feeds[i])
      } else {alert(`사료는 ${maxNum}개까지만 선택해주세요.`)}
    }
    props.setPickedProducts(copyProducts)
  }
  function clickSnackCard(e, i, numbers) {  // 간식 클릭
    e.preventDefault()
    let copiedSnacks = [...checkSnacks]
    const copyProducts = [...props.products]
    const maxNum = numbers[1]
    if (checkSnacks[i]) {
      copiedSnacks[i] = false
      setcheckSnacks(copiedSnacks)
      for (let j = 0; j < copyProducts[props.index][1].length; j++) {
        if (copyProducts[props.index][1][j].name === snacks[i].name) {
          copyProducts[props.index][1].splice(j, 1)
        }break}
    } else {
      if (copyProducts[props.index][1].length < maxNum) {
        copiedSnacks[i] = true
        setcheckSnacks(copiedSnacks)
        copyProducts[props.index][1].push(snacks[i])
      } else {alert(`간식은 ${maxNum}개까지만 선택해주세요.`)}
    }
    props.setPickedProducts(copyProducts)
  }
  function clickToyCard(e, i, numbers) {  // 장난감 클릭
    e.preventDefault()
    let copiedToys = [...checkToys]
    const copyProducts = [...props.products]
    const maxNum = numbers[2]
    if (checkToys[i]) {
      copiedToys[i] = false
      setcheckToys(copiedToys)
      for (let j = 0; j < copyProducts[props.index][2].length; j++) {
        if (copyProducts[props.index][2][j].name === toys[i].name) {
          copyProducts[props.index][2].splice(j, 1)
        }break}
    } else {
      if (copyProducts[props.index][2].length < maxNum) {
        copiedToys[i] = true
        setcheckToys(copiedToys)
        copyProducts[props.index][2].push(toys[i])
      } else {alert(`장난감은 ${maxNum}개까지만 선택해주세요.`)}
    }
    props.setPickedProducts(copyProducts)
  }

  const feeds = []
  const snacks = []
  const toys = []
  const product = [{
    sno: '',
    name: '사료',
    image: 사료,
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
  }, {
    sno: '',
    name: '간식',
    image: 간식,
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
  }, {
    sno: '',
    name: '장난감',
    image: 장난감,
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
  }]
  // 1   -> 3
  // 2~3 -> 6
  // 4~5 -> 9
  switch (props.info[0]) {  // 더미 데이터
    case 'Basic Package': // 사료 3
      for (let i = 0; i < 3; i++) {
        feeds.push(product[0])
        checkFeeds.push(false)
      }
      break;
    case 'Play Package': // 간식 6, 장난감 6
      for (let i = 0; i < 6; i++) {
        snacks.push(product[1])
        checkSnacks.push(false)
      }
      for (let i = 0; i < 6; i++) {
        toys.push(product[2])
        checkToys.push(false)
      }
      break;
    case 'All In One Package': // 사료 3, 간식 6, 장난감 6
      for (let i = 0; i < 3; i++) {
        feeds.push(product[0])
        checkFeeds.push(false)
      }
      for (let i = 0; i < 6; i++) {
        snacks.push(product[1])
        checkSnacks.push(false)
      }
      for (let i = 0; i < 6; i++) {
        toys.push(product[2])
        checkToys.push(false)
      }
      break;
    case 'DalDal Package': // 사료 3, 간식 6,
      for (let i = 0; i < 3; i++) {
        feeds.push(product[0])
        checkFeeds.push(false)
      }
      for (let i = 0; i < 6; i++) {
        snacks.push(product[1])
        checkSnacks.push(false)
      }
      break;
    case 'Toy Package': // 사료 3, 장난감 6
      for (let i = 0; i < 3; i++) {
        feeds.push(product[0])
        checkFeeds.push(false)
      }
      for (let i = 0; i < 6; i++) {
        toys.push(product[1])
        checkToys.push(false)
      }
      break;
    case 'Light All Package': // 사료 3, 간식 3, 장난감 3
      for (let i = 0; i < 3; i++) {
        feeds.push(product[0])
        checkFeeds.push(false)
      }
      for (let i = 0; i < 3; i++) {
        snacks.push(product[1])
        checkSnacks.push(false)
      }
      for (let i = 0; i < 3; i++) {
        toys.push(product[2])
        checkToys.push(false)
      }
      break;
    default:  // 자유 구독
      for (let i = 0; i < 3; i++) {
        feeds.push(product)
      }
      for (let i = 0; i < 6; i++) {
        snacks.push(product)
      }
      for (let i = 0; i < 6; i++) {
        toys.push(product)
      }
      break;
  }
  
  const feedCarouselGrid = {
    width:`${feeds.length * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${feeds.length}, minmax(0, 1fr))`,
    gap: '34%',
    padding: '10px 2px',
    boxSizing: 'border-box',
  }
  const snackCarouselGrid = {
    width:`${snacks.length * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${snacks.length}, minmax(0, 1fr))`,
    gap: '1%',
    padding: '10px 2px',
    boxSizing: 'border-box',
  }
  const toyCarouselGrid = {
    width:`${toys.length * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${toys.length}, minmax(0, 1fr))`,
    gap: '1%',
    padding: '10px 2px',
    boxSizing: 'border-box',
  }
  const fff = <div style={{overflow:'hidden', width:'100%'}}>
    <div style={{...feedCarouselGrid, transform: `translate3d(${-index * (200/feeds.length)}%,0,0)`, transitionDuration:'1s'}}>
      {feeds.map((feed, i)=>{
          return <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickFeedCard(e, i, props.info[4]) }}>
            <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
              <div>
                <img src={사료} width='180px' alt="" />
                <p>{feeds[i].name}{i}</p>
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
          </div>
        })}
    </div> 
  </div> 
  const sss = <div style={{ overflow:'hidden', width:'100%'}}>
    <div style={{...snackCarouselGrid, transform: `translate3d(${-index * (100/snacks.length)}%,0,0)`, transitionDuration:'1s'}}>
      {snacks.map((snack, i)=>{
        return <div className={checkSnacks[i] ? 'clickCard' : 'card'} onClick={(e) => { clickSnackCard(e, i, props.info[4]) }}>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={간식} width='180px' alt="" />
              <p>{snacks[i].name}{i}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>주 원료</p>
              <p>{snacks[i].materials}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>급여 대상</p>
              <p>{snacks[i].targets}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>입자 크기</p>
              <p>{snacks[i].particle}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>기능</p>
              <p>{snacks[i].effects}</p>
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
            {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={snacks[i]} />}
          </div>
        </div>
      })}
    </div>
  </div>
  const ttt = <div style={{display: 'flex', overflow:'hidden', width:'100%'}}>
    <div style={{...toyCarouselGrid, transform: `translate3d(${-index * (200/toys.length)}%,0,0)`, transitionDuration:'1s'}}>
      {toys.map((toy, i)=>{
        return <div className={checkToys[i] ? 'clickCard' : 'card'} onClick={(e) => { clickToyCard(e, i, props.info[4]) }}>
          <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
            <div>
              <img src={장난감} width='180px' alt="" />
              <p>{toys[i].name}{i}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>주 원료</p>
              <p>{toys[i].materials}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>급여 대상</p>
              <p>{toys[i].targets}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>입자 크기</p>
              <p>{toys[i].particle}</p>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px'
              }}>
              <p>기능</p>
              <p>{toys[i].effects}</p>
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
            {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={toys[i]} />}
          </div>
        </div>
      })}
    </div>
  </div>
  function PackageRecommentProducts(props) {
    switch (props.packageName) {
      case 'Basic Package': // 사료 3
        return <div style={{ margin: '0 50px 0 50px' }}>
          <div style={{marginBottom: '3rem'}}>  {/* 사료 */}
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
              {feeds.length <= 3 ?
                feeds.map((feed, i)=>{
                  return <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickFeedCard(e, i, props.numbers) }}>
                    <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                      <div>
                        <img src={사료} width='180px' alt="" />
                        <p>{feeds[i].name}{i}</p>
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
                  </div>
                }) :
                <div
                style={{
                  display: 'flex',
                  justifyContent: 'center', alignItems: 'center'
                }}>
                  <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                  {fff}
                  <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(feeds.length-3, index+1))}}/>
                </div>
              }
            </div>
          </div>
          <div style={{ textAlign: 'end' }}>
            <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
          </div>
        </div>
      case 'Play Package': // 간식 6, 장난감 6
        return <div style={{ margin: '0 50px 0 50px' }}>
          <div style={{marginBottom: '3rem'}}>  {/* 간식 */}
            <p
              style={{
                textAlign: 'start',
                margin: '0 0 1rem 0'
              }}>추천된 간식을 선택해 주세요.(택3)</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              {snacks.length <= 3 ?
                snacks.map((snack, i)=>{
                  return <div className={checkSnacks[i] ? 'clickCard' : 'card'} onClick={(e) => { clickSnackCard(e, i, props.numbers) }}>
                    <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                      <div>
                        <img src={간식} width='180px' alt="" />
                        <p>{snacks[i].name}{i}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>주 원료</p>
                        <p>{snacks[i].materials}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>급여 대상</p>
                        <p>{snacks[i].targets}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>입자 크기</p>
                        <p>{snacks[i].particle}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>기능</p>
                        <p>{snacks[i].effects}</p>
                      </div>
                    </div>
                    <div> {/* 리뷰 */}
                      <p>67명이 이 간식을 받았어요</p>
                      <div>
                        <p style={{ margin: 'auto' }}>최근 리뷰</p>
                      </div>
                      <Reviews />
                      <p
                        onClick={event => {
                          event.preventDefault()
                          showMoreReview()
                        }} className='moreReview'>리뷰 더보기</p>
                      {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={snacks[i]} />}
                    </div>
                  </div>
                  }) :
                  <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
                    onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                    {sss}
                    <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
                    onClick={()=>{setIndex(Math.min(snacks.length-3, index+1))}}/>
                  </div>
              }
            </div>
          </div>
          <div>  {/* 장난감 */}
            <p
              style={{
                textAlign: 'start',
                margin: '0 0 1rem 0'
              }}>추천된 장난감을 선택해 주세요.(택2)</p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              {toys.length <= 3 ?
                toys.map((toy, i)=>{
                  return <div className={checkToys[i] ? 'clickCard' : 'card'} onClick={(e) => { clickToyCard(e, i, props.numbers) }}>
                    <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                      <div>
                        <img src={장난감} width='180px' alt="" />
                        <p>{toys[i].name}{i}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>주 원료</p>
                        <p>{toys[i].materials}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>급여 대상</p>
                        <p>{toys[i].targets}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>입자 크기</p>
                        <p>{toys[i].particle}</p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px'
                        }}>
                        <p>기능</p>
                        <p>{toys[i].effects}</p>
                      </div>
                    </div>
                    <div> {/* 리뷰 */}
                      <p>67명이 이 장난감을 받았어요</p>
                      <div>
                        <p style={{ margin: 'auto' }}>최근 리뷰</p>
                      </div>
                      <Reviews />
                      <p
                        onClick={event => {
                          event.preventDefault()
                          showMoreReview()
                        }} className='moreReview'>리뷰 더보기</p>
                      {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={toys[i]} />}
                    </div>
                  </div>
                  }) :
                  <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center', alignItems: 'center'
                  }}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                    {ttt}
                    <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(snacks.length-3, index+1))}}/>
                  </div>
              }
            </div>
          </div>
          <div style={{ textAlign: 'end' }}>
            <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
          </div>
        </div>
      case 'All In One Package': // 사료 3, 간식 6, 장난감 6
      return <div style={{ margin: '0 50px 0 50px' }}>
        <div style={{marginBottom: '3rem'}}>  {/* 사료 */}
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
            {feeds.length <= 3 ?
              feeds.map((feed, i)=>{
                return <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickFeedCard(e, i, props.numbers) }}>
                  <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                    <div>
                      <img src={사료} width='180px' alt="" />
                      <p>{feeds[i].name}{i}</p>
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
                </div>
              }) :
              <div
              style={{
                display: 'flex',
                justifyContent: 'center', alignItems: 'center'
              }}>
                <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                {fff}
                <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(feeds.length-3, index+1))}}/>
              </div>
            }
          </div>
        </div>
        <div style={{marginBottom: '3rem'}}>  {/* 간식 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 간식을 선택해 주세요.(택3)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {snacks.length <= 3 ?
              snacks.map((snack, i)=>{
                return <div className={checkSnacks[i] ? 'clickCard' : 'card'} onClick={(e) => { clickSnackCard(e, i, props.numbers) }}>
                  <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                    <div>
                      <img src={간식} width='180px' alt="" />
                      <p>{snacks[i].name}{i}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>주 원료</p>
                      <p>{snacks[i].materials}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>급여 대상</p>
                      <p>{snacks[i].targets}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>입자 크기</p>
                      <p>{snacks[i].particle}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>기능</p>
                      <p>{snacks[i].effects}</p>
                    </div>
                  </div>
                  <div> {/* 리뷰 */}
                    <p>67명이 이 간식을 받았어요</p>
                    <div>
                      <p style={{ margin: 'auto' }}>최근 리뷰</p>
                    </div>
                    <Reviews />
                    <p
                      onClick={event => {
                        event.preventDefault()
                        showMoreReview()
                      }} className='moreReview'>리뷰 더보기</p>
                    {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={snacks[i]} />}
                  </div>
                </div>
                }) :
                <div
                style={{
                  display: 'flex',
                  justifyContent: 'center', alignItems: 'center'
                }}>
                  <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                  {sss}
                  <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(snacks.length-3, index+1))}}/>
                </div>
            }
          </div>
        </div>
        <div>  {/* 장난감 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 장난감을 선택해 주세요.(택2)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {toys.length <= 3 ?
              toys.map((toy, i)=>{
                return <div className={checkToys[i] ? 'clickCard' : 'card'} onClick={(e) => { clickToyCard(e, i, props.numbers) }}>
                  <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                    <div>
                      <img src={장난감} width='180px' alt="" />
                      <p>{toys[i].name}{i}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>주 원료</p>
                      <p>{toys[i].materials}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>급여 대상</p>
                      <p>{toys[i].targets}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>입자 크기</p>
                      <p>{toys[i].particle}</p>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                      }}>
                      <p>기능</p>
                      <p>{toys[i].effects}</p>
                    </div>
                  </div>
                  <div> {/* 리뷰 */}
                    <p>67명이 이 장난감을 받았어요</p>
                    <div>
                      <p style={{ margin: 'auto' }}>최근 리뷰</p>
                    </div>
                    <Reviews />
                    <p
                      onClick={event => {
                        event.preventDefault()
                        showMoreReview()
                      }} className='moreReview'>리뷰 더보기</p>
                    {reviewOpen && <MoreReview setReviewOpen={setReviewOpen} info={toys[i]} />}
                  </div>
                </div>
                }) :
                <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                  {ttt}
                  <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(toys.length-3, index+1))}}/>
                </div>
            }
          </div>
        </div>
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      case 'DalDal Package': // 사료 3, 간식 6
      return <div style={{ margin: '0 50px 0 50px' }}>
        <div style={{marginBottom: '3rem'}}>  {/* 사료 */}
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
            {feeds.length <= 3 ?
              feeds.map((feed, i)=>{
                return <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickFeedCard(e, i, props.numbers) }}>
                  <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                    <div>
                      <img src={사료} width='180px' alt="" />
                      <p>{feeds[i].name}{i}</p>
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
                </div>
              }) :
              <div
              style={{
                display: 'flex',
                justifyContent: 'center', alignItems: 'center'
              }}>
                <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                {fff}
                <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(feeds.length-3, index+1))}}/>
              </div>
            }
          </div>
        </div>
        <div>  {/* 간식 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 간식을 선택해 주세요.(택3)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {sss}
          </div>
        </div>
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      case 'Toy Package': // 사료 3, 장난감 6
      return <div style={{ margin: '0 50px 0 50px' }}>
        <div style={{marginBottom: '3rem'}}>  {/* 사료 */}
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
            {feeds.length <= 3 ?
              feeds.map((feed, i)=>{
                return <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickFeedCard(e, i, props.numbers) }}>
                  <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                    <div>
                      <img src={사료} width='180px' alt="" />
                      <p>{feeds[i].name}{i}</p>
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
                </div>
              }) :
              <div
              style={{
                display: 'flex',
                justifyContent: 'center', alignItems: 'center'
              }}>
                <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                {fff}
                <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(feeds.length-3, index+1))}}/>
              </div>
            }
          </div>
        </div>
        <div>  {/* 장난감 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 장난감을 선택해 주세요.(택2)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              {ttt}
          </div>
        </div>
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      case 'Light All Package': // 사료 3, 간식 3, 장난감 3
      return <div style={{ margin: '0 50px 0 50px' }}>
        <div style={{marginBottom: '3rem'}}>  {/* 사료 */}
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
            {feeds.length <= 3 ?
              feeds.map((feed, i)=>{
                return <div className={checkFeeds[i] ? 'clickCard' : 'card'} onClick={(e) => { clickFeedCard(e, i, props.numbers) }}>
                  <div style={{ textAlign: 'center' }}> {/* 상품설명 */}
                    <div>
                      <img src={사료} width='180px' alt="" />
                      <p>{feeds[i].name}{i}</p>
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
                </div>
              }) :
              <div
              style={{
                display: 'flex',
                justifyContent: 'center', alignItems: 'center'
              }}>
                <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.max(0, index-1))}}/>
                {fff}
                <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}} onClick={()=>{setIndex(Math.min(feeds.length-3, index+1))}}/>
              </div>
            }
          </div>
        </div>
        <div style={{marginBottom: '3rem'}}>  {/* 간식 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 간식을 선택해 주세요.(택1)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {sss}
          </div>
        </div>
        <div>  {/* 장난감 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 장난감을 선택해 주세요.(택1)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {ttt}
          </div>
        </div>
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      default: // 자유 구독
      return <div style={{ margin: '0 50px 0 50px' }}>
        <div>  {/* 사료 */}
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
            {fff}
          </div>
        </div>
        <div>  {/* 간식 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 간식을 선택해 주세요.(택3)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {sss}
          </div>
        </div>
        <div>  {/* 장난감 */}
          <p
            style={{
              textAlign: 'start',
              margin: '0 0 1rem 0'
            }}>추천된 장난감을 선택해 주세요.(택2)</p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
            {ttt}
          </div>
        </div>
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
    }
  }

  return (<div>
    <ToggleBox
      onClick={(e) => {ToggleOnOff(e, flag)}}
      packageName={props.info[0]}>
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
      </div>
    </ToggleBox>
    {toggleOpen ? 
    <div  // 추천 제품 상세 목록
      style={{
        backgroundColor: '#FFFDFB',
        width: '100%',
        height: '100%',
        borderRadius: '0 0 5px 5px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        paddingTop: '50px',
        position: 'relative',
      }}>
      <PackageRecommentProducts packageName={props.info[0]} numbers={props.info[4]} />
    </div> :
    <div></div>}
  </div>
  )
}

export default Toggle
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoreReview from '../components/MoreReview'
import { StyledButton } from '../components/CommonComponent';
import CarouselFeed from './CarouselFeed'
import './Toggle.css'

import PackageImage1 from '../assets/img/BasicPackage.png'
import PackageImage2 from '../assets/img/PlayPackage.png'
import PackageImage3 from '../assets/img/AllInOnePackage.png'
import daldalPackage from '../assets/img/DalDalPackage.png'
import toyPackage from '../assets/img/ToyPackage.png'
import lightPackage from '../assets/img/LightAllInOnePackage.png'
import 자유구독 from '../assets/img/나만의구독서비스.png'
import axios from 'axios';

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

const Toggle = (props) => {
  console.log('toggle', props)
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
  const [reviewCategory, setReviewCategory] = useState("");
  const [index, setIndex] = useState(0)
  function showMoreReview(e, kind, index) {
    e.preventDefault()
    setReviewOpen(true)
    setReviewCategory(kind)
    setIndex(index)
  }
  const [checkFeeds, setcheckFeeds] = useState([])
  const [checkSnacks, setcheckSnacks] = useState([])
  const [checkToys, setcheckToys] = useState([])

  const [feeds, setFeeds] = useState([])
  const [snacks, setSnacks] = useState([])
  const [toys, setToys] = useState([])
  const petSno = props.info[7]
  let subscriptionNo = 0
  let historyNo = 0
  let recoFlag = false
  if (props.flag) {
    recoFlag = true
    historyNo = props.subscriptionHistoryNo
  }
  useEffect(()=>{
    switch (props.info[0]) {  // 더미 데이터
      case 'Basic Package': // 사료 3
      subscriptionNo = 1
        for (let i = 0; i < 3; i++) {
          // feeds.push(product[0])
          checkFeeds.push(false)
        }
        break;
      case 'Play Package': // 간식 6, 장난감 6
      subscriptionNo = 2
        for (let i = 0; i < 6; i++) {
          // snacks.push(product[1])
          checkSnacks.push(false)
        }
        for (let i = 0; i < 6; i++) {
          // toys.push(product[2])
          checkToys.push(false)
        }
        break;
      case 'All In One Package': // 사료 3, 간식 6, 장난감 6
      subscriptionNo = 3
        for (let i = 0; i < 3; i++) {
          // feeds.push(product[0])
          checkFeeds.push(false)
        }
        for (let i = 0; i < 6; i++) {
          // snacks.push(product[1])
          checkSnacks.push(false)
        }
        for (let i = 0; i < 6; i++) {
          // toys.push(product[2])
          checkToys.push(false)
        }
        break;
      case 'DalDal Package': // 사료 3, 간식 6,
      subscriptionNo = 4
        for (let i = 0; i < 3; i++) {
          // feeds.push(product[0])
          checkFeeds.push(false)
        }
        for (let i = 0; i < 6; i++) {
          // snacks.push(product[1])
          checkSnacks.push(false)
        }
        break;
      case 'Toy Package': // 사료 3, 장난감 6
      subscriptionNo = 5
        for (let i = 0; i < 3; i++) {
          // feeds.push(product[0])
          checkFeeds.push(false)
        }
        for (let i = 0; i < 6; i++) {
          // toys.push(product[1])
          checkToys.push(false)
        }
        break;
      case 'Light All Package': // 사료 3, 간식 3, 장난감 3
      subscriptionNo = 6
        for (let i = 0; i < 3; i++) {
          // feeds.push(product[0])
          checkFeeds.push(false)
        }
        for (let i = 0; i < 3; i++) {
          // snacks.push(product[1])
          checkSnacks.push(false)
        }
        for (let i = 0; i < 3; i++) {
          // toys.push(product[2])
          checkToys.push(false)
        }
        break;
      default:  // 자유 구독
      subscriptionNo = 7
        for (let i = 0; i < 3; i++) {
          // feeds.push(product)
          checkFeeds.push(false)
        }
        for (let i = 0; i < 6; i++) {
          // snacks.push(product)
          checkSnacks.push(false)
        }
        for (let i = 0; i < 6; i++) {
          // toys.push(product)
          checkToys.push(false)
        }
        break;
    }
  }, [])
  useEffect(()=>{
    axios({
      method: 'post',
      url: `https://j7a302.p.ssafy.io/api-gateway/business-api/recommend/item`,
      headers: {
        'Authorization': `Bearer a.a.a`
      },
      data: {
        recoFlag: recoFlag,
        petSno: petSno,
        subscriptionNo: subscriptionNo,
        historyNo: historyNo
      }
    })
    .then((res)=>{
      setFeeds(res.data.feeds)
      setSnacks(res.data.snacks)
      setToys(res.data.toys)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])
  // 1   -> 3
  // 2~3 -> 6
  // 4~5 -> 9
  function PackageRecommentProducts(props) {
    switch (props.packageName) {
      case 'Basic Package': // 사료 3
        return <div style={{ margin: '0 50px 0 50px' }}>
          <CarouselFeed  // 사료
            products1={feeds}
            checkProducts={checkFeeds}
            setCheckProducts={setcheckFeeds}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[0]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'사료'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="사료" && <MoreReview setReviewOpen={setReviewOpen} info={feeds[index]} kind={'사료'} />}
          <div style={{ textAlign: 'end' }}>
            <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
          </div>
        </div>
      case 'Play Package': // 간식 6, 장난감 6
        return <div style={{ margin: '0 50px 0 50px' }}>
        <CarouselFeed  // 간식
          products1={snacks}
          checkProducts={checkSnacks}
          setCheckProducts={setcheckSnacks}
          products={props.products}
          setPickedProducts={props.setPickedProducts}
          numbers={props.numbers[1]}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
          showMoreReview={showMoreReview}
          kind={'간식'}
          packageNo={props.packageNo}
          />
        {reviewOpen && reviewCategory==="간식" && <MoreReview setReviewOpen={setReviewOpen} info={snacks[index]} kind={'간식'} />}
        
        <CarouselFeed  // 장난감
            products1={toys}
            checkProducts={checkToys}
            setCheckProducts={setcheckToys}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[2]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'장난감'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="장난감" && <MoreReview setReviewOpen={setReviewOpen} info={toys[index]} kind={'장난감'} />}
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      case 'All In One Package': // 사료 3, 간식 6, 장난감 6
      return <div style={{ margin: '0 50px 0 50px' }}>
      <CarouselFeed  // 사료
        products1={feeds}
        checkProducts={checkFeeds}
        setCheckProducts={setcheckFeeds}
        products={props.products}
        setPickedProducts={props.setPickedProducts}
        numbers={props.numbers[0]}
        reviewOpen={reviewOpen}
        setReviewOpen={setReviewOpen}
        showMoreReview={showMoreReview}
        kind={'사료'}
        packageNo={props.packageNo}
        />
        <CarouselFeed  // 간식
          products1={snacks}
          checkProducts={checkSnacks}
          setCheckProducts={setcheckSnacks}
          products={props.products}
          setPickedProducts={props.setPickedProducts}
          numbers={props.numbers[1]}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
          showMoreReview={showMoreReview}
          kind={'간식'}
          packageNo={props.packageNo}
          />
        {reviewOpen && reviewCategory==="간식" && <MoreReview setReviewOpen={setReviewOpen} info={snacks[index]} kind={'간식'} />}
        
        <CarouselFeed  // 장난감
            products1={toys}
            checkProducts={checkToys}
            setCheckProducts={setcheckToys}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[2]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'장난감'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="장난감" && <MoreReview setReviewOpen={setReviewOpen} info={toys[index]} kind={'장난감'} />}
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      case 'DalDal Package': // 사료 3, 간식 6
      return <div style={{ margin: '0 50px 0 50px' }}>
        <CarouselFeed  // 사료
          products1={feeds}
          checkProducts={checkFeeds}
          setCheckProducts={setcheckFeeds}
          products={props.products}
          setPickedProducts={props.setPickedProducts}
          numbers={props.numbers[0]}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
          showMoreReview={showMoreReview}
          kind={'사료'}
          packageNo={props.packageNo}
          />
        {reviewOpen && reviewCategory==="사료" && <MoreReview setReviewOpen={setReviewOpen} info={feeds[index]} kind={'사료'} />}

        <CarouselFeed  // 간식
          products1={snacks}
          checkProducts={checkSnacks}
          setCheckProducts={setcheckSnacks}
          products={props.products}
          setPickedProducts={props.setPickedProducts}
          numbers={props.numbers[1]}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
          showMoreReview={showMoreReview}
          kind={'간식'}
          packageNo={props.packageNo}
          />
        {reviewOpen && reviewCategory==="간식" && <MoreReview setReviewOpen={setReviewOpen} info={snacks[index]} kind={'간식'} />}

        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      case 'Toy Package': // 사료 3, 장난감 6
      return <div style={{ margin: '0 50px 0 50px' }}>
        <CarouselFeed  // 사료
          products1={feeds}
          checkProducts={checkFeeds}
          setCheckProducts={setcheckFeeds}
          products={props.products}
          setPickedProducts={props.setPickedProducts}
          numbers={props.numbers[0]}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
          showMoreReview={showMoreReview}
          kind={'사료'}
          packageNo={props.packageNo}
          />
        {reviewOpen && reviewCategory==="사료" && <MoreReview setReviewOpen={setReviewOpen} info={feeds[index]} kind={'사료'} />}
        
        <CarouselFeed  // 장난감
            products1={toys}
            checkProducts={checkToys}
            setCheckProducts={setcheckToys}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[2]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'장난감'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="장난감" && <MoreReview setReviewOpen={setReviewOpen} info={toys[index]} kind={'장난감'} />}
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      case 'Light All Package': // 사료 3, 간식 3, 장난감 3
      return <div style={{ margin: '0 50px 0 50px' }}>
        <CarouselFeed  // 사료
          products1={feeds}
          checkProducts={checkFeeds}
          setCheckProducts={setcheckFeeds}
          products={props.products}
          setPickedProducts={props.setPickedProducts}
          numbers={props.numbers[0]}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
          showMoreReview={showMoreReview}
          kind={'사료'}
          packageNo={props.packageNo}
          />
        {reviewOpen && reviewCategory==="사료" && <MoreReview setReviewOpen={setReviewOpen} info={feeds[index]} kind={'사료'} />}
        
        <CarouselFeed  // 간식
          products1={snacks}
          checkProducts={checkSnacks}
          setCheckProducts={setcheckSnacks}
          products={props.products}
          setPickedProducts={props.setPickedProducts}
          numbers={props.numbers[1]}
          reviewOpen={reviewOpen}
          setReviewOpen={setReviewOpen}
          showMoreReview={showMoreReview}
          kind={'간식'}
          packageNo={props.packageNo}
          />
        {reviewOpen && reviewCategory==="간식" && <MoreReview setReviewOpen={setReviewOpen} info={snacks[index]} kind={'간식'} />}
        
        <CarouselFeed  // 장난감
            products1={toys}
            checkProducts={checkToys}
            setCheckProducts={setcheckToys}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[2]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'장난감'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="장난감" && <MoreReview setReviewOpen={setReviewOpen} info={toys[index]} kind={'장난감'} />}
        <div style={{ textAlign: 'end' }}>
          <StyledButton onClick={closeToggle} SmallWhite style={{ width: '50px', height: '30px', margin: '20px auto', fontSize: '14px' }}>닫기</StyledButton>
        </div>
      </div>
      default: // 자유 구독
      return <div style={{ margin: '0 50px 0 50px' }}>
        {feeds.length > 0 ?
        <div>
          <CarouselFeed  // 사료
            products1={feeds}
            checkProducts={checkFeeds}
            setCheckProducts={setcheckFeeds}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[0]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'사료'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="사료" && <MoreReview setReviewOpen={setReviewOpen} info={feeds[index]} kind={'사료'} />}
        </div> :
        <div></div>}
      
      {snacks.length > 0 ?
        <div>
          <CarouselFeed  // 간식
            products1={snacks}
            checkProducts={checkSnacks}
            setCheckProducts={setcheckSnacks}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[1]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'간식'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="간식" && <MoreReview setReviewOpen={setReviewOpen} info={snacks[index]} kind={'간식'} />}
        </div> :
        <div></div>}
      
      {toys.length > 0 ?
        <div>
          <CarouselFeed  // 장난감
            products1={toys}
            checkProducts={checkToys}
            setCheckProducts={setcheckToys}
            products={props.products}
            setPickedProducts={props.setPickedProducts}
            numbers={props.numbers[2]}
            reviewOpen={reviewOpen}
            setReviewOpen={setReviewOpen}
            showMoreReview={showMoreReview}
            kind={'장난감'}
            packageNo={props.packageNo}
            />
          {reviewOpen && reviewCategory==="장난감" && <MoreReview setReviewOpen={setReviewOpen} info={toys[index]} kind={'장난감'} />}
        </div> :
        <div></div>}
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
      <PackageRecommentProducts
        packageName={props.info[0]}
        numbers={props.info[4]}
        products={props.products}
        setPickedProducts={props.setPickedProducts}
        packageNo={props.packageNo} />
    </div> :
    <div></div>}
  </div>
  )
}

export default Toggle
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import imgA from '../assets/img/나만의구독서비스.png'
import imgB from '../assets/img/자유구독2.png'
import imgD from '../assets/img/구독상세페이지5.png'
import imgE from '../assets/img/구독상세페이지6.png'
import imgF from '../assets/img/구독상세페이지7.jpg'

import PurchaseList from '../components/PurchaseList'
import AutoSlides from '../components/AutoSlides'
import Footer from '../components/Footer';

const SetCustom = () => {
  const [feedNum, setFeedNum] = useState(0)
  const [snackNum, setSnackNum] = useState(0)
  const [toyNum, setToyNum] = useState(0)
  function plusFeed(e) {
    e.preventDefault()
    setFeedNum(feedNum + 1)
  } function minusFeed(e) {
    e.preventDefault()
    if (feedNum > 0) {
      setFeedNum(feedNum - 1)
    }
  }
  function plusSnack(e) {
    e.preventDefault()
    setSnackNum(snackNum + 1)
  } function minusSnack(e) {
    e.preventDefault()
    if (snackNum > 0) {
      setSnackNum(snackNum - 1)
    }
  }
  function plusToy(e) {
    e.preventDefault()
    setToyNum(toyNum + 1)
  } function minusToy(e) {
    e.preventDefault()
    if (toyNum > 0) {
      setToyNum(toyNum - 1)
    }
  }
  const [pets, setPets] = useState([])
  const [feeds, setFeeds] = useState([])
  const [snacks, setSnacks] = useState([])
  const [toys, setToys] = useState([])
  const usersSno = useSelector((state)=>state.user.user.user.usersSno)
  // Authorization: `Bearer` + `a.a.a`

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://j7a302.p.ssafy.io/api-gateway/business-api/subscription/detail/${usersSno}`,
      headers: {
        'Authorization': `Bearer a.a.a`
      }
    })
      .then((res) => {
        setPets(res.data.pets)
        setFeeds(res.data.feeds)
        setSnacks(res.data.snacks)
        setToys(res.data.toys)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div
      style={{
        backgroundColor: '#FFFDFB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
      <div  // 상품 개수 설정
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '10rem',
          textAlign: 'end',
          width: '80%'
        }}>
        <img
          src={imgA}
          style={{
            width: '50%',
            height: '50%',
            borderRadius: '10px'
          }} alt='package' />
        <div>
          <h2>나만의 구독 서비스</h2>
          <h5>어떤 구성으로 만들고 싶으신가요?</h5>
          <div>
            <div  // 사료
              style={{
                display: 'flex',
                // alignItems: 'flex-end',
                alignItems: 'center',
                margin: 'auto',
                justifyContent: 'flex-end'
              }}>
              <p>사료(+12,900)</p>
              <p style={{ fontSize: '10px', color: '#949494', marginRight: '1rem' }}>(10~15kg)</p>
              <div  // - 버튼
                onClick={(e) => minusFeed(e)}
                style={{
                  backgroundColor: '#F6F1EC',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.15)',
                  cursor: 'pointer'
                }}>
                -
              </div>
              <p style={{ margin: '0 1rem 0 1rem' }}>{feedNum}</p>
              <div  // + 버튼
                onClick={(e) => plusFeed(e)}
                style={{
                  backgroundColor: '#EDDCCF',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.15)',
                  cursor: 'pointer'
                }}>
                +
              </div>
            </div>
            <div  // 간식
              style={{
                display: 'flex',
                // alignItems: 'flex-end',
                alignItems: 'center',
                margin: 'auto',
                justifyContent: 'flex-end'
              }}>
              <p style={{ marginRight: '1rem' }}>간식(+2,900)</p>
              <div  // - 버튼
                onClick={(e) => minusSnack(e)}
                style={{
                  backgroundColor: '#F6F1EC',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.15)',
                  cursor: 'pointer'
                }}>
                -
              </div>
              <p style={{ margin: '0 1rem 0 1rem' }}>{snackNum}</p>
              <div  // + 버튼
                onClick={(e) => plusSnack(e)}
                style={{
                  backgroundColor: '#EDDCCF',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.15)',
                  cursor: 'pointer'
                }}>
                +
              </div>
            </div>
            <div  // 장난감
              style={{
                display: 'flex',
                // alignItems: 'flex-end',
                alignItems: 'center',
                margin: 'auto',
                justifyContent: 'flex-end'
              }}>
              <p style={{ marginRight: '1rem' }}>장난감(+2,900)</p>
              <div  // - 버튼
                onClick={(e) => minusToy(e)}
                style={{
                  backgroundColor: '#F6F1EC',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.15)',
                  cursor: 'pointer'
                }}>
                -
              </div>
              <p style={{ margin: '0 1rem 0 1rem' }}>{toyNum}</p>
              <div  // + 버튼
                onClick={(e) => plusToy(e)}
                style={{
                  backgroundColor: '#EDDCCF',
                  width: '30px',
                  height: '30px',
                  borderRadius: '15px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.15)',
                  cursor: 'pointer'
                }}>
                +
              </div>
            </div>
          </div>
          <PurchaseList components2={[feedNum, snackNum, toyNum]} pets={pets} setFeedNum={setFeedNum} setSnackNum={setSnackNum} setToyNum={setFeedNum} />
        </div>
      </div>
      <div  // 구독 서비스 설명
        style={{
          margin: '10rem 0 0 0',
          color: '#AC998A',
          width: '70%',
        }}>
        <div> {/* 사료 */}
          <div>
            <h3>우리 강아지만을 위한 맞춤 구독 서비스</h3>
            <h2>나만의 구독 서비스</h2>
            <img src={imgB} width='100%' alt='package' />
            <p style={{ fontSize: '12px' }}>반려견의 취향에 맞는 선물을 조합해보세요.</p>
          </div>
        </div>
        <div  // 사료 소개 시작
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '15rem'
          }}>
          <img src={imgF} style={{ borderRadius: '5px' }} width='400px' alt='img' />
          <div
            style={{

            }}>
            <p>안전한 홀리스틱 등급 이상의</p>
            <h3>사료 맞춤 추천</h3>
          </div>
        </div>
        <AutoSlides info={feeds} />
        <div  // 간식 소개 시작
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '15rem'
          }}>
          <div
            style={{

            }}>
            <p>반려견에게 생기를 불어 넣어주는</p>
            <h3>간식 맞춤 추천</h3>
          </div>
          <img src={imgD} width='400px' alt='img' />
        </div>
        <AutoSlides info={snacks} />
        <div  // 장난감 소개 시작
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '15rem'
          }}>
          <img src={imgE} width='400px' alt='img' />
          <div
            style={{

            }}>
            <p>반려견이 재밌게 놀 수 있게</p>
            <h3>장난감 맞춤 추천</h3>
          </div>
        </div>
        <AutoSlides info={toys} />
        <div  // 마무리 글
          style={{
            margin: '15rem 0 15rem 0'
          }}>
          <h2>지금 바로 '달달하개'를 시작해 보세요</h2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SetCustom
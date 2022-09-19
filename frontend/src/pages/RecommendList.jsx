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
        borderRadius: '5px',
        boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
        padding: '50px 0 70px 0',
        position: 'relative',
      }}>
    <div
      style={{
        margin: '0 50px 0 50px',
      }}>
      <p
        style={{
          textAlign: 'start',
          margin: '0 0 1rem 0'
        }}>xx이를 위한 사료 추천(택1)</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            width: '28%',
            height: '100%',
            borderRadius: '5px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
            padding: '30px 10px 10px 10px'
          }}>
          <img src={imgD} width='100px' alt="" />
          <p>사료 이름</p>
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
        <div
          style={{
            backgroundColor: '#FFFFFF',
            width: '28%',
            height: '100%',
            borderRadius: '5px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
            padding: '30px 10px 10px 10px'
          }}>
          <img src={imgD} width='100px' alt="" />
          <p>사료 이름</p>
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
          <p>0명이 이 사료를 받았어요</p>
          <div>
            <p>최근 리뷰</p>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            width: '28%',
            height: '100%',
            borderRadius: '5px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.25)',
            padding: '30px 10px 10px 10px'
          }}>
          <img src={imgD} width='100px' alt="" />
          <p>사료 이름</p>
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
          <p>0명이 이 사료를 받았어요</p>
          <div>
            <p>최근 리뷰</p>
          </div>
        </div>
      </div>
      {/* <p
        onClick={event=>{
          event.preventDefault()
          props.setTogleOpen(false)
        }}
        style={{
        position: 'absolute',
        bottom: '0%',
        right: '3%',
        fontSize: '12px',
        cursor: 'pointer'
      }}>접기▲</p> */}
    </div>
  </div>
  )
}

const RecommendList = () => {
  const [togleOpen, setTogleOpen] = useState(false)
  const showTogle = ()=>{
    setTogleOpen(true)
  }
  const closeTogle = ()=>{
    setTogleOpen(false)
  }
  return (
    <div
      style={{
        paddingTop: '10rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <div
        style={{
          width: '70%',
        }}>
        <div  // 페이지 제목
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <h3
            style={{
              marginBottom: '0',
            }}>추천 제품 목록</h3>
          <p
            style={{
              color: '#6E6E6E',
              marginBottom: '0',
              display: 'flex',
              alignItems: 'flex-end',
              fontSize: '12px'
            }}>선택이 부족한 상품은 추천에 따라 자동 선택됩니다.</p>
        </div>
        <hr style={{backgroundColor: '#CCAA90'}}/>
        <div  // 토글
          style={{
            width: '100%',
            position: 'relative',
          }}>
          <img
            src={imgA}
            alt="img"
            style={{
              width: '100%',
              verticalAlign: 'middle',
              borderRadius: '5px'
            }}/>
          <div
            style={{
              display: 'flex'
            }}>
            <h2
              style={{
                position: 'absolute',
                top: '-10%',
                left: '10%',
                transform: 'translate(0%, 0%)'
              }}>package name</h2>
            <p
              style={{
                position: 'absolute',
                top: '0%',
                right: '10%',
                transform: 'translate(0%, 0%)'
              }}>월 21,900원</p>
          </div>
          <p
            style={{
              position: 'absolute',
              top: '40%',
              left: '10%',
              transform: 'translate(0%, 0%)',
              fontSize: '13px'
            }}>(사료1 + 간식2 + 장난감3)</p>
          {togleOpen ? 
            <p
              onClick={event=>{
                event.preventDefault()
                closeTogle()
              }}
              style={{
                position: 'absolute',
                bottom: '3%',
                right: '3%',
                transform: 'translate(0%, 0%)',
                fontSize: '12px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>접기 △</p> : 
              <p
                onClick={event=>{
                  event.preventDefault()
                  showTogle()
                }}
                style={{
                  position: 'absolute',
                  bottom: '3%',
                  right: '3%',
                  transform: 'translate(0%, 0%)',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>추천 제품 고르기 ▽</p>}
        </div>
        {togleOpen && <RecommendProducts setTogleOpen={setTogleOpen} />}
        <div  // 선택한 목록
          style={{
            backgroundColor: '#F6F1EC',
            width: '100%',
            height: '100px',
            margin: '3rem 0 4rem 0',
            paddingTop: '1rem',
            textAlign: 'start',
            borderRadius: '5px',
            boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
          }}> 
          <h3 style={{
            margin: '0 0 0 1rem'
          }}>선택한 목록</h3>
        </div>
      </div>
      <p>선택이 부족한 상품은 추천에 따라 자동 선택됩니다.</p>
      <div  // 마지막 버튼
        style={{
          backgroundColor: '#EDDCCF',
          width: '250px',
          height: '50px',
          cursor: 'pointer',
          margin: '1rem 0 3rem 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '5px',
        }}>
        <h4>장바구니 담기</h4>
      </div>
    </div>
  )
}

export default RecommendList
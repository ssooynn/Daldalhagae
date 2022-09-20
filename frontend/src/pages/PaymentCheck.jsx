import React, {useState} from 'react'
import MoreReview from '../components/MoreReview'

import imgA from '../assets/img/추천페이지1.png'
import imgD from '../assets/img/구독상세페이지4.png'
import leftArrow from '../assets/img/왼쪽.png'
import rightArrow from '../assets/img/오른쪽.png'

const PaymentCheck = () => {
  const [reviewOpen, setReviewOpen] = useState(false)
  const showMoreReview = ()=>{
    setReviewOpen(true)
  }
  return (
    <div
      style={{
        paddingTop: '7rem',
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
            }}>결제 완료 내역 확인</h3>
        </div>
        <hr style={{backgroundColor: '#CCAA90'}}/>
        <div  // 토글
          style={{
            width: '100%',
            position: 'relative',
            marginTop: '30px'
          }}>
          <img
            src={imgA}
            alt="img"
            style={{
              width: '100%',
              verticalAlign: 'middle',
              borderRadius: '5px 5px 0 0'
            }}/>
          <div
            style={{
              display: 'flex'
            }}>
            <h4
              style={{
                position: 'absolute',
                top: '-10%',
                left: '10%',
                transform: 'translate(0%, 0%)'
              }}>package name - pet name</h4>
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
        </div>
        <div  // 이번 달 배송 예정 상품
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
              paddingTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <img src={leftArrow} style={{cursor: 'pointer', width: '30px', height: '30px'}} alt="" />
            <div  // 상품 정보 카드
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  width: '200px',
                  height: '100%',
                  borderRadius: '5px',
                  boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.05)',
                  padding: '30px 10px 10px 10px',
                  textAlign: 'center'
                }}>
                <img src={imgD} width='100%' alt="" />
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
            <img src={rightArrow} style={{cursor: 'pointer', width: '30px', height: '30px'}} alt="" />
          </div>
        </div>
      </div>
      <div
          style={{
          display: 'flex',
          justifyContent: 'center'
          }}>
          <div
            style={{
              backgroundColor: '#CCAA90',
              width: '250px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              height: '50px',
              margin: '5rem 0 15rem 0',
              cursor: 'pointer',
            }}>
            <h3 style={{
            }}>메인으로 돌아가기</h3>
          </div>
        </div>
    </div>
  )
}

export default PaymentCheck
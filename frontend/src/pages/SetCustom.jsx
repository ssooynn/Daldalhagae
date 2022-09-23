import React, {useState} from 'react'
import styled from 'styled-components'
import imgA from '../assets/img/자유구독1.png'
import imgB from '../assets/img/구독상세페이지2.png'
import imgC from '../assets/img/구독상세페이지3.png'
import imgD from '../assets/img/구독상세페이지4.png'

import Modal from '../components/RecommendConfirmModal'
import ShoppingBag from '../components/ShoppingBag'
import Footer from '../components/Footer';

const Slide = styled.div`
margin: 5rem auto;
background-color: #F6F1EC;
text-align: start;
padding: 1px 3rem 2rem 3rem;
border-radius: 10px;
width: 80%;
`

const Elements = styled.div`
display: flex;
overflow hidden;
`
const Element = styled.div`
background-color: #FFFFFF;
border-radius: 10px;
padding: 10px;
width: 160px;
height: 170px;
margin: 0 10px 0 10px;
text-align: center;
// box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25); -> 넣으면 깨짐
`

const SetCustom = () => {
  const [bagOpen, setBagOpen] = useState(false)  // 장바구니
  const showBag = () => {
    setBagOpen(true)
  }
  const [modalOpen, setModalOpen] = useState(false) // 구독하기
  const showModal = () => {
    setModalOpen(true)
  }

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
          }} alt='package'/>
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
              <p style={{fontSize: '10px', color: '#949494', marginRight: '1rem'}}>(10~15kg)</p>
              <div  // - 버튼
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
              <p style={{margin: '0 1rem 0 1rem'}}>1</p>
              <div  // + 버튼
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
              <p style={{marginRight: '1rem'}}>사료(+2,900)</p>
              <div  // - 버튼
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
              <p style={{margin: '0 1rem 0 1rem'}}>1</p>
              <div  // + 버튼
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
              <p style={{marginRight: '1rem'}}>장난감(+2,900)</p>
              <div  // - 버튼
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
              <p style={{margin: '0 1rem 0 1rem'}}>1</p>
              <div  // + 버튼
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
          <div  // 펫 목록
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              textAlign: 'center'
            }}>
            <div>
              <img
                src={imgA}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '5px'
                }} alt='pet'/>
              <p style={{margin: 'auto'}}>이름</p>
            </div>
            <div style={{marginLeft: '6px'}}>
              <img
                src={imgA}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '5px'
                }} alt='pet'/>
              <p style={{margin: 'auto'}}>이름</p>
            </div>
          </div>
          <div  // 구매 목록
            style={{
              backgroundColor: '#F6F1EC',
              padding: '0.1px 20px 10px 20px',
              borderRadius: '5px',
              width: '280px'
            }}>
            <h4>구독목록</h4>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '10px'}}>
              <p>(사료1 + 간식1+ 장난감2) - 해리</p>
              <p>21,900</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '10px'}}>
              <p>(간식4+ 장난감2) - 포터</p>
              <p>12,900</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h4>총 2개</h4>
              <h4>34,800</h4>
            </div>
          </div>
          <div  // 장바구니
            style={{
              width: '100%',
              height: '2rem',
              backgroundColor: '#EDDCCF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '5px 0 5px 0',
            }}
            onClick={event=>{
              event.preventDefault()
              showBag()
            }}>장바구니
          </div>
          {bagOpen && <ShoppingBag setBagOpen={setBagOpen} />}
          <div  // 구독하기
            style={{
              width: '100%',
              height: '2rem',
              backgroundColor: '#CCAA90',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={event=>{
              event.preventDefault();
              showModal()
            }}
            >구독하기
          </div>
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
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
            <img src={imgB} width='100%' alt='package'/>
            <p style={{fontSize: '12px'}}>반려견의 취향에 맞는 선물을 조합해보세요.</p>
          </div>
          <div  // 사료 소개 시작
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '15rem'
            }}>
            <img src={imgC} style={{borderRadius: '5px'}} width='400px' alt='img'/>
            <div
              style={{

            }}>
              <p>안전한 홀리스틱 등급 이상의</p>
              <h3>사료 맞춤 추천</h3>
            </div>
          </div>
          <Slide>
            <p>이런 제품들을 추천 받을 수 있습니다.</p>
            <Elements>
              <Element>
                <img src={imgD} width='140px' height='130px' alt='feed'/>
                <p style={{color: 'black', marginTop: '10px'}}>미니스타터 3kg</p>
              </Element>
              <Element>
                <img src={imgD} width='140px' height='130px' alt='feed'/>
                <p style={{color: 'black', marginTop: '10px'}}>미니스타터 3kg</p>
              </Element>
              <Element>
                <img src={imgD} width='140px' height='130px' alt='feed'/>
                <p style={{color: 'black', marginTop: '10px'}}>미니스타터 3kg</p>
              </Element>
              <Element>
                <img src={imgD} width='140px' height='130px' alt='feed'/>
                <p style={{color: 'black', marginTop: '10px'}}>미니스타터 3kg</p>
              </Element>
              <Element>
                <img src={imgD} width='140px' height='130px' alt='feed'/>
                <p style={{color: 'black', marginTop: '10px'}}>미니스타터 3kg</p>
              </Element>
              <Element>
                <img src={imgD} width='140px' height='130px' alt='feed'/>
                <p style={{color: 'black', marginTop: '10px'}}>미니스타터 3kg</p>
              </Element>
            </Elements>
          </Slide>
        </div>
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
          <img src={imgC} width='400px' alt='img'/>
        </div>
        <div  // 간식 슬라이드
          style={{
            marginTop: '5rem',
            backgroundColor: '#F6F1EC',
            textAlign: 'start',
            padding: '1px 1rem 3rem 3rem',
          }}>
          <h4>이런 제품들을 추천 받을 수 있습니다.</h4>
          <div
            style={{
              display: 'flex',
            }}>
            <div
              style={{
                backgroundColor: '#FFFDFB',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '5px 5px 5px 5px gray',
                width: '150px',
                height: '150px',
              }}>
              <img src={imgD} width='100%' height='100%' alt='snack'/>
              {/* <p style={{color: 'black', textAlign: 'center'}}>미니스타터 3kg</p> */}
            </div>
          </div>
        </div>
        <div  // 장난감 소개 시작
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '15rem'
          }}>
          <img src={imgC} width='400px' alt='img'/>
          <div
            style={{

          }}>
            <p>반려견이 재밌게 놀 수 있게</p>
            <h3>장난감 맞춤 추천</h3>
          </div>
        </div>
        <div  // 장난감 슬라이드
          style={{
            marginTop: '5rem',
            backgroundColor: '#F6F1EC',
            textAlign: 'start',
            padding: '1px 1rem 3rem 3rem'
          }}>
          <h4>이런 제품들을 추천 받을 수 있습니다.</h4>
          <div
            style={{
              display: 'flex',
            }}>
            <div
              style={{
                backgroundColor: '#FFFDFB',
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '5px 5px 5px 5px gray',
                width: '150px',
                height: '150px',
              }}>
              <img src={imgD} width='100%' height='100%' alt='feed'/>
              {/* <p style={{color: 'black', textAlign: 'center'}}>미니스타터 3kg</p> */}
            </div>
          </div>
        </div>
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
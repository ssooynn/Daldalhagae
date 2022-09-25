import React,{ useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import imgA from '../assets/img/구독상세페이지1.png'
import imgB from '../assets/img/구독상세페이지2.png'
import imgC from '../assets/img/구독상세페이지3.png'
import imgD from '../assets/img/구독상세페이지4.png'

import Modal from '../components/RecommendConfirmModal'
import ShoppingBag from '../components/ShoppingBag'

const ClickPet = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 5px;
  &:hover{
    background-color : rgba(0, 0, 0, 0.2);
  }
`
function PurchaseList(props) {
  const pets = [{
    petId: 1,
    name: '해리',
    profile: '893fojrforjfa04jaof0asd'
  }, {
    petId: 2,
    name: '포터',
    profile: 'diaufoijfafe092r2jflefx'
  }]
  const showPets = []
  const [showPurchase, setShowPurchase] = useState([])
  const [checkPurchase, setCheckPurchase] = useState([])
  function addPet(params, e) {
    e.preventDefault()
    if (checkPurchase.includes(params.name)) {
      alert("이미 구독 상태인 강아지입니다.")
    } else {
      setShowPurchase([...showPurchase, <div>
        <p>{props.name} - {params.name}</p>
      </div>])
      setCheckPurchase([...checkPurchase, params.name])
    }
  }
  let totalPrice = Number(props.price) * showPurchase.length
  for (let i = 0; i < pets.length; i++) {
    showPets.push(<ClickPet onClick={(e)=>{addPet(pets[i], e)}}>
      <img
        src={imgA}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '5px',
        }} alt='pet'/>
      <p style={{margin: 'auto'}}>{pets[i].name}</p>
    </ClickPet>)
  }
  return <div>
    <div  // 펫 목록
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        textAlign: 'center',
      }}>
      {showPets}
    </div>
    <div
      style={{
        backgroundColor: '#F6F1EC',
        padding: '0.1px 20px 10px 20px',
        borderRadius: '5px',
        width: '280px'
      }}>
      <h3>구독목록</h3>
      {showPurchase}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h4>총 {showPurchase.length}개</h4>
        <h4>{totalPrice} 원</h4>
      </div>
    </div>
  </div>
}

const SubscribeDetail = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const showModal = () => {
    setModalOpen(true)
  }
  const [bagOpen, setBagOpen] = useState(false)
  const showBag = () => {
    setBagOpen(true)
  }

  const location = useLocation()
  const name = location.state.name
  const components = location.state.components
  const price = location.state.price

  return (
    <div
      style={{
        backgroundColor: '#FFFDFB',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '10rem',
          textAlign: 'end',
          width: '70%'
        }}>
        <img src={imgA} width='400' height='400' alt='package'/>
        <div>
          <h2 style={{margin: 'auto'}}>{name}</h2>
          <p style={{margin: '0.5rem auto', fontSize: '12px'}}>{components}</p>
          <h4 style={{margin: 'auto'}}>월 {price}원</h4>
          <p   style={{margin: '1.5rem 0 0.5rem 0'}}>누구를 위한 사료인가요?</p>
          <PurchaseList name={name} price={price}/>
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
      <div
        style={{
          margin: '10rem 0 0 0',
          color: '#AC998A',
          width: '70%',
          textAlign: 'center'
        }}>
        <h2>우리 강아지만을 위한 맞춤 구독 서비스</h2>
        <h2>{name}</h2>
        <img src={imgB} width='100%' alt='package'/>
        <h5>반려견을 위한 모든 것을 한번에 구독하세요</h5>
        <h2 style={{
          marginTop: '10rem'
        }}>상품구성</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '5rem'
          }}>
          <img src={imgA} width='300' height='300' alt='pet'/>
          <img src={imgA} width='300' height='300' alt='pet'/>
          <img src={imgA} width='300' height='300' alt='pet'/>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
          }}>
          <p>사료</p>
          <p>간식</p>
          <p>장난감</p>
        </div>
        <div
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
            <p>안전한 홀리스틱 등급 이상의</p>
            <h3>사료 맞춤 추천</h3>
          </div>
        </div>
        <div
          style={{
            marginTop: '5rem',
            backgroundColor: '#F6F1EC',
            textAlign: 'start',
            padding: '1px 1rem 2rem 3rem'
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
        <div
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
        <div
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
        <div
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
        <div
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
        <div
          style={{
            margin: '15rem 0 15rem 0'
          }}>
          <h2>지금 바로 '달달하개'를 시작해 보세요</h2>
        </div>
      </div>
    </div>
  )
}

export default SubscribeDetail
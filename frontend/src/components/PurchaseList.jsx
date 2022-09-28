import React, { useState } from 'react'
import styled from 'styled-components'

import Modal from '../components/RecommendConfirmModal'
import ShoppingBag from '../components/ShoppingBag'
import imgA from '../assets/img/자유구독1.png'
import DeleteButton from '../assets/img/delete.svg';
import { addItem } from '../stores/modules/bag'
import { useDispatch, useSelector } from 'react-redux'

const ClickPet = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 5px;
  &:hover{
    background-color : rgba(0, 0, 0, 0.2);
  }
`
const info = []
const PurchaseList = (props) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false)
  const showModal = () => {
    setModalOpen(true)
  }
  const [bagOpen, setBagOpen] = useState(false)
  const showBag = () => {
    setBagOpen(true)
  }
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
  const bag = useSelector((state) => state.bag);
  function addPet(params, e) {
    console.log(props);
    e.preventDefault()
    if (checkPurchase.includes(params.name)) {
      alert("이미 구독 상태인 강아지입니다.")
    } else {
      setShowPurchase([...showPurchase, <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center'
        }}>
        <p style={{ margin: '0 10px 0 0' }}>{props.info[0]} - {params.name}</p>
        <img src={DeleteButton} width='20px' height='20px' style={{ cursor: 'pointer' }} alt="" />
      </div>])
      setCheckPurchase([...checkPurchase, params.name])
      const temp = props.info.slice()
      temp.push(params.name)
      info.push(temp)
    }
  }
  let totalPrice = Number(props.info[3]) * showPurchase.length
  for (let i = 0; i < pets.length; i++) {
    showPets.push(<ClickPet onClick={(e) => { addPet(pets[i], e) }}>
      <img
        src={imgA}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '5px',
        }} alt='pet' />
      <p style={{ margin: 'auto' }}>{pets[i].name}</p>
    </ClickPet>)
  }
  function addItemInBag(e) {
    e.preventDefault();
    showBag();
    for (let i = 0; i < checkPurchase.length; i++) {
      const bags = {
        packageName: props.info[0],
        petName: checkPurchase[i],
        desc: props.info[1],
        price: props.info[3],
        feed: props.info[4][0],
        snack: props.info[4][1],
        toy: props.info[4][2],
      }
      //redux에 해당 상품이 이미 있는지 없는지 확인
      let isExist = false;
      for (let i = 0; i < bag.length; i++) {
        if (bag[i].packageName === bags.packageName && bag[i].petName === bags.petName) {
          isExist = true;
        }
      }
      //redux에 없으면 추가
      if (!isExist) {
        dispatch(
          addItem(bags)
        );
      }
    }

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
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>총 {showPurchase.length}개</h4>
        <h4>{totalPrice} 원</h4>
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
      onClick={(e) => {
        addItemInBag(e)
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
      onClick={event => {
        event.preventDefault();
        showModal()
      }}
    >구독하기
    </div>
    {modalOpen && <Modal setModalOpen={setModalOpen} info={info} />}
  </div>
}

export default PurchaseList
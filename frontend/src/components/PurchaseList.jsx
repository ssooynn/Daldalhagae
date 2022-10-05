import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Modal from '../components/RecommendConfirmModal'
import ShoppingBag from '../components/ShoppingBag'
import DeleteButton from '../assets/img/delete.svg';
import { addItem } from '../stores/modules/bag'
import './PurchaseList.css'

const ClickPet = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 5px;
  &:hover{
    background-color : rgba(0, 0, 0, 0.2);
  }
`


const PurchaseList = (props) => {
  const [infos, setInfos] = useState([])
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false)
  const [bagOpen, setBagOpen] = useState(false)
  const showBag = () => { setBagOpen(true) }
  const pets = props.pets
  const showPets = []
  const [showPurchase, setShowPurchase] = useState([])
  const [checkPurchase, setCheckPurchase] = useState([])
  const [checkPets, setCheckPets] = useState([])
  const bag = useSelector((state) => state.bag);
  useEffect(()=>{
    pets.map((i)=>{
      checkPets.push(false)
    })
  }, [])
  function deletePet(idx, e) {  // 구독 목록 삭제
    console.log(idx)
    e.preventDefault()
    let j = 0
    checkPurchase.map((name, jdx)=>{
      if (name === pets[idx].name) {
        j = jdx
      }
    })
    const copyShowPurchase = [...showPurchase]
    const copyCheckPurchase = [...checkPurchase]
    copyShowPurchase.splice(j, 1)
    copyCheckPurchase.splice(j, 1)
    setShowPurchase(copyShowPurchase)
    setCheckPurchase(copyCheckPurchase)
  }

  const [info, setInfo] = useState([])
  useEffect(()=>{
    if (props?.name) {
      setInfo([props.name, props.intro, props.components1, props.price, props.components2, pets])
    } else {
      setInfo([
        '나만의 구독 서비스',
        `사료: ${props.components2[0]}, 간식: ${props.components2[1]}, 장난감: ${props.components2[2]}`,
        ['', '', '',],
        props.components2[0] * 12900 + props.components2[1] * 2900 + props.components2[2] * 2900,
        props.components2,
        pets])
    }
  }, [props])

  function addPet(params, idx, e) {  // 구독 목록 추가
    e.preventDefault()
    if (checkPurchase.includes(params.name)) {
      deletePet(idx, e)
      checkPets[idx] = false
      setCheckPets(checkPets)
    } else {
      if (props.components2.reduce((a, b) => a + b, 0) === 0) {
        alert('상품 개수를 먼저 선택해 주세요.')
      } else {
        checkPets[idx] = true
        setCheckPets(checkPets)
        setShowPurchase([...showPurchase, <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '10px'
          }}>
          {props.name ? 
          <p style={{ margin: '0 10px 0 0' }}>{info[0]} - {params.name}</p> :
          <p style={{ margin: '0 10px 0 0' }}>나만의 구독 서비스 - {params.name}</p> }
          {/* <img onClick={(e) => deletePet(idx, e)} src={DeleteButton} width='25px' height='25px' style={{ cursor: 'pointer' }} alt="" /> */}
        </div>])
        setCheckPurchase([...checkPurchase, params.name])
        const temp = info.slice()
        temp.push(params.name)
        temp.push(params.petSno)
        setInfos([...infos, temp])
        props.setFeedNum(0)
        props.setSnackNum(0)
        props.setToyNum(0)
      }
    }
  }

  let totalPrice = Number(info[3]) * showPurchase.length

  for (let i = 0; i < pets.length; i++) {
    showPets.push(<div className={checkPets[i] ? 'clickCard1' : 'card1'} onClick={(e) => { addPet(pets[i], i, e) }}>
    {/* showPets.push(<ClickPet onClick={(e) => { addPet(pets[i], i, e) }}> */}
      <img
        src={pets[i].image}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '5px',
        }} alt='pet' />
      <p style={{ margin: 'auto' }}>{pets[i].name}</p>
    </div>)
  }
  function addItemInBag(e, infos) {
    console.log(infos)
    e.preventDefault();
    showBag();
    for (let i = 0; i < checkPurchase.length; i++) {
      const bags = [infos[i][0], infos[i][1], infos[i][2], infos[i][3], infos[i][4], infos[i][5], infos[i][6], infos[i][7]]
      
      //redux에 해당 상품이 이미 있는지 없는지 확인
      let isExist = false;
      for (let i = 0; i < bag.length; i++) {
        if (bag[i][0] === bags[0] && bag[i][6] === bags[6]) {
          isExist = true;
        } else if (bag[i][6] === bags[6]) {
          alert("해당 반려견을 위한 구독상품이 장바구니에 있습니다.");
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
  function addItemInBag2(e, infos) {
    e.preventDefault();
    setModalOpen(true)
    for (let i = 0; i < checkPurchase.length; i++) {
      const bags = [infos[i][0], infos[i][1], infos[i][2], infos[i][3], infos[i][4], infos[i][5], infos[i][6], infos[i][7]]

      //redux에 해당 상품이 이미 있는지 없는지 확인
      let isExist = false;
      for (let i = 0; i < bag.length; i++) {
        if (bag[i][0] === bags[0] && bag[i][6] === bags[6]) {
          isExist = true;
        } else if (bag[i][6] === bags[6]) {
          alert("해당 반려견을 위한 구독상품이 장바구니에 있습니다.");
          isExist = true;
          setBagOpen(true)
          setModalOpen(false)
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
        addItemInBag(e, infos)
      }}>장바구니
    </div>
    {bagOpen && <ShoppingBag setBagOpen={setBagOpen} info={infos} />}
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
      onClick={(e) => {
        addItemInBag2(e, infos)
      }}
    >구독하기
    </div>
    {modalOpen && <Modal setModalOpen={setModalOpen} info={bag} />}
  </div>
}

export default PurchaseList
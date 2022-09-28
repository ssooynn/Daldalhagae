import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { StyledButton, StyledText } from './CommonComponent'
import { FlexBox } from './MainComponent'
import PackageImage1 from '../assets/img/자유구독2.png'
import PackageImage2 from '../assets/img/구독상세페이지2.png'
import { useState } from 'react'
import DeleteButton from '../assets/img/delete.svg';
import { deleteItem } from '../stores/modules/bag'
import Modal from '../components/RecommendConfirmModal'

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
`

const BagStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width:500px;
  height: 100%;
  text-align: start;
  background-color: rgba(246, 241, 236, 0.95);
    z-index: 5;
  padding: 8rem 2rem 0 2rem;
  `

const ShoppingListBox = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
`

const SubBox = styled.div`
    width:100%;
    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
    box-sizing: border-box;
    margin: 5px 0px;
    ::before{
    border-radius: 5px;
    background-size: cover;
    background-image: ${(props) => {
    let a;
    switch (props.packageName) {
      case 'Play Package':
        a = `url(${PackageImage1})`;
        break;
      case 'Basic Package':
        a = `url(${PackageImage2})`;
        break;
      default:
        a = `url(${PackageImage1})`;
        break;
    }
    return a
  }};
    content: "";
    position: absolute;
    top: 0%;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.35;
  }
    object-fit: cover;
  `


const ShoppingBag = (props) => {
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalOpen, setModalOpen] = useState(false)
  const showModal = () => {
    setModalOpen(true)
  }

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < bag.length; i++) {
      total += Number(bag[i].price);
    }
    setTotalPrice(total);
  }, [bag])


  function closeBag() {
    props.setBagOpen(false)
  }

  function DeleteItemInBag(item) {
    dispatch(deleteItem(item));
  }
  return (
    <ModalBackground onClick={closeBag}>
      <BagStyled onClick={(e) => e.stopPropagation()}>
        <p
          onClick={closeBag}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            right: '30px',
            top: '0',
          }}>✖</p>
        <StyledText size="18px" weight="500" margin="10px 10px 10px 0px">장바구니</StyledText>
        <hr style={{ backgroundColor: '#CCAA90', height: '1px' }} />
        <ShoppingListBox>
          {bag ? bag.map((item, idx) => (
            <SubBox key={idx} packageName={item.packageName} >
              <FlexBox direction="column" justify="center" align="flex-start" margin="0px" width="auto">
                <StyledText weight="500" size="16px" margin="0px 0px 10px 0px" style={{ position: "relative" }}>{item.packageName} - {item.petName}</StyledText>
                <StyledText weight="400" size="12px" margin="5px 0px 0px 0px" style={{ position: "relative" }}>( {item.desc} )</StyledText>
              </FlexBox>
              <StyledText weight="500" size="16px" margin="0px 0px 0px 0px" style={{ position: "relative" }}>월 {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</StyledText>
              <img src={DeleteButton} alt="장바구니에서 삭제" width="26px" height="28px" style={{ position: "absolute", bottom: "10px", right: "10px" }} onClick={() => DeleteItemInBag(item)} />
            </SubBox>
          )) : <StyledText weight="500" size="16px" margin="30px">담은 구독이 없습니다.</StyledText>}
          <FlexBox direction="row" justify="space-between">
            <StyledText weight="500" size="16px" margin="20px 50px" style={{ position: "relative" }}>총 금액 합계</StyledText>
            <StyledText weight="500" size="16px" margin="20px 50px" style={{ position: "relative" }}>월 {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</StyledText>
          </FlexBox>
          <StyledButton onClick={showModal} bgcolor="#CCAA90" width="250px" height="50px" margin="10px 0px"><StyledText weight="500" size="16px">결제하기</StyledText></StyledButton>
          {modalOpen && <Modal setModalOpen={setModalOpen} info={props.info} />}
        </ShoppingListBox>
      </BagStyled>
    </ModalBackground >
  )
}
export default ShoppingBag
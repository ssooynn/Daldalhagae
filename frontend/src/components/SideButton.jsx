import React, { useRef, useState } from 'react'
import styled from "styled-components";
import cart from "../assets/img/cart.svg";
import upArrow from "../assets/img/upArrow.svg";
import chat from "../assets/img/chat.svg";
import { FlexBox } from './MainComponent';
import ShoppingBag from '../components/ShoppingBag'
const SideButtonStyled = styled.div`
width:30px;
height: 120px;
position: fixed;
bottom:5%;
right:3%;
background-color: rgba(255,255,255,0.5);
padding:20px 10px;
border-radius: 50px;
border: 2px solid #776B62;
z-index: 5;
    `

//스크롤 움직일때는 opacity?
export default function SideButton({ ...props }) {
  const [bagOpen, setBagOpen] = useState(false);
  const showBag = (e) => {
    e.preventDefault();
    setBagOpen(true)
  }
  function scrollTop(e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <SideButtonStyled {...props}>
      {bagOpen && <ShoppingBag setBagOpen={setBagOpen} />}
      <FlexBox direction="column" margin="0px" justify="space-between" height="100%">
        <img src={cart} alt="장바구니 버튼" width="30px" height="30px" onClick={(e) => showBag(e)}></img>
        <img src={chat} alt="챗봇 버튼" width="25px" height="25px"></img>
        <img src={upArrow} alt="맨 위로 버튼" width="23px" height="23px" onClick={(e) => scrollTop(e)}></img>
      </FlexBox>
    </SideButtonStyled >
  )
}

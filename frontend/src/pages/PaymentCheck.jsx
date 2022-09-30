import React, {useState} from 'react'
import styled from 'styled-components'
import PaymentCarousel from '../components/PaymentCarousel'
import { StyledButton } from '../components/CommonComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import PackageImage1 from '../assets/img/추천페이지1.png'
import PackageImage2 from '../assets/img/toggle_play.png'
import PackageImage3 from '../assets/img/toggle_all.png'
import daldalPackage from '../assets/img/toggle_daldal.png'
import toyPackage from '../assets/img/toggle_toy.png'
import lightPackage from '../assets/img/toggle_light.png'
import 자유구독 from '../assets/img/toggle_custom.png'

const PackageBox  = styled.div`
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
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3rem;
border-radius: 10px 10px 0 0;
`

const PaymentCheck = () => {
  const Navigate = useNavigate();
  function GoMainPage() {
    Navigate("/")
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
        <PackageBox>
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
              <h2>packageName - petName</h2>
              <p>월 Price원</p>
            </div>
            <p>Components</p>
          </div>
        </PackageBox>
        <PaymentCarousel></PaymentCarousel>
      </div>
      <StyledButton onClick={GoMainPage} SmallWhite style={{width: '250px', margin: '100px 0 100px 0'}}>메인으로 돌아가기</StyledButton>
      <Footer />
    </div>
  )
}

export default PaymentCheck
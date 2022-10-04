import React, {useState} from 'react'
import styled from 'styled-components'
import PaymentCarousel from '../components/PaymentCarousel'
import { StyledButton } from '../components/CommonComponent';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import PackageImage1 from '../assets/img/BasicPackage.png'
import PackageImage2 from '../assets/img/PlayPackage.png'
import PackageImage3 from '../assets/img/AllInOnePackage.png'
import daldalPackage from '../assets/img/DalDalPackage.png'
import toyPackage from '../assets/img/ToyPackage.png'
import lightPackage from '../assets/img/LightAllInOnePackage.png'
import 자유구독 from '../assets/img/나만의구독서비스.png'

const PackageBox  = styled.div`
position: relative;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1.2rem;
::before{
  border-radius: 10px;
  background-size: cover;
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

const PaymentCheck = () => {
  const location = useLocation()
  const infos = location.state.infos  // name, intro, components1, price, components2, pets, pet
  const pickedProducts = location.state.pickedProducts
  console.log('결제확인', infos)

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
            }}>결제 내역 확인</h3>
        </div>
        <hr style={{backgroundColor: '#CCAA90'}}/>
        {infos.map((info, idx)=>{
          return <div>
            <PackageBox packageName={info[0]}>
              <div style={{width: '80%'}}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <h2>{info[0]} - {info[6]}</h2>
                  <p>월 {info[3]}원</p>
                </div>
                <p>{info[1]}</p>
              </div>
            </PackageBox>
            <PaymentCarousel info={info} pickedProducts={pickedProducts[idx]} />
          </ div>
        })}
      </div>
      <StyledButton onClick={GoMainPage} SmallWhite style={{width: '250px', margin: '100px 0 100px 0'}}>메인으로 돌아가기</StyledButton>
      <Footer />
    </div>
  )
}

export default PaymentCheck
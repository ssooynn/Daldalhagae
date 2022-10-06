import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../components/CommonComponent';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

import imgA from '../assets/img/우리의한달을꽉차게.png'
import imgB from '../assets/img/BasicPackage.png'
import imgC from '../assets/img/PlayPackage.png'
import imgD from '../assets/img/AllInOnePackage.png'
import daldalPackage from '../assets/img/DalDalPackage.png'
import toyPackage from '../assets/img/ToyPackage.png'
import lightPackage from '../assets/img/LightAllInOnePackage.png'
import SideButton from '../components/SideButton';
import { useState } from 'react';

const MoveOtherOpions = styled.div`
  cursor: pointer;
  padding: 10px 0 0 0;
  border-radius: 5px;
  width:32%;
  height: 400px;
  box-sizing: border-box;
`
const MoveDetailButton1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: flex-end;
  cursor: pointer;
  padding: 20px 0px 0px 10px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`
const MoveDetailButton2 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  cursor: pointer;
  padding: 20px 10px 0px 0px;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`

const PackageImg = styled.img`
    aspect-ratio:6/4;
    border-radius: 5px;
    min-height:300px;
    width: 50%;
    object-fit: cover;
    box-shadow: 2px 1px 2px 0px rgba(0, 0, 0, 0.2);
    transition: ease-in-out 0.7s;

`

const OtherPackageImg = styled.img`
    border-radius: 5px;
    width: 100%;
    aspect-ratio: 6/4;
    object-fit: cover;
    box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.2);
    &:hover{
      transition: ease-in-out 0.7s;
      transform:scale(1.1);
  }
`

const SubscribeList = () => {
  const Navigate = useNavigate();
  const [basicHover, setBasicHover] = useState(false)
  const [playHover, setPlayHover] = useState(false)
  const [oneHover, setOneHover] = useState(false)

  function GoBasic() {
    Navigate("/subscribeDetail", {
      state: {
        name: 'Basic Package',
        intro: '사료 1개월',
        components1: ['사료 1개월 분 (10~15kg)', '', '',],
        components2: [1, 0, 0],
        price: '21900',
      }
    })
  }
  function GoPlay() {
    Navigate("/subscribeDetail", {
      state: {
        name: 'Play Package',
        intro: '간식 3종 + 장난감 2종',
        components1: ['', '간식 3종', '장난감 2종'],
        components2: [0, 3, 2],
        price: '40000'
      }
    })
  }
  function GoAllInOne() {
    Navigate("/subscribeDetail", {
      state: {
        name: 'All In One Package',
        intro: '사료 1개월 + 간식 3종 + 장난감 2종',
        components1: ['사료 1개월 분 (10~15kg)', '간식 3종', '장난감 2종',],
        components2: [1, 3, 2],
        price: '22900'
      }
    })
  }
  function GoDalDal() {
    Navigate("/subscribeDetail", {
      state: {
        name: 'DalDal Package',
        intro: '사료 1개월 + 간식 3종',
        components1: ['사료 1개월 분 (10~15kg)', '간식 3종', '',],
        components2: [1, 3, 0],
        price: '23900'
      }
    })
  }
  function GoToy() {
    Navigate("/subscribeDetail", {
      state: {
        name: 'Toy Package',
        intro: '사료 1개월 + 장난감 2종',
        components1: ['사료 1개월 분 (10~15kg)', '', '장난감 2종',],
        components2: [1, 0, 2],
        price: '24900'
      }
    })
  }
  function GoLightAll() {
    Navigate("/subscribeDetail", {
      state: {
        name: 'Light All Package',
        intro: '사료 1개월 + 간식 1종 + 장난감 1종',
        components1: ['사료 1개월 분 (10~15kg)', '간식 1종', '장난감 1종',],
        components2: [1, 1, 1],
        price: '25900'
      }
    })
  }
  function GoCustom() {
    Navigate("/setCustom")
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '8rem 0 0 0',
      }}>
      <SideButton />
      <div style={{ // 우리의 한달을 꽉 차게
        width: '100%',
        height: '30rem',
        backgroundImage: `url(${imgA})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '10rem'
      }}>
        <div
          style={{
            color: 'white',
            marginLeft: '20%',
          }}>
          <h1>우리의 한달을 꽉 차게</h1>
          <h3>반려견을 위한 1달 구독 서비스</h3>
        </div>
      </div>
      <div style={{ width: '70%', minWidth:'960px', maxWidth:'1080px', boxSizing:'border-box'}}>
        <div  // Basic Package
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15rem',
            height: 'auto',
            cursor:'pointer'

          }}
          onPointerOver={()=> setBasicHover(true)}
          onPointerOut={() => setBasicHover(false)}
          onClick={GoBasic}
          >
          <PackageImg src={imgB} alt="" style={{opacity:basicHover?'':'0.92'}}/>
          <MoveDetailButton1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '6rem',
                textAlign:'end'
              }}>
              <h1 style={{ margin: '0 0 30px 0' }}>Basic Package</h1>
              <p style={{ margin: '0' }}>든든한 한달을 위한 기본 구성,</p>
              <p style={{ margin: '0' }}>기본에 충실하고 싶은 분에게 추천합니다.</p>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(172, 153, 138, 0.2)',
                borderRadius: '5px',
                padding: '0px 30px 10px 30px',
                fontSize: '12px',
                width: '100%',
                boxSizing:'border-box'
              }}>
              <p style={{ fontWeight: 'bold', fontSize: '14px' }}>[사료 1개월 구성]</p>
              <p>고르기 힘든 반려견 사료, 이제 고민하지 마세요.</p>
              <p>'달달하개'가 기본에 충실한 사료 1개월 구성으로 반려인의 고민을 덜어드립니다.</p>
              <p>'홀리스틱' 등급만으로 구성된 반려견 사료 중 최적의 상품을 맞춤 추천해 보내드립니다.</p>
            </div>
          </MoveDetailButton1>
        </div>
        <div  // Play Package
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15rem',
            height: 'auto',
            cursor:'pointer'

          }}
          onPointerOver={()=> setPlayHover(true)}
          onPointerOut={() => setPlayHover(false)}
          onClick={GoPlay}>
          <MoveDetailButton2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: '6rem'
                }}>
                <h1 style={{ margin: '0 0 30px 0' }}>Play Package</h1>
                <p style={{ margin: '0' }}>활발한 우리 반려견 놀이 생활을 위한 구성,</p>
                <p style={{ margin: '0' }}>항상 발랄하고 활동적인 반려견에게 추천합니다.</p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(235, 203, 177, 0.2)',
                borderRadius: '5px',
                padding: '1px 30px 10px 30px',
                fontSize: '12px',
                width: '100%',
                boxSizing:'border-box'
              }}>
              <p style={{ fontWeight: 'bold', fontSize: '14px' }}>[간식 3종 + 장난감 2종 구성]</p>
              <p>항상 힘이 넘치는 우리 반려견, 어떻게 놀아줄까 고민이신가요?</p>
              <p>'달달하개'가 제안하는 Play Package를 통해 맛있고 즐거운 놀이 시간을 보내세요!</p>
              <p>다양한 간식 3종과 질리지 않는 장난감 2종으로 알찬 반려견 여가생활을 보장합니다.</p>
            </div>
          </MoveDetailButton2>
          <PackageImg src={imgC} alt="" style={{opacity:playHover?'':'0.92'}}/>
        </div>
        <div  // All In One Package
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15rem',
            height: 'auto',
            cursor:'pointer'
          }}
          onPointerOver={()=> setOneHover(true)}
          onPointerOut={() => setOneHover(false)}
          onClick={GoAllInOne}
          >
          <PackageImg src={imgD} alt="" style={{opacity:oneHover?'':'0.9'}}/>
          <MoveDetailButton1 >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'end',
                marginBottom: '6rem'
              }}>
              <h2 style={{ margin: '0 0 30px 0' }}>All In One Package</h2>
              <p style={{ margin: '0' }}>사료, 간식, 장난감 꽉 찬 구성</p>
              <p style={{ margin: '0' }}>반려견에게 가득찬 한달을 선물하세요</p>
            </div>
            <div
              style={{
                backgroundColor: 'rgba(254, 167, 100, 0.2)',
                borderRadius: '5px',
                padding: '1px 30px 10px 30px',
                fontSize: '12px',
                width: '100%',
                boxSizing:'border-box'
              }}>
              <p style={{ fontWeight: 'bold', fontSize: '14px' }}>[사료 1개월 + 간식 3종 + 장난감 2종 구성]</p>
              <p>뭘 고를지 고민일땐? 다 사면되지!</p>
              <p>'달달하개'가 사료, 간식, 장난감 전부 책임지겠습니다.</p>
              <p>고민 없이 꽉 찬 한 달을 반려견과 함께 즐기세요. 한 달간 달달하개.</p>
              {/* <p style={{textAlign: 'end', cursor: 'pointer', fontWeight: 'bold'}}>상세설명 보러가기 →</p> */}
            </div>
          </MoveDetailButton1>
        </div>
      </div>
      <div  // Other Package
        style={{
          textAlign: 'center',
          width: '70%'
        }}>
        <h2 style={{marginBottom:'40px'}}>Other Options</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <MoveOtherOpions onClick={GoDalDal}>
            <div style={{overflow:'hidden', width:'100%', borderRadius:'5px'}}>
              <OtherPackageImg src={daldalPackage} alt="" />
            </div>
            <h4 style={{marginBottom:'0px'}}>DalDal Package</h4>
            <p style={{fontSize:'14px'}}>[사료 1개월 + 간식 3종]</p>
          </MoveOtherOpions>
          <MoveOtherOpions onClick={GoToy}>
          <div style={{overflow:'hidden', width:'100%', borderRadius:'5px'}}>
            <OtherPackageImg src={toyPackage} alt="" />
          </div>
            <h4 style={{marginBottom:'0px'}}>Toy Package</h4>
            <p style={{fontSize:'14px'}}>[사료 1개월 + 장난감 2종]</p>
          </MoveOtherOpions>
          <MoveOtherOpions onClick={GoLightAll}>
          <div style={{overflow:'hidden', width:'100%', borderRadius:'5px'}}>
            <OtherPackageImg src={lightPackage} alt="" />
          </div>
            <h4 style={{marginBottom:'0px'}}>Light All Package</h4>
            <p style={{fontSize:'14px'}}>[사료 1개월 + 간식 1종 + 장난감 1종]</p>
          </MoveOtherOpions>
        </div>
      </div>
      <div  // Custom
        style={{
          margin: '10rem 0 20rem 0',
          textAlign: 'center'
        }}>
        <h2>원하는 구성이 없다면?</h2>
        <h2>.</h2>
        <h2>.</h2>
        <p>달달하개에서는 원하는 구성으로 나만의 구독 패키지를 만들 수 있습니다!</p>
        <p>지금 바로 아래 버튼을 클릭해 시작해보세요</p>
        <StyledButton SmallWhite style={{ width: '100%', marginTop: '50px' }} onClick={(e) => GoCustom()}>나만의 구독 패키지 만들기</StyledButton>
      </div>
      <Footer />
    </div>
  )
}

export default SubscribeList
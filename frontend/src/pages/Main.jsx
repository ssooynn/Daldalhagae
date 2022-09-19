import React from 'react'
import Main1 from "../assets/img/Main1.png";
import { StyledButton, StyledText } from '../components/CommonComponent';
import { ArrowImg, FlexBox, MainContent, MainReviewCard, MainSubscribeCard } from '../components/MainComponent';
import { useSpring, useChain, useSpringRef } from '@react-spring/web';

//Content3에 들어갈 사진
import ServiceInfo1 from "../assets/img/MainServiceInfo1.svg";
import ServiceInfo2 from "../assets/img/MainServiceInfo2.svg";
import ServiceInfo3 from "../assets/img/MainServiceInfo3.svg";

//Content4에 들어갈 사진
import ServiceInfo4 from "../assets/img/MainServiceInfo4.png";
import ServiceInfo5 from "../assets/img/MainServiceInfo5.png";

//Content7에 들어갈 사진
import MainWay1 from "../assets/img/MainWay1.svg";
import MainWay2 from "../assets/img/MainWay2.svg";
import MainWay3 from "../assets/img/MainWay3.svg";
import MainWay4 from "../assets/img/MainWay4.svg";
import MainWay5 from "../assets/img/MainWay5.svg";
import MainWay6 from "../assets/img/MainWay6.svg";
import rightArrow from "../assets/img/rightArrow.svg";
import Footer from '../components/Footer';
import SideButton from '../components/SideButton';




export default function Main() {
  const fadeInRef = useSpringRef();
  const fadeInRef2 = useSpringRef();
  // const titleRef = useSpringRef();
  const startButtonRef = useSpringRef();

  const fadeInAnimation = useSpring({
    ref: fadeInRef,
    from: { opacity: 0, color: '##131313' },
    to: [
      { opacity: 1, color: '#1f1d1d' }
      ,
    ],
    config: { duration: 500 },
  });

  const fadeInAnimation2 = useSpring({
    ref: fadeInRef2,
    from: { opacity: 0, color: '##131313' },
    to: [
      { opacity: 1, color: '#1f1d1d' }
      ,
    ],
    config: { duration: 500 },

  });

  // const titleAnimation = useSpring({
  //   ref: titleRef,
  //   from: { opacity: 0, color: '#1f1d1d', transform: 'scale(0.8)' },
  //   to: [
  //     { opacity: 1, color: '#776B62', transform: 'scale(0.9)' },
  //     { opacity: 1, color: '#1f1d1d', transform: 'scale(1)' },
  //   ],
  //   config: { duration: 300 },
  // });

  const buttonAnimation = useSpring({
    ref: startButtonRef,
    from: { opacity: 0 },
    to: [
      { opacity: 1 },

    ],
    config: { duration: 300 },
  })

  useChain([fadeInRef, fadeInRef2, startButtonRef], [0, 0.5, 1])



  return (
    <div style={{ height: "100vh", scrollSnapType: "y mandatory", overflowY: "scroll" }}>
      <SideButton />
      {/* 1st Content */}
      <MainContent direction="row" justify="space-around" style={{ backgroundImage: `url(${Main1})`, backgroundSize: "cover" }}>
        <FlexBox></FlexBox>
        <FlexBox direction="column" margin="10px 10px 10px 300px">
          <StyledText weight="300" size="24px" style={fadeInAnimation}>항상 똑같은 반려견 용품</StyledText>
          <FlexBox>
            <StyledText weight="300" size="28px" style={fadeInAnimation2}>바꾸고 싶다면</StyledText>
            <StyledText weight="600" size="30px" margin="10px 4px" style={fadeInAnimation2}>달달하개</StyledText>
          </FlexBox>
          <StyledButton SmallWhite margin="50px 5px" style={buttonAnimation} >지금 시작하기</StyledButton>
          <ArrowImg />
        </FlexBox>
      </MainContent>

      {/* 2nd Content */}
      <MainContent style={{ backgroundColor: "#FFF2E5" }}>
        <FlexBox direction="column" align="center">
          <StyledText weight="300" size="24px" margin="20px 10px 2px 10px">반려견 사료, 간식, 장난감</StyledText>
          <StyledText weight="300" size="24px" margin="2px 10px 20px 10px">선택지도 많고 신경쓸 것도 많아서</StyledText>
        </FlexBox>
        <div>
          <StyledText weight="500" size="26px" margin="50px 10px 20px 10px">'뭐 사지?'</StyledText>
        </div>
        <div>
          <StyledText weight="500" size="26px">.</StyledText>
          <StyledText weight="500" size="26px">.</StyledText>
          <StyledText weight="500" size="26px">.</StyledText>
        </div>
        <div>
          <StyledText weight="300" size="24px" margin="10px 10px 2px 10px">달마다 맞춤 추천</StyledText>
          <StyledText weight="300" size="24px" margin="2px 10px 20px 10px">달마다 정기 배송</StyledText>
        </div>
        <div>
          <StyledText weight="300" size="24px" margin="20px 10px 20px 10px">반려견의 달달한 한달을 위해</StyledText>
        </div>
        <div>
          <StyledText weight="500" size="32px" margin="20px 10px 20px 10px">달달하개</StyledText>
        </div>
      </MainContent>

      {/* 3rd Content */}
      <MainContent style={{ backgroundColor: "#FFFefe" }}>
        <FlexBox direction="column" justify="space-between" align="center" height="35%">
          <FlexBox direction="row" justify="center" align="center">
            <StyledText weight="500" size="32px">달달하개</StyledText>
            <StyledText weight="300" size="24px">는 이런 서비스예요.</StyledText>
          </FlexBox>
          <FlexBox direction="row" justify="space-between" align="center">
            <img src={ServiceInfo1} alt="맞춤추천" style={{ maxWidth: "30vw" }}></img>
            <img src={ServiceInfo2} alt="최고품질" style={{ maxWidth: "30vw" }}></img>
            <img src={ServiceInfo3} alt="간편한 구독 생활" style={{ maxWidth: "30vw" }}></img>
          </FlexBox>
        </FlexBox>
      </MainContent>

      {/* 4th Content */}
      <MainContent style={{ backgroundColor: "#776b62" }}>
        <FlexBox direction="column" justify="space-evenly" align="center" width="70%">
          <FlexBox direction="row" justify="space-between" align="center" width="100%">
            <img src={ServiceInfo4} alt="반려동물 장난감으로 노는 사진" height="80%" style={{ maxHeight: "50vh" }}></img>
            <FlexBox direction="column" justify="center" align="center" width="50%">
              <StyledText weight="500" size="28px" color="#eddccf">당신의 반려동물을 즐겁게</StyledText>
              <StyledText weight="300" size="18px" margin="10px 10px 2px 10px" color="#eddccf">아이의 크기, 기호도 등을 바탕으로</StyledText>
              <StyledText weight="300" size="18px" margin="2px 10px 2px 10px" color="#eddccf">딱 맞는 장난감을 추천해드립니다.</StyledText>
            </FlexBox>
          </FlexBox>
          <FlexBox direction="row" justify="space-between" align="center" width="100%">
            <FlexBox direction="column" justify="center" align="center" width="50%">
              <StyledText weight="500" size="28px" color="#eddccf">당신의 반려동물을 건강하고 행복하게</StyledText>
              <StyledText weight="300" size="18px" margin="10px 10px 2px 10px" color="#eddccf">아이의 알러지 유무, 크기와 특성, 필요 기능 등을 바탕으로</StyledText>
              <StyledText weight="300" size="18px" margin="2px 10px 2px 10px" color="#eddccf">딱 맞는 사료와 간식을 추천해드립니다.</StyledText>
            </FlexBox>
            <img src={ServiceInfo5} alt="사료 사진" height="80%" style={{ maxHeight: "50vh" }}></img>
          </FlexBox>
        </FlexBox>
      </MainContent>


      {/* 5th Content */}
      <MainContent>
        <FlexBox direction="column" justify="space-evenly" align="center" width="70%">
          <StyledText weight="500" size="28px">당신을 위한 구독 서비스</StyledText>
          <StyledButton XSmallIvory style={{ alignSelf: "flex-end" }}>더보기</StyledButton>
          <MainSubscribeCard />
        </FlexBox>
      </MainContent>

      {/* 6th Content */}
      <MainContent style={{ backgroundColor: "#f9f5ea" }}>
        <FlexBox direction="column" justify="space-evenly" align="center" width="70%" height="60%">
          <FlexBox direction="row" justify="center" align="center">
            <StyledText weight="500" size="24px">지금까지</StyledText>
            <StyledText weight="600" size="36px">8021</StyledText>
            <StyledText weight="500" size="24px">명이 이용했어요</StyledText>
          </FlexBox>
          <MainReviewCard />
        </FlexBox>
      </MainContent>

      {/* 7th Content */}
      <MainContent style={{ backgroundColor: "#ffffff" }}>
        <FlexBox direction="column" justify="space-evenly" align="center" width="70%" height="40%">
          <StyledText weight="500" size="24px">달달하개는 이렇게 만들어집니다.</StyledText>
          <FlexBox direction="row" justify="space-evenly" align="center" width="100%">
            <FlexBox direction="row" justify="space-evenly" align="start" width="100%">

              <img src={MainWay1} alt="회원가입/로그인" style={{ maxWidth: "30vw" }}></img>
              <img src={rightArrow} alt="맞춤추천" style={{ maxWidth: "30vw", alignSelf: "center" }}></img>
              <img src={MainWay2} alt="펫 정보 등록" style={{ maxWidth: "30vw" }}></img>
              <img src={rightArrow} alt="맞춤추천" style={{ maxWidth: "30vw", alignSelf: "center" }}></img>
              <img src={MainWay3} alt="등록한 정보를 바탕으로 제품 추천" style={{ maxWidth: "30vw" }}></img>
              <img src={rightArrow} alt="맞춤추천" style={{ maxWidth: "30vw", alignSelf: "center" }}></img>
              <img src={MainWay4} alt="추천 리스트 바탕으로 제품 선택 및 구독" style={{ maxWidth: "30vw" }}></img>
              <img src={rightArrow} alt="맞춤추천" style={{ maxWidth: "30vw", alignSelf: "center" }}></img>
              <img src={MainWay5} alt="정기 결제" style={{ maxWidth: "30vw" }}></img>
              <img src={rightArrow} alt="맞춤추천" style={{ maxWidth: "30vw", alignSelf: "center" }}></img>
              <img src={MainWay6} alt="정기 배송" style={{ maxWidth: "30vw" }}></img>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </MainContent>

      {/* 8th Content */}
      <MainContent style={{ backgroundColor: "#f9f5ea" }}>
        <FlexBox direction="column" justify="space-evenly" align="center" width="70%">
          <FlexBox direction="row" justify="center" align="center" margin="7px 1px">
            <StyledText weight="500" size="32px" color="#564b43" margin="5px 1px">달</StyledText>
            <StyledText weight="300" size="28px" color="#564b43" margin="5px 1px">마다 사야하는 강아지 용품</StyledText>
          </FlexBox>
          <FlexBox direction="row" justify="center" align="center" margin="7px 1px">
            <StyledText weight="500" size="32px" color="#564b43" margin="5px 1px">달</StyledText>
            <StyledText weight="300" size="28px" color="#564b43" margin="5px 1px">마다 뭐사주지? 하는 걱정 많으셨죠?</StyledText>
          </FlexBox>
          <FlexBox direction="row" justify="center" align="center" margin="7px 1px">
            <StyledText weight="500" size="32px" color="#564b43" margin="5px 1px">하</StyledText>
            <StyledText weight="300" size="28px" color="#564b43" margin="5px 1px">지만 이제 걱정 마세요!</StyledText>
          </FlexBox>
          <FlexBox direction="row" justify="center" align="center" margin="7px 1px">
            <StyledText weight="500" size="32px" color="#564b43" margin="5px 1px">개</StyledText>
            <StyledText weight="300" size="28px" color="#564b43" margin="5px 1px">개인을 위한 반려견 맞춤 구독 서비스, 달달하개</StyledText>
          </FlexBox>

        </FlexBox>
      </MainContent>


      {/* 9th Content */}
      <MainContent style={{ backgroundColor: "#ffffff" }} justify="center" height="80%">
        <FlexBox direction="column" justify="space-evenly" align="center" width="70%">
          <StyledText weight="500" size="32px" color="#776b62">지금 바로 '달달하개'를 시작해보세요</StyledText>
          <StyledButton MediumIvory margin="50px 5px" style={{ borderRadius: "5px" }}>지금 시작하기</StyledButton>
        </FlexBox>
      </MainContent>
      <Footer />
    </div >
  )
}

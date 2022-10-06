import React, { useEffect } from 'react'
import styled from 'styled-components';
import { StyledText } from './CommonComponent';
import KaKaoLoginBtn from "../assets/img/kakao_login_large_wide.png"
import KaKaoSignupBtn from "../assets/img/kakao_signup_large_wide.png"

import { useNavigate } from 'react-router-dom';
import { FlexBox } from './MainComponent';

const LoginModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
`


export default function Login(props) {
  const Navigate = useNavigate();

  function closeModal() { // 모달 끄기
    props.setIsModalOpen(false);
  }
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;

  const REDIRECT_URI = "http://localhost:3000/kakaoSignin";
  // const REDIRECT_URI = "https://j7a302.p.ssafy.io/kakaoSignin";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  function Kakao() {
    window.location.href = KAKAO_AUTH_URL;
  }

  useEffect(() => {  // 배경화면 스크롤 움직임 막기
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])
  return (
    <LoginModalStyled onClick={(e) => closeModal()}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          width: '500px',
          padding: '2rem 0 1rem 0',
          zIndex: '1',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          height: '350px',
        }}>
        <div
          style={{
            margin: '0 5rem 0 5rem'
          }}>
          <p
            onClick={(e) => closeModal()}
            style={{
              cursor: 'pointer',
              position: 'absolute',
              right: '30px',
              top: '0',
            }}>✖</p>
          <StyledText size="24px" weight="600" margin="30px 0px">로그인</StyledText>
          <FlexBox direction="column" justify="space-around" height="220px">

            <img src={KaKaoLoginBtn} alt="카카오로 로그인" width="100%" onClick={Kakao} />
            <img src={KaKaoSignupBtn} alt="카카오로 시작하기" width="100%" onClick={Kakao} />

            <StyledText onClick={(e) => { closeModal(); Navigate("/subscribeList") }} size="14px" style={{ cursor: 'pointer' }}>비회원으로 둘러보기</StyledText>
          </FlexBox>
        </div>
      </div>
    </LoginModalStyled>
  )
}

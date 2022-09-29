import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginApi } from '../api/user';
import { useDispatch } from "react-redux";
import { setUser } from '../stores/modules/user';
import Loading from '../assets/img/test.gif'
import { MainContent } from '../components/MainComponent';
import { StyledText } from '../components/CommonComponent';

// 카카오 로그인 후 리다이렉트 페이지
// 코드 처리 후 로그인/ 회원가입 진행

const KakaoSignin = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // kakao에서 던져준 코드 꺼내기
  let code = new URL(window.location.href).searchParams.get("code");
  function fetchData() {
    console.log(code);
    //code로 변경해야함
    LoginApi(code, (res) => {
      console.log(res);
      if (res.data.message === "success") { //로그인에 성공함 (유저 데이터가 있음)
        let token = res.data.accessToken;
        dispatch(
          setUser({
            token: token,
            usersSno: res.data.usersSno,
          })
        );
        Navigate("/");
      } else if (res.data.message === "fail") { // 유저데이터가 없음 (회원가입)
        Navigate("/signup", { state: res.data.kakaoId });
      }
    }
      , (err) => {
        console.log(err);
      })
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <MainContent>
      <img src={Loading} alt="로딩중" width="200px"></img>
      <StyledText size="18px" margin="30px 10px 5px 10px" weight="500" color="#ccaa90">Loading</StyledText>
    </MainContent>
  )
}

export default KakaoSignin
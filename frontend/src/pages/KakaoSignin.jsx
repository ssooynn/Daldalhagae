import React, { useEffect } from 'react'
import { LoginApi } from '../api/user';
// import { useDispatch } from "react-redux";

// 카카오 로그인 후 리다이렉트 페이지
// 코드 처리 후 로그인/ 회원가입 진행

const KakaoSignin = () => {
  // const dispatch = useDispatch();

  // kakao에서 던져준 코드 꺼내기
  let code = new URL(window.location.href).searchParams.get("code");
  function fetchData() {
    console.log(code);
    LoginApi("kakao1", (res)=>{
      console.log(res)}
      , (err)=>{
      console.log(err);
    })
    // window.location.href = "/signup";
    // loginDevApi(
    //   code,
    //   (res) => {
    //     let token = res.headers["authorization"];
    //     console.log(res);
    //     // 응답받은 요청 내용을 redux에 저장
    //     dispatch(
    //       setUser({
    //         userName: res.data.userName,
    //         userNickname: res.data.userNickname,
    //         userGender: res.data.userGender,
    //         userEmail: res.data.userEmail,
    //         userId: res.data.userId,
    //         token: token,
    //         role: res.data.userRole,
    //       })
    //     );
    //     localStorage.setItem("token", token);
    //     // 사용자 정보가 있는 로그인인 경우 메인페이지로 이동
    //     if (res.status === 200) {
    //       console.log("로그인 성공");
    //       window.location.href = "/";
    //     } else if (res.status === 201) {
    //       //사용자 정보가 없을 때(회원가입 안함) -> 회원가입 페이지로 이동
    //       window.location.href = "/signup1";
    //     }
    // },
    // (err) => {
    //   console.log(err);
    // }
    // );
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>KakaoSignin</div>
  )
}

export default KakaoSignin
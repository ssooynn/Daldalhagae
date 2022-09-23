import React, { useEffect, useState } from 'react'
// 스타일 컴포넌트
import styled from "styled-components";
import { FlexBox } from './MainComponent';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logo from '../assets/img/Logo2.png';
import { useSelector } from 'react-redux';


// 처음엔 배경 투명도 100%
// 스크롤을 아래로 내리는것을 감지했을 때는 흰색에 투명도 약간 주기
// 다시 올릴때는 투명도 80%
const Navbar = styled.div`
    width : 100%;
    padding-top: 10px;
    height :60px;
    background-color: ${(props) => props.backgroundColor || "rgba(255,255,255,0)"};
    position: fixed;
    top: 0%;
    color:#767676;
    box-shadow: ${(props) => props.boxShadow || "0px 4px 4px 0px rgba(249, 249, 249, 0.4)"};
    justify-content: center;
    align-items: center;
    display: flex;
    font-weight: 500;
    z-index: 999;
    `


const Category = styled.div`
  font-weight: 500;
  color: #776B62;
  font-size: 14px;
  &:hover {
    color:#1f1d1d;
    font-weight: 600;
  }
`


let lastScrollTop = 0;
let nowScrollTop = 0;
export function NavBar({ ...props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("rgba(255,255,255,0)");
  const [boxShadow, setboxShadow] = useState("none")
  const user = useSelector(state => state.user.user.user);

  function showLoginModal() {
    setIsModalOpen(true);
  }
  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (mounted) {
        nowScrollTop = window.scrollY;
        let fixBoxHeight = "50";
        // 스크롤 내리는 모션일때
        if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
          setBackgroundColor("rgba(255,254,254,0.9)");
          setboxShadow("0px 4px 4px 0px rgba(197, 197, 197, 0.4)");
        } else {
          if (lastScrollTop > nowScrollTop) {
            //Scroll up 
            setBackgroundColor("rgba(100,100,100,0)");
            setboxShadow("none");
          }
        }
        lastScrollTop = nowScrollTop;
      }
    });

    return () => {
      // window.removeEventListener("scroll", () => { });
      mounted = false;
    };
  }, []);

  return (
    <Navbar backgroundColor={backgroundColor} boxShadow={boxShadow} {...props}>
      <FlexBox width="70%" justify="space-between">
        {/* 내브바 왼쪽 로고 */}
        <Link to="/"><img src={Logo} width="80px"></img></Link>

        {/* 내브바 오른쪽 카테고리 리스트 */}
        <FlexBox width="300px" justify="space-between">
          <Link to="/reviewList"><Category>고객 후기</Category></Link>
          <Link to="/subscribeList"><Category>상품 목록</Category></Link>
          {!user ? <Category onClick={(e) => { e.preventDefault(); showLoginModal(); }}>로그인</Category> :
            <Link to="/mypage"><Category>My page</Category></Link>
          }
        </FlexBox>
      </FlexBox>

      {isModalOpen && <Login setIsModalOpen={setIsModalOpen} />}
    </Navbar>
  )
}
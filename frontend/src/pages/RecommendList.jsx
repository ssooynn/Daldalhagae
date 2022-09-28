import React from 'react'
import { useLocation } from 'react-router-dom';
import Toggle from '../components/Toggle'
import { StyledButton } from '../components/CommonComponent';
import Footer from '../components/Footer';

const RecommendList = (s) => {
  const location = useLocation()
  const info = location.state.info  // name, component, components, price
  const showToggle = []
  for (let i = 0; i < info.length; i++) {
    showToggle.push(<Toggle info={info[i]} />)
  }
  return (
    <div
      style={{
        paddingTop: '10rem',
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
            }}>추천 제품 목록</h3>
          <p
            style={{
              color: '#6E6E6E',
              marginBottom: '0',
              display: 'flex',
              alignItems: 'flex-end',
              fontSize: '12px'
            }}>선택이 부족한 상품은 추천에 따라 자동 선택됩니다.</p>
        </div>
        <hr style={{backgroundColor: '#CCAA90'}}/>
        {showToggle}
        <div  // 선택한 목록
          style={{
            backgroundColor: '#F6F1EC',
            width: '100%',
            height: '100px',
            margin: '3rem 0 4rem 0',
            paddingTop: '1rem',
            textAlign: 'start',
            borderRadius: '5px',
            boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
          }}> 
          <h3 style={{
            margin: '0 0 0 1rem'
          }}>선택한 목록</h3>
        </div>
      </div>
      <p>선택이 부족한 상품은 추천에 따라 자동 선택됩니다.</p>
      <StyledButton SmallWhite style={{width: '250px', margin: '50px 0 200px 0'}}>장바구니 담기</StyledButton>
      <Footer />
    </div>
  )
}

export default RecommendList
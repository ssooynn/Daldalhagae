import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle'
import { StyledButton } from '../components/CommonComponent';
import Footer from '../components/Footer';

const RecommendList = (s) => {
  const location = useLocation()
  const info = location.state.info  // name, intro, components1, price, components2, pets, pet
  const showToggle = []
  for (let i = 0; i < info.length; i++) {
    showToggle.push(<Toggle info={info[i]} />)
  }
  const Navigate = useNavigate();
  function GoPaymentList() {
    Navigate("/paymentList", {
      state: {
        name: 'Basic Package',
        intro: '사료 1개월',
        components1: ['사료 1개월 분 (10~15kg)', '', '',],
        components2: [1, 0, 0],
        price: '21900',
      }})
  }
    
  return (
    <div
      style={{
        paddingTop: '7.5rem',
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
    <StyledButton onClick={GoPaymentList} SmallWhite style={{width: '250px', margin: '50px 0 200px 0'}}>결제하기</StyledButton>
    <Footer />
    </div>
  )
}

export default RecommendList
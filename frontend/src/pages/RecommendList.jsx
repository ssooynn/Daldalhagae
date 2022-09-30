import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle'
import { StyledButton } from '../components/CommonComponent';
import Footer from '../components/Footer';

import imgD from '../assets/img/구독상세페이지4.png'

const RecommendList = (s) => {
  const location = useLocation()
  const infos = location.state.info  // name, intro, components1, price, components2, pets, pet
  const showToggle = []
  for (let i = 0; i < infos.length; i++) {
    showToggle.push(<Toggle info={infos[i]} />)
  }
  const Navigate = useNavigate();
  function GoPaymentList() {
    Navigate("/paymentList", {
      state: infos})
  }
  const products = [
    {
      sno : '',
      name : '로얄캐닌 인도어 10kg',
      image : imgD,
      effects: ['건강에 좋음'],
      targets: ['전연령'],
      materials: ['밀가루', '돼지고기'],
      particle: '중',
      grade: '',
      reviewNum: '',
      reviewList: [{
        rate: '',
        content:'',
        usersName:'',
        date : ''
      }]
    },
    {
      sno : '',
      name : '강아지 하루간식',
      image : imgD,
      effects: ['건강에 좋음'],
      targets: ['전연령'],
      materials: ['밀가루', '돼지고기'],
      particle: '중',
      grade: '',
      reviewNum: '',
      reviewList: [{
        rate: '',
        content:'',
        usersName:'',
        date : ''
      }]
    },]
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
            margin: '3rem 0 4rem 0',
            padding: '2rem',
            textAlign: 'start',
            borderRadius: '5px',
            boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
          }}> 
          <h3 style={{margin: 'auto'}}>선택한 목록</h3>
          <hr />
          {infos.map((info, idx)=>{
              return <div info={info}>
                <h4>{info[0]} - {info[6]} ({info[1]})</h4>
                <div style={{display:'flex'}}>
                  {products.map((product, jdx)=>{
                    return <div style={{
                      display:'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      margin: 'auto 5px',
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      padding: '10px',
                      height: '170px',
                      width: '170px',
                      boxShadow: '1px 1px 1px 1px #dab8b8'
                      }}>
                      <img src={product.image} width='150px' alt="" />
                      <p>{product.name}</p>
                    </div>
                  })}
                </div>
              </div>})}
        </div>
      </div>
      <p>선택이 부족한 상품은 추천에 따라 자동 선택됩니다.</p>
    <StyledButton onClick={GoPaymentList} SmallWhite style={{width: '250px', margin: '50px 0 200px 0'}}>선택 완료</StyledButton>
    <Footer />
    </div>
  )
}

export default RecommendList
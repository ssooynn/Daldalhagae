import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle'
import { StyledButton } from '../components/CommonComponent';
import Footer from '../components/Footer';

const ResetRecommentList = (s) => {
  const location = useLocation()
  const infos = location.state.info  // name, intro, components1, price, components2, pets, pet
  const showToggle = []
  useEffect(()=>{
    infos.map((info, idx)=>{
      info.push([])
      showToggle.push(<Toggle info={infos[idx]} />)
    }, [])
  })
  console.log(infos)
  for (let i = 0; i < infos.length; i++) {
    showToggle.push(<Toggle info={infos[i]} />)
  }
  const Navigate = useNavigate();
  function GoPaymentList() {
    let flag = false
    infos.map((info, idx)=>{
      if (info[7].length === 0) {
        flag = true
      }
    })
    if (flag) {
      if (window.confirm("선택이 부족한 항목은 자동으로 추천해 드립니다. 계속하시겠습니까?")) {
        Navigate("/paymentList", {state: infos})
      } else {}
      console.log(true)
    } else {
      Navigate("/paymentList", {state: infos})
    }
  }
  function PickedProducts(props) {
    const info = props.info
    return <div style={{display:'flex'}}>
      {info[7].map((product, jdx)=>{
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
  }
  function Packages() {
    return <div>
    {infos.map((info, idx)=>{
        return <div>
          <h4>{info[0]} - {info[6]} ({info[1]})</h4>
          {info.length > 7 ? 
          <PickedProducts info={info} /> :
          <div></div>}
        </div>})}
    </div>
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
            margin: '3rem 0 4rem 0',
            padding: '2rem',
            textAlign: 'start',
            borderRadius: '5px',
            boxShadow: '0.5px 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.25)',
          }}> 
          <h3 style={{margin: 'auto'}}>선택한 목록</h3>
          <hr />
          <Packages />
        </div>
      </div>
      <p>선택이 부족한 상품은 추천에 따라 자동 선택됩니다.</p>
    <StyledButton onClick={GoPaymentList} SmallWhite style={{width: '250px', margin: '50px 0 200px 0'}}>선택 완료</StyledButton>
    <Footer />
    </div>
  )
}

export default ResetRecommentList
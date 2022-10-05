import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle'
import { StyledButton } from '../components/CommonComponent';
import CarouselPickedProducts from '../components/CarouselPickedProducts';
import Footer from '../components/Footer';

const ResetRecommentList = () => {
  const location = useLocation()
  const info = location.state  // name, intro, components1, price, components2, pets, pet, petSno
  const components2 = [info.feeds.length, info.snacks.length, info.toys.length]
  const  data = [
      info.subscriptionName,
      `사료: ${info.feeds.length}, 간식: ${info.snacks.length}, 장난감: ${info.toys.length}`,
      ['', '', ''],
      info.price,
      components2,
      info.petName, // 전체 펫
      info.petName,  // 현재 펫 이름
      info.petSno 
    ]
  console.log(info)
  // for (let i = 0; i < infos.length; i++) {
  //   showToggle.push(<Toggle info={infos[i]} />)
  // }
  const Navigate = useNavigate();
  function GoMypage() {
    // let countProducts = 0
    // pickedProducts.map((subcription, idx)=>{subcription.map((type, jdx)=>{countProducts += type.length})})
    // if (totalCount !== countProducts) {
    //   if (window.confirm("선택이 부족한 항목은 자동으로 추천해 드립니다. 계속하시겠습니까?")) {
    //     FillPickedProducts(infos, pickedProducts, setPickedProducts)
    //     Navigate("/mypage", {state: {
    //       pickedProducts: pickedProducts,
    //       infos: infos
    //     }})
    //   } else {alert('신중하게 생각하고 누르십쇼;;')}
    // } else {
    //   Navigate("/mypage", {state: {
    //     pickedProducts: pickedProducts,
    //     infos: infos
    //   }})
    // }
  }
  function PickedProducts(props) {
    const types = props.types
    return <div>
      <CarouselPickedProducts types={types} />
    </div>
  }
  function Packages() {
    console.log('asdfdaf', info)
    return <div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h3>{info.subscriptionName} - {info.petName}</h3>
        <p>(사료: {info.feeds.length}, 간식: {info.snacks.length}, 장난감: {info.toys.length})</p>
      </div>
      {info.length > 7 ? 
      <PickedProducts info={info} /> :
      <div></div>}
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
        <Toggle info={data} flag={true} subscriptionHistoryNo={info.subscriptionHistoryNo} />
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
    <StyledButton onClick={GoMypage} SmallWhite style={{width: '250px', margin: '50px 0 200px 0'}}>선택 완료</StyledButton>
    <Footer />
    </div>
  )
}

export default ResetRecommentList
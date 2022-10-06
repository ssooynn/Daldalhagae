import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle'
import { StyledButton } from '../components/CommonComponent';
import CarouselPickedProducts from '../components/CarouselPickedProducts';
import Footer from '../components/Footer';

const RecommendList = () => {
  const location = useLocation()
  const infos = location.state.info  // name, intro, components1, price, components2, pets, pet, petNo
  console.log('recomlist', infos)
  const Navigate = useNavigate();
  const [pickedProducts, setPickedProducts] = useState([])
  useEffect(()=>{
    const copyPickedProducts = [...pickedProducts]
    infos.map((info, idx)=>{
      copyPickedProducts.push([[], [], []])
    })
    setPickedProducts(copyPickedProducts)
  }, [])
  let totalCount = 0
  infos.map((info, idx)=>{totalCount += info[4].reduce((a, b) => a+b, 0)})

  function GoPaymentList() {
    let countProducts = 0
    pickedProducts.map((subcription, idx)=>{subcription.map((type, jdx)=>{countProducts += type.length})})
    if (totalCount !== countProducts) {
      if (window.confirm("선택이 부족한 항목은 자동으로 추천해 드립니다. 계속하시겠습니까?")) {
        Navigate("/paymentList", {state: {
          pickedProducts: pickedProducts,
          setPickedProducts: setPickedProducts,
          infos: infos
        }})
      } else {alert('신중하게 생각하고 누르십쇼;;')}
    } else {
      Navigate("/paymentList", {state: {
        pickedProducts: pickedProducts,
        infos: infos
      }})
    }
  }
  
  function PickedProducts(props) {
    const types = props.types
    return <div>
      <CarouselPickedProducts types={types} />
    </div>
  }
  function Packages() {
    return <div>
    {pickedProducts.map((types, idx)=>{
        return <div
          style={{
            backgroundColor: 'rgb(240 229 221)',
            borderRadius: '10px',
            marginBottom: '10px',
            padding: '0 25px 25px 25px',

          }}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h3>{infos[idx][0]} - {infos[idx][6]}</h3>
            <p>{infos[idx][1]}</p>
          </div>
          <div>
            {types.length > 0 ?
              <PickedProducts types={types} />:
              <div></div>}
          </div>
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
        {infos ?
        infos.map((info, idx)=>(<Toggle key={idx} info={info} index={idx} products={pickedProducts} setPickedProducts={setPickedProducts} packageNo={idx} />))
        : <div></div>}
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

export default RecommendList
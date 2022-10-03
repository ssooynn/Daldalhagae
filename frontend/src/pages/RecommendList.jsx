import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Toggle from '../components/Toggle'
import { StyledButton } from '../components/CommonComponent';
import Footer from '../components/Footer';

const RecommendList = (s) => {
  const location = useLocation()
  const infos = location.state.info  // name, intro, components1, price, components2, pets, pet
  const showToggle = []
  const [pickedProducts, setPickedProducts] = useState([])
  useEffect(()=>{
    const copyPickedProducts = [...pickedProducts]
    infos.map((info, idx)=>{
      copyPickedProducts.push([[], [], []])
    })
    setPickedProducts(copyPickedProducts)
  }, [])
  for (let i = 0; i < infos.length; i++) {
    showToggle.push(<Toggle info={infos[i]} index={i} products={pickedProducts} setPickedProducts={setPickedProducts} />)
  }
  const Navigate = useNavigate();
  function GoPaymentList() {
    console.log(pickedProducts)
    let flag = false
    const checkEmptyBag = []
    // pickedProducts.map((pickedProduct, idx)=>{  // 빈 곳이 있는지 검사
    //   pickedProduct.map((products, jdx)=>{
    //     if (products.length === 0) {
    //       flag = true
    //       checkEmptyBag.push([idx, jdx])
    //     }
    //   })
    // })
    // if (flag) {
    //   if (window.confirm("선택이 부족한 항목은 자동으로 추천해 드립니다. 계속하시겠습니까?")) {
    //     Navigate("/paymentList", {state: {
    //       pickedProducts: pickedProducts,
    //       checkEmptyBag: checkEmptyBag,
    //       flag: flag,
    //     }})
    //   } else {}
    // } else {
    //   Navigate("/paymentList", {state: {
    //     pickedProducts: pickedProducts,
    //     checkEmptyBag: checkEmptyBag,
    //     flag: flag,
    //   }})
    // }
  }
  
  function PickedProducts(props) {
    const types = props.types
    return <div style={{display:'flex'}}>
      {types.map((type, jdx)=>{
        return type.map((product, jdx)=>{
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
            boxShadow: '1px 1px 1px 1px #dab8b8',
            height: '100%'
            }}>
            <img src={product.image} width='150px' height='150px' alt="" />
            <p style={{margin: '5px auto'}}>{product.name}</p>
          </div>
        })
      })}
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

export default RecommendList
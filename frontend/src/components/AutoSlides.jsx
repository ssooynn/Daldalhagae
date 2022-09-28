import React from 'react'
import './AutoSlides.css'

const AutoSlides = (props) => {
  const info = props.info
  const showProducts = []
  for (let i = 0; i < info.length; i++) {
    showProducts.push(<div className='element'>
        <img src={info[i].image} width='140px' height='130px' alt='product'/>
        <p style={{color: 'black', marginTop: '10px'}}>{info[i].name.split(' ')[0]}</p>
      </div>)
  }
  
  return <div className='slide'>
    <p>이런 제품들을 추천 받을 수 있습니다.</p>
    <div className='elements'>
      {showProducts}
    </div>
  </div>
}

export default AutoSlides
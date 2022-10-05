import React from 'react'
import './AutoSlides.css'

const AutoSlides = (props) => {
  const info = props.info
  const showProducts = []
  for (let i = 0; i < info.length * 2; i++) {
    showProducts.push(<div className='element'>
        <img src={info[i%10].image} width='140px' height='130px' alt='product'/>
        <p className='name'>{info[i%10].name}</p>
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
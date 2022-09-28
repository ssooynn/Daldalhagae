import React, {useState} from 'react'
import imgD from '../assets/img/구독상세페이지4.png'
import './AutoSlides.css'

const AutoSlides = () => {
  const feeds = [[imgD, '미니스타터 3kg'],[imgD, '미니스타터 3kg'],[imgD, '미니스타터 3kg'],[imgD, '미니스타터 3kg'],[imgD, '미니스타터 3kg'],[imgD, '미니스타터 3kg']]
  const [showFeeds, setShowFeeds] = useState([]) 
  for (let i = 0; i < feeds.length*2; i++) {
    showFeeds.push(<div className='element'>
        <img src={imgD} width='140px' height='130px' alt='feed'/>
        <p style={{color: 'black', marginTop: '10px'}}>미니스타터 3kg</p>
      </div>)
  }
  
  return <div className='slide'>
    <p>이런 제품들을 추천 받을 수 있습니다.</p>
    <div className='elements'>
      {showFeeds}
    </div>
  </div>
}
// const usersSno = useSelector((state)=>state.user.user.user.usersSno)
// Authorization: `Bearer` + `a.a.a`

export default AutoSlides
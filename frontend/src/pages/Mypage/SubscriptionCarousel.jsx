import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";


const SubscriptionCarousel = (props) => {
  const [slides, setSlides] = useState([])
  const feeds = [{
    name:'도비 어덜트',
    image: 'https://image.homeplus.kr/td/2e4bb58e-2579-401e-ae75-9a5c14819ed9'
  }]
  const toy = [{
    name:'치석제거 장난감 공',
    image:'http://m.puppymind.co.kr/web/product/big/201612/17_shop1_934311.jpg'
  },
  {
    name:'삑삑이 아령공',
    image:'http://mstatic1.e-himart.co.kr/contents/goods/00/02/28/81/27/0002288127__971CF4B37EA7DA75906C49A0D9__1_640_640.jpg'
  }]
  const snacks = [  {
    name:'공공펫 꼬꼬바',
    image:'https://shop.peopet.co.kr/data/goods/512/2022/04/_temp_16512024923869view.jpg'
  },
  {
    name:'공공펫 꼬꼬바',
    image:'https://shop.peopet.co.kr/data/goods/512/2022/04/_temp_16512024923869view.jpg'
  }]

  useEffect(()=>{
    setSlides([...feeds,...toy])
  },[])

  const grid3 = {
    width:'100%',
    display:'grid',
    gridTemplateColumns:'repeat(3, minmax(0, 1fr))',
    gap: '3%',
    margin: '12px 0px',
    fontSize: '14px',
    boxSizing: 'border-box'
  }

  const cardStyle = {
    backgroundColor:'white',
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    width:'100%',
    padding:'7%',
    borderRadius:'5px',
    textAlign:'center',
    boxSizing: 'border-box',
    color:'#1F1D1D',
    fontWeight:'500'
  }

  const imgStyle={
    width:'100%',
    aspectRatio:'1/1',
    marginBottom:'3px'
  }

  const carouselDiv ={
    width: '100%',
  }

  const carouselGrid = {
    width:`${slides.length * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${slides.length}, minmax(0, 1fr))`,

  }


  return (
    <>
    { slides.length <=3 ?
      <div style={grid3}>
        {slides.map((slide,idx)=>{
          return(
          <div style={cardStyle} key={idx}>
            <img src={slide.image} style={imgStyle} alt="" />
            <div>{slide.name}</div>
          </div>)
        })}
      </div>
      :
      <div style={carouselDiv}>
        <div style={{overflow:'hidden', width:'100%'}}>
          <div style={carouselGrid}>
            {slides.map((slide,idx)=>{
            return(
            <div style={cardStyle} key={idx}>
              <img src={slide.image} style={imgStyle} alt="" />
              <div>{slide.name}</div>
            </div>)
            })}
          </div>
        </div>
      </div>
    }
      </>
    
  )
}

export default SubscriptionCarousel
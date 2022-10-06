import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './CarouselFeed.css'

const CarouselPickedProducts = (props) => {
  const [index, setIndex] = useState(0)
  const types = props.types
  // useEffect(()=>{

  // })

  const pickedProductsCarouselGrid = {
    width:`${(types[0].length + types[1].length + types[2].length) * (100 / 3)}%`,
    display: 'grid',
    gridTemplateColumns:`repeat(${types[0].length + types[1].length + types[2].length}, minmax(0, 1fr))`,
    gap: '1%',
    padding: '10px 2px',
    boxSizing: 'border-box',
    justifyItems: 'center',
  }
  
  return (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
    {(types[0].length + types[1].length + types[2].length)>3 ? 
      <FontAwesomeIcon icon={faChevronLeft} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
      onClick={()=>{setIndex(Math.max(0, index-1))}}/> :
      <div></div>
    }
    {(types[0].length + types[1].length + types[2].length)>3 ? 
      <div style={{overflow: 'hidden'}}>
        <div style={{...pickedProductsCarouselGrid, transform: `translate3d(${-index * (100/(types[0].length + types[1].length + types[2].length))}%,0,0)`, transitionDuration:'1s'}}>
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
                height: '250px',
                width: '170px',
                boxShadow: '1px 1px 1px 1px #dab8b8',
                }}>
                <img src={product.image} width='150px' height='150px' alt="" />
                <p className='product_name'>{product.name}</p>
              </div>
            })
          })}
        </div>
      </div> : 
      <div style={{display: 'flex'}}>
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
              height: 'auto',
              width: '170px',
              boxShadow: '1px 1px 1px 1px #dab8b8',
              }}>
              <img src={product.image} width='150px' height='150px' alt="" />
              <p className='product_name' style={{margin: '5px auto'}}>{product.name}</p>
            </div>
          })
        })}
      </div>
    }
    {(types[0].length + types[1].length + types[2].length)>3 ? 
      <FontAwesomeIcon icon={faChevronRight} style={{color:'#776B62', fontSize:'26px', margin:'0px 8px', cursor:'pointer'}}
      onClick={()=>{setIndex(Math.min((types[0].length + types[1].length + types[2].length)-3, index+1))}}/> :
      <div></div>
    }
  </div>
  )
}

export default CarouselPickedProducts
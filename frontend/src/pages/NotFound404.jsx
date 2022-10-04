import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound404.scss'

const NotFound404 = (props) => {
  const {setIsNotFound} = props
  const navigate = useNavigate()

  useEffect(()=>{
    setIsNotFound(true)
  },[])

  const toHome = ()=>{
    setIsNotFound(false)
    navigate('/')
  }
  return (
    <div style={{width:'100%', height:'100vh', backgroundColor:'#EFDDCD'}}>
      <div style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-55%)', textAlign:'center'}}>
        <div style={{fontSize:'80px', color:'#564B43',fontWeight:'800'}}>404</div>
        <div style={{fontSize:'20px', color:'#564B43',fontWeight:'500',marginBottom:'20px'}}>잘못된 페이지 주소입니다 :(</div>
        <button className="btn btn--stripe" onClick={toHome}>홈페이지로 돌아가기</button>

      </div>
      {/* <LoadingComponent></LoadingComponent> */}
    </div>
  )
}

export default NotFound404
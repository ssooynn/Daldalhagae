import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from '../../components/NavBar'
import MypageSideBar from '../../components/Mypage/MypageSideBar'

const Mypage = () => {
  const container = {
    width:'70%',
    margin:'0 auto'
  }


  return (
    <div>
      <NavBar></NavBar>

      <div style={container}>
        <MypageSideBar></MypageSideBar>       
      </div>
    </div>
  )
}

export default Mypage
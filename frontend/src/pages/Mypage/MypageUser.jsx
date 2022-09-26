import React, { useState } from 'react'
import { InfoLayout, subTitleStyle } from '../../components/Mypage/MypageCommon'

const MypageUser = (props) => {

  const [user, setUser] = useState({
    usersSno : 'adsfasdf',
    kakaoId : 'adsfdsf',
    email: 'email@gmail.com',
    name: '김김김',
    phone: '010-9123-2423',
    address: '광교호수공원로 277;1110-1299048;01678' 
    })


  const gridDiv = {
    display:'grid',
    gridTemplateColumns:'repeat(5, minmax(0, 1fr))',
    gap: '2%',
    marginBottom: '7px'
  }

  const parseAddress = user.address.split(';')
  console.log(parseAddress)



  return (
    <div style={{padding:'5px 15px'}}>
      <div style={subTitleStyle}>기본정보</div>
      <div style={gridDiv}>
        <InfoLayout label='이름' children={user.name} span='span 2'></InfoLayout>
      </div>
      <div style={{...gridDiv, marginBottom:'50px'}}>
        <InfoLayout label='전화번호' children={user.phone} span='span 2'></InfoLayout>
        <InfoLayout label='이메일' children={user.email} span='span 3'></InfoLayout>
      </div>

      <div style={subTitleStyle}>배송지 정보</div>
        <InfoLayout label='주소' children={parseAddress[0]} sub={parseAddress[2]} padding='0px' subpadding='6px 8px'></InfoLayout>
        {parseAddress[1] ? 
          <InfoLayout children={parseAddress[1]}></InfoLayout>
          :
          <></>
        }

    </div>
  )
}

export default MypageUser
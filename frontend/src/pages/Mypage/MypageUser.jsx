import React, { useState } from 'react'
import { InfoLayout, subTitleStyle } from '../../components/Mypage/MypageCommon'

const MypageUser = (props) => {

  const [user, setUser] = useState({
    name:'김김김',
    phoneNo:'010-1234-1234',
    email:'email@gmail.com',
    address: '서울특별시 강남구 역삼동 테헤란로 212',
    addressDetail: '1102호',
    zip: '06220',})


  const gridDiv = {
    display:'grid',
    gridTemplateColumns:'repeat(5, minmax(0, 1fr))',
    gap: '2%',
    marginBottom: '7px'
  }



  return (
    <div style={{padding:'5px 15px'}}>
      <div style={subTitleStyle}>기본정보</div>
      <div style={gridDiv}>
        <InfoLayout label='이름' children={user.name} span='span 2'></InfoLayout>
      </div>
      <div style={{...gridDiv, marginBottom:'50px'}}>
        <InfoLayout label='전화번호' children={user.phoneNo} span='span 2'></InfoLayout>
        <InfoLayout label='이메일' children={user.email} span='span 3'></InfoLayout>
      </div>

      <div style={subTitleStyle}>배송지 정보</div>
        <InfoLayout label='주소' children={user.address} sub={user.zip} padding='0px' subpadding='6px 8px'></InfoLayout>
        {user.addressDetail ? 
          <InfoLayout children={user.addressDetail}></InfoLayout>
          :
          <></>
        }

    </div>
  )
}

export default MypageUser
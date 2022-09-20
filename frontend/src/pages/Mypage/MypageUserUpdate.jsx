import React, { useState } from 'react'
import { InfoLayout } from '../../components/Mypage/MypageCommon'

const MypageUserUpdate = (props) => {
  const [user, setUser] = useState(props.user)

  const gridDiv = {
    display:'grid',
    gridTemplateColumns:'repeat(5, minmax(0, 1fr))',
    gap: '2%'
  }
  return (
    <div>
      <div>기본정보</div>
      <div style={gridDiv}>
        <InfoLayout label='이름' children={user.name} span='span 2'></InfoLayout>
      </div>
      <div style={gridDiv}>
        <InfoLayout label='전화번호' children={user.phoneNo} span='span 2'></InfoLayout>
        <InfoLayout label='이메일' children={user.email} span='span 3'></InfoLayout>
      </div>

      <div>배송지 정보</div>
        <InfoLayout label='주소' children={user.address} sub={user.zip} padding='0px' subpadding='5px'></InfoLayout>
        {user.addressDetail ? 
          <InfoLayout children={user.addressDetail}></InfoLayout>
          :
          <></>
        } 

      </div>
  )
}

export default MypageUserUpdate
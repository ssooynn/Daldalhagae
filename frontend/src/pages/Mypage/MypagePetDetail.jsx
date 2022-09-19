import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledProfile, FlexBox } from '../../components/Mypage/MypageCommon';

const MypagePetDetail = () => {
  const location = useLocation()
  const petId = location.state.petId
  console.log(petId)
  const [pet, setPet] = useState({
    profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'해리',
    birthday:'2022.02.20',
    alergies: ['콩', '당근'],
    fatStat:'3',
    subscribing:[{
      subscibtionId:'P12566',
      category:'3',
      duration:'2022.09.08~ 10.07',
      
    }]
  })
  
  useEffect(()=>{
    // petId 활용해서 정보 fetching

  }, [])
  

  return (
    <div style={{padding: '2%'}}>
      {/* 기본정보 border bottom 라인 */}
      <div>
        <div>기본정보</div>
        <FlexBox direction="row" justify="start" align="start">
          <StyledProfile src={pet.profileImg} width='100px' />
          <FlexBox direction="column" justify="start" align="start">
            <div>이름 <span>{pet.name}</span></div>
            <div>생년월일 <span>{pet.birthday}</span></div>
          </FlexBox>
        </FlexBox>
      </div>
      <div>
        <div>상세정보</div>
        <div>
          알러지
          {/* {pet.alergies?.map((alergy, idx)=>{return (컴포넌트)})} */}
        </div>
        <div>
          비만도 <span>{pet.fatStat}</span>
        </div>
      </div>
      {pet.subscribing? 
        <div>
          구독중인 상품
          {/* 컴포넌트 */}
        </div>
      :<></>}
      
    </div>
  )
}

export default MypagePetDetail
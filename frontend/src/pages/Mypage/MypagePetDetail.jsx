import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledProfile, FlexBox, subTitleStyle, PetTag } from '../../components/Mypage/MypageCommon';

const MypagePetDetail = (props) => {
  const {setCurrentFocus} = props
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
      
    }],
    target: [1,3],
    effect: []

  })

  const fatList = ['야윈상태','저체중','정상체중','과체중','비만']
  const fatColor = ['#EDDCCF', '#BEC3C7','#FFE6A7','#F3BD94','#DB9090']
  const targetList = ['퍼피','어덜트', '시니어', '임신/수유', '대형견', '중형견']
  const targetColor = ['#D2E0BF', '#DCC7B7','#A5AAAD','#E0D3ED','#E1AAAA','#FFC6AE']

  
  useEffect(()=>{
    // petId 활용해서 정보 fetching
    setCurrentFocus({category:'pet', val:petId})
    
  }, [])

  const profileBoxStyle = {
    fontSize:'18px',
    fontWeight:'500',
    color:'#1f1d1d',
    margin:'20px 0px',
    boxSizing:'border-box', 
    width:'50%',
    minWidth:'300px',
    padding: '20px', 
    borderRadius:'15px', 
    backgroundColor:'#FFFDFB', 
    boxShadow:'-1px -1px 3px rgba(0,0,0,0.2), 1px 1px 3px rgba(0,0,0,0.2)'
  }

  const detailText ={
    fontSize:'14px',
    fontWeight:'400'
  }

  const gridDiv = {
    display:'grid',
    gridTemplateColumns:'repeat(3, minmax(0, 1fr))',
    gap: '2%',
    marginBottom: '7px'
  }
  

  return (
    <div style={{padding:'5px 15px'}}>
      {/* 기본정보 border bottom 라인 */}
      <div>
        <div style={profileBoxStyle}>
          <FlexBox direction="row" justify="start" align="start">
            <StyledProfile src={pet.profileImg} width='110px' />
            <FlexBox direction="column" height="110px" justify="space-around" align="start" margin="0px 0px 0px 10%">
              <div>{pet.name}</div>
              <div>
                <div style={detailText}>생일: <span>{pet.birthday}</span></div>
                <div style={detailText}>체중: <span>{fatList[pet.fatStat-1]}</span></div>
                <div style={detailText}>특이사항</div>
                <div></div>
              </div>
            </FlexBox>
          </FlexBox>
        </div>
      </div>
      <div>
        <div style={subTitleStyle}>상세정보</div>
        <div>
          알러지
          {/* {pet.alergies?.map((alergy, idx)=>{return (컴포넌트)})} */}
        </div>
        <div>
          특별관리
          {/* {pet.alergies?.map((alergy, idx)=>{return (컴포넌트)})} */}
        </div>
        {pet.subscribing? 
        <div>
          구독중인 상품
          {/* 컴포넌트 */}
        </div>
      :<></>}
      </div>

      
    </div>
  )
}

export default MypagePetDetail
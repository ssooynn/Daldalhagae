import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledProfile, FlexBox, subTitleStyle, PetTag } from '../../components/Mypage/MypageCommon';
import { PetAge } from '../../util/PetAge';

const MypagePetDetail = (props) => {
  const {setCurrentFocus} = props
  const location = useLocation()
  const petId = location.state.petId
  console.log(petId)
  const [pet, setPet] = useState({
    profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'해리',
    birthday:'2022-02-20',
    alergies: ['콩', '당근'],
    fatStat:'3',
    subscribing:[{
      subscibtionId:'P12566',
      category:'3',
      duration:'2022.09.08~ 10.07',
      
    }],
    target: [1],
    effect: []

  })

  const fatList = ['야윈상태','저체중','정상체중','과체중','비만']
  const fatColor = ['#EDDCCF', '#BEC3C7','#FFE6A7','#F3BD94','#DB9090']
  const targetList = ['퍼피','어덜트', '시니어', '임신/수유', '대형견', '중형견']
  const targetColor = ['#D2E0BF', '#DCC7B7','#A5AAAD','#E0D3ED','#E1AAAA','#FFC6AE']

  const today = new Date();   

  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1;  // 월
  const date = today.getDate();  // 날짜
  const todayStr = year + '-' + month + '-' + date 
  const petAge = PetAge(todayStr, pet.birthday)

  useEffect(()=>{
    // petId 활용해서 정보 fetching
    setCurrentFocus({category:'pet', val:petId})
    
  }, [])

  const profileBoxStyle = {
    fontSize:'18px',
    fontWeight:'500',
    color:'#1f1d1d',
    margin:'25px 0px',
    boxSizing:'border-box', 
    width:'47%',
    minWidth:'300px',
    padding: '20px', 
    borderRadius:'15px', 
    backgroundColor:'#FFFDFB', 
    boxShadow:'-1px -1px 3px rgba(0,0,0,0.2), 1px 1px 3px rgba(0,0,0,0.2)'
  }

  const detailText ={
    fontSize:'13px',
    fontWeight:'400'
  }

  const gridDiv = {
    width:'100%',
    display:'grid',
    gridTemplateColumns:'repeat(2, minmax(0, 1fr))',
    gap: '2%',
    marginTop:'4px',
  }
  

  return (
    <div style={{padding:'5px 15px'}}>
      {/* 기본정보 border bottom 라인 */}
      <div style={{marginBottom:'40px'}}>
        <div style={profileBoxStyle}>
          <FlexBox direction="row" justify="start" align="start">
            <StyledProfile src={pet.profileImg} width='110px' />
            <FlexBox direction="column" height="110px" justify="space-around" align="start" margin="0px 0px 0px 8%">
              <div>
                <div style={{fontSize:'20px', marginBottom:'1px'}}>{pet.name}  <span style={{...detailText, fontSize:'11px', marginLeft:'2px'}}>[{petAge}개월]</span></div>
                <div style={detailText}>🎂 {pet.birthday.replaceAll('-','.')}</div>
              </div>

              <div style={{width:'100%'}}>
                {/* <div style={detailText}>생일: <span>{pet.birthday}</span></div> */}
                {/* <div style={detailText}>체중: <span>{fatList[pet.fatStat-1]}</span></div> */}
                <div style={{height:'15px'}}> </div>
                <div style={gridDiv}>
                  <PetTag bgColor={fatColor[[pet.fatStat-1]]}>{fatList[pet.fatStat-1]}</PetTag>
                  <PetTag bgColor={targetColor[[pet.target-1]]}>{targetList[pet.target-1]}</PetTag>
                </div>
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
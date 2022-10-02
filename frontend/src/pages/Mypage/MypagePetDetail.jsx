import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DefaultProfile1 from '../../assets/img/DefaultProfile1.png'
import DefaultProfile2 from '../../assets/img/DefaultProfile2.png'
import DefaultProfile3 from '../../assets/img/DefaultProfile3.png'
import { StyledProfile, FlexBox, subTitleStyle, PetTag } from '../../components/Mypage/MypageCommon';
import { PetAge } from '../../util/PetAge';

import { petInfo } from '../../api/mypagePet';

import Swal from 'sweetalert2'


const MypagePetDetail = (props) => {
  const {setCurrentFocus} = props
  const location = useLocation()
  const navigate = useNavigate()
  const petId = location.state?.petId
  console.log(petId)
  const [pet, setPet] = useState({})
  const [materials, setMaterials] = useState([])
  const [effects, setEffects] = useState([])
  const [age, setAge] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    if(!petId){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "잘못된 접근입니다.",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          title:'midFont'
        }
      }).then(()=>{
        navigate("/mypage");
      })
    }
    petInfo(petId)
    .then((res)=>{
      console.log(res.data)
      setPet(res.data.pets)
      setMaterials(Object.values(res.data.pets.materials))
      setEffects(Object.values(res.data.pets.effects))
      const today = new Date();   

      const year = today.getFullYear(); // 년도
      const month = today.getMonth() + 1;  // 월
      const date = today.getDate();  // 날짜
      const todayStr = year + '-' + month + '-' + date 
      if (res.data.pets?.birth){
        const petAge = PetAge(todayStr, res.data.pets.birth?.join('-'))
        setAge(petAge)  
      }
      setIsLoading(false)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [petId])

  const fatList = ['야윈상태','저체중','정상체중','과체중','비만']
  const fatColor = ['#EDDCCF', '#BEC3C7','#FFE6A7','#F3BD94','#DB9090']
  const targetList = ['퍼피','어덜트', '시니어', '임신/수유', '대형견', '중형견']
  const targetColor = ['#D2E0BF', '#DCC7B7','#A5AAAD','#E0D3ED','#E1AAAA','#FFC6AE']


  useEffect(()=>{
    // petId 활용해서 정보 fetching
    setCurrentFocus({category:'pet', val:petId})
    
  }, [petId])

  const profileBoxStyle = {
    fontSize:'18px',
    fontWeight:'500',
    color:'#1f1d1d',
    margin:'25px 0px',
    boxSizing:'border-box', 
    width:'47%',
    minWidth:'320px',
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
    width:'100%',
    display:'grid',
    gridTemplateColumns:'repeat(2, minmax(0, 1fr))',
    gap: ' 8px 1.2%',
    marginTop:'4px',
  }

  const litTitle = {
    fontSize:'15px',
    fontWeight: '500',
    marginBottom: '4px'
  }
  

  return (
    <div style={{padding:'5px 15px'}}>
      {/* 기본정보 border bottom 라인 */}
      <div style={{marginBottom:'40px'}}>
        <div style={profileBoxStyle}>
          <FlexBox direction="row" justify="start" align="start">
            <StyledProfile src={pet.image ? pet.image: DefaultProfile2} width='110px' height='110px' />
            <FlexBox direction="column" height="110px" justify="space-around" align="start" margin="0px 0px 0px 8%">
              <div>
                <div style={{fontSize:'18px', marginBottom:'1px'}}>{pet.name}  <span style={{...detailText, fontSize:'11px', marginLeft:'2px'}}>[ {age} 개월 ]</span></div>
                <div style={{fontSize:'13.5px'}}>🎂 {pet.birth?.join('.')}</div>
              </div>

              <div style={{width:'100%'}}>
                {/* <div style={detailText}>생일: <span>{pet.birthday}</span></div> */}
                {/* <div style={detailText}>체중: <span>{fatList[pet.fatStat-1]}</span></div> */}
                <div style={{height:'15px'}}> </div>
                <div style={gridDiv}>
                  <PetTag bgColor={fatColor[[pet.fat-1]]}>{fatList[pet.fat-1]}</PetTag>
                  <PetTag bgColor={targetColor[targetList.indexOf(pet.target)]}>{pet.target}</PetTag>
                </div>
              </div>
            </FlexBox>
          </FlexBox>
        </div>
      </div>
      { (materials?.length||effects?.length) ?
        <div>
        <div style={subTitleStyle}>상세정보</div>
        <div style={{padding:'0px 10px'}}>
          {materials?.length ?
          <>
            <div style={litTitle}>알러지</div> 
            <div style={{...detailText, fontWeight:'300', marginBottom:'10px'}}>사료 및 간식 추천 시 해당 원료가 들어간 품목은 제외하고 추천됩니다.</div>
            <div style={{...gridDiv, gridTemplateColumns:'repeat(7, minmax(0, 1fr))', marginBottom:'20px'}}>
              {materials.map((alergy,idx)=>{
                const colorList=['#EDDCCF','#F4E8E8','#E7E1DC','#D6C9C0','#E4D1C2']
                return(
                  <PetTag padding='6px 0px' key={idx} bgColor={colorList[(idx)%5]}>{alergy}</PetTag>
                )
              })}
            </div>
          </>
          :
          <></>
          }
          {effects?.length ?
          <>
            <div style={litTitle}>특별관리</div> 
            <div style={{...detailText, fontWeight:'300', marginBottom:'10px'}}>추천 시 특별관리 기능이 있는 상품이 우선 추천됩니다.</div>
            <div style={{...gridDiv, gridTemplateColumns:'repeat(7, minmax(0, 1fr))'}}>
              {effects.map((effect,idx)=>{
                const colorList = ['#EAD0D0', '#D3AFAF', '#EDDCCF', '#F4E8E8', '#F4E8E8']
                return(
                  <PetTag padding='6px 0px' key={idx} bgColor={colorList[(idx)%5]}>{effect}</PetTag>
                )
              })}
            </div>
          </>
          :
          <></>
          }
        </div>
      </div>
      :
      <></>  
    }
      
    </div>
  )
}

export default MypagePetDetail
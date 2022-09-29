import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StyledLink } from './MypageCommon'

import DefaultProfile1 from '../../assets/img/DefaultProfile1.png'
import DefaultProfile2 from '../../assets/img/DefaultProfile2.png'
import DefaultProfile3 from '../../assets/img/DefaultProfile3.png'


const MypageHeaderCard = (props) => {
  const {user} = props
  
  const cardContainer = {
    boxSizing:'border-box',
    width: '70%',
    height:'75%',
    margin:'auto',
    padding:'2em 3.8em',
    backgroundColor:'#E6D9D3',
    borderRadius:'5px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    boxShadow: '0px 2px 2.5px rgba(0, 0, 0, 0.15)',
  }

  // 000님 반갑습니다 css
  const greeting = {
    margin:'0',
    textAlign:'left',
    fontSize:'14px',
    marginBottom:'0.5em'
  }

  // userName 폰트 사이징
  const userNameText ={
    fontSize:'17px',
    fontWeight:'500'
  }

  // 요약 카드 컨테이너
  const summaryContainer = {
    boxSizing:'border-box',
    width:'100%',
    height:'80%',
    backgroundColor:'white',
    borderRadius:'4px',
    boxShadow: '0px 1px 1.5px rgba(0, 0, 0, 0.15)',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0 5%'
  }
  
  const contentDetail = {
    fontSize: '22px',
    fontWeight: '600',
    color:'#776B62',
    width:'15%',
    textDecoration: 'none',
  }

  const detailTitle = {
    fontSize:'15px',
    fontWeight:'500',
    color: '#323232',
    marginBottom:'0.5rem',
    textAlign:'center',
    whiteSpace : 'nowrap'
  }

  const repDiv ={
    display:'grid',
    gridTemplateColumns:'repeat(3, minmax(0, 1fr))',
    gap: '7%',
    height:'auto',
    margin:'auto',
  }

  const miniProfile = {
    width:'100%',
    aspectRatio: '1 / 1',
    borderRadius:'7px',
    objectFit: 'cover'
  }

  const plusProfile = {
    width:'100%',
    height:'83%',
    borderRadius:'7px',
    margin:'0',
    backgroundColor: '#EDEDED',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: '22px',
    color:'#525252'
  }

  const detailContent = {
    height:'62px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:'2px'
  }

//  data fetching
useEffect(()=>{

})


  return (
    <div style={cardContainer}>
      <div style={greeting}><span style={userNameText}>{user.name}</span>님 반갑습니다 :)</div>
      <div style={summaryContainer}>
        {/* 배송중 */}
        <div style={contentDetail}>
          <div style={detailTitle}>배송중</div>
          <div style={detailContent}>0</div>
        </div>
        
        {/* 구독중  - 필요 데이터: 유저 아이디(중앙관리)*/}
        <Link style={contentDetail} to={'subscriptionsNow'}>
            <div style={detailTitle}>구독중</div>
            <div style={detailContent}>{user.subscriptionCnt}</div>
        </Link>
        {/* 미작성 후기  - 필요 데이터: 유저 아이디(중앙관리)*/}
        <StyledLink style={contentDetail} to={'unwrittenReviews'}>
          <div style={detailTitle}>후기 작성</div>
          <div style={detailContent}>{user.unReviewCnt}</div>
        </StyledLink >
        {/* 대표 반려견 - 필요 데이터: 펫 아이디 (prop 필요) */}
        <div style={{boxSizing:'border-box', width:'48%', borderLeft:'0.1px solid #929292', paddingLeft:'6%'}}>
          <div style={repDiv}>
            {user?.pets?.map((pet, idx)=>{
              const profileList = [DefaultProfile1, DefaultProfile2, DefaultProfile3]
              return(
                <StyledLink 
                  to={'petDetail'}
                  state= {{petId:pet.petSno}}
                  id={idx}
                >
                  { pet.image ?
                    <img style={miniProfile}  src={pet.image} alt="프로필 이미지"/> :
                    <img style={miniProfile}  src={profileList[idx]} alt="프로필 이미지"/>
                  }
                  <div style={{fontSize:'12px'}}>{pet.name}</div>
                </StyledLink >
              )
            })}
              {(user?.pets?.length < 3 ) ? 
                [...Array(3-user?.pets?.length)].map((no, idx)=>{
                  return <StyledLink 
                            to={'petAdd'}
                            state={{}}
                            style={plusProfile} id={idx}>+</StyledLink>})
                :
                <></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MypageHeaderCard
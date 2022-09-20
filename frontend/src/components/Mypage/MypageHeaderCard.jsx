import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StyledLink } from './MypageCommon'



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
    display:'flex',
    justifyContent:'space-around',
    // width: '90%',
    margin:'auto',
  }

  const miniProfile = {
    width:'62px',
    aspectRatio: '1 / 1',
    borderRadius:'3px',
    objectFit: 'cover'
  }

  const plusProfile = {
    width:'62px',
    height:'62px',
    borderRadius:'5px',
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
          <div style={detailContent}>{user.delivering}</div>
        </div>
        
        {/* 구독중  - 필요 데이터: 유저 아이디(중앙관리)*/}
        <Link style={contentDetail} to={'subscriptionsNow'}>
            <div style={detailTitle}>구독중</div>
            <div style={detailContent}>{user.subscribingCnt}</div>
        </Link>
        {/* 미작성 후기  - 필요 데이터: 유저 아이디(중앙관리)*/}
        <StyledLink style={contentDetail} to={'unwrittenReviews'}>
          <div style={detailTitle}>후기 작성</div>
          <div style={detailContent}>{user.unwrittenReviews}</div>
        </StyledLink >
        {/* 대표 반려견 - 필요 데이터: 펫 아이디 (prop 필요) */}
        <div style={{boxSizing:'border-box', width:'45%', borderLeft:'0.1px solid #929292', paddingLeft:'5%'}}>
          <div style={detailTitle}>반려견</div>
          <div style={repDiv}>
            {user.repPets?.map((pet, idx)=>{
              return(
                <StyledLink 
                  to={'petDetail'}
                  state= {{petId:pet.petId}}
                  id={idx}
                >
                  <img style={miniProfile}  src={pet.profileImg} alt="프로필 이미지"/>
                </StyledLink >
              )
            })}
              {(user.repPets.length < 3 ) ? 
                [...Array(3-user.repPets.length)].map((no, idx)=>{
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
import React from 'react'
import { StyledLink } from '../../components/Mypage/MypageCommon'
import '../../components/Mypage/MypageStyle.css'

const MypagePet = (props) => {
  const {petList} = props 


  const profile = {
    width:'100%',
    aspectRatio: '1 / 1',
    borderRadius:'3px',
    objectFit: 'cover'
  }

  const addProfile = {
    width:'100%',
    paddingTop:'100%',
    backgroundColor:'#EDEDED',
    borderRadius:'3px',
    position:'relative',
    overflow:'hidden',
  }

  const petProfile = ({pet, idx}) =>{
    
    return (
      pet ?  
        <StyledLink 
        className='hoverProfile'
        style={{display:'block', position:'relative',overflow:'hidden'}}
        to={'petDetail'}
        state= {{petId:pet.petId}} 
        id={idx}>
          <img style={profile}  src={pet.profileImg} alt="프로필 이미지"/>
          <div className='hoverBox'>{pet.name}</div>
        </StyledLink>
      :
      <StyledLink 
      className='hoverProfile'
      to={{
        pathname:'petAdd',
      }
      } 
      id={idx}>
        <div style={addProfile}><div style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%', verticalAlign:'middle'}}>+</div></div>
      </StyledLink>
    )

  } 

  const gridDiv = {
    display:'grid',
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    columnGap: '2%',
    marginTop: '10px',
    padding:'0'
  }
  
  return (
    <div style={gridDiv}>
      {petList.map((pet, idx)=>{
        return petProfile({pet, idx})
      })}
      {petProfile([],999)}
    </div>
  )
}

export default MypagePet
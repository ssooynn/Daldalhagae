import React from 'react'

const MypageHeaderCard = (props) => {
  const user = {
    name:'김김김',
    delivering:0,
    subscribingCnt: 1,
    unwrittenReviews: 2,
    repPets: [
      {
        name:'해리',
        profileImg:'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }
    ]
  }


  
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
    width:'15%'
  }

  const detailTitle = {
    fontSize:'15px',
    fontWeight:'500',
    color: '#323232',
    marginBottom:'0.7em'
  }

  const repDiv ={
    display:'flex',
    justifyContent:'space-around',
    width: '70%',
    margin:'auto'
  }

  const miniProfile = {
    width:'62px',
    aspectRatio: '1 / 1',
    borderRadius:'3px'
  }

  const plusProfile = {
    width:'62px',
    aspectRatio: '1 / 1',
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

  return (
    <div style={cardContainer}>
      <div style={greeting}><span style={userNameText}>{user.name}</span>님 반갑습니다 :)</div>
      <div style={summaryContainer}>
        {/* 배송중 */}
        <div style={contentDetail}>
          <div style={detailTitle}>배송중</div>
          <div style={detailContent}>{user.delivering}</div>
        </div>
        
        {/* 구독중 */}
        <div style={contentDetail}>
          <div style={detailTitle}>구독중</div>
          <div style={detailContent}>{user.subscribingCnt}</div>
        </div>
        {/* 미작성 후기 */}
        <div style={contentDetail}>
          <div style={detailTitle}>미작성 후기</div>
          <div style={detailContent}>{user.unwrittenReviews}</div>
        </div>
        {/* 대표 반려견 */}
        <div style={{width:'40%', borderLeft:'0.1px solid #929292'}}>
          <div style={detailTitle}>대표 반려견</div>
          <div style={repDiv}>
            {user.repPets.map((pet, idx)=>{
              return(
                <img style={miniProfile} src={pet.profileImg} alt="프로필 이미지" id={idx}/>
              )
            })}
            {(user.repPets.length === 1) ? <div style={plusProfile}>+</div>:<></>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MypageHeaderCard
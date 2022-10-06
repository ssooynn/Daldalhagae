import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const MypageRoutingTitle = (props) => {
  const params = useParams()
  const param = Object.values(params)[0]
  const navigate = useNavigate()
  const {currentFocus} = props
  console.log()

  const titleDiv = {
    width: '100%',
    textAlign:'left',
    padding: '0 0.2em 0.6em 0.1em',
    borderBottom:'0.5px solid ',
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
    color: '#1f1d1d',
    fontSize: '1.1em',
    fontWeight: '600',
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    boxSizing:'border-box'
  }


  const title = {
    '':{name:'진행 중인 구독', subText:'현재 구독 중인 상품을 확인할 수 있습니다.'},
    'subscriptionsNow':{name:'진행 중인 구독',  subText:'현재 구독 중인 상품을 확인할 수 있습니다.'},
    'subscriptionDetail':{name:'구독 상세 정보',  subText:'구독 상세 내역을 확인할 수 있습니다.'},
    'subscriptions':{name:'전체 구독', subText:'현재까지의 모든 구독 내역입니다.'},
    'unwrittenReviews':{name:'미작성 후기', subText:'후기 미작성 구독 내역입니다. 후기를 작성해주세요.'},
    'reviews':{name:'내가 작성한 후기', setting:false},
    'user':{name:'개인 정보 관리', setting:true, settingpath:'userUpdate'},
    'userUpdate':{name:'개인 정보 수정', setting:false},
    'petDetail': {name:'반려견 관리', setting:true, settingpath:'petUpdate'},
    'petUpdate':{name:'반려견 정보 수정',setting:false},
    'petAdd':{name:'반려견 등록', setting:false}
  }
  console.log(currentFocus)
  const onClickSetting = () => {
    console.log(title[param].settingpath)
    navigate(title[param].settingpath, currentFocus ? {state:currentFocus}: '');
  }

  return (
    <div style={titleDiv}>
      <div>{title[param].name}<span style={{marginLeft:'10px', fontSize:'10.5px', fontWeight:'300', color:'#929292'}}>{title[param].subText}</span></div>
      {title[param].setting ? 
        <FontAwesomeIcon icon={faGear} style={{color:'#776B62', fontSize:'18px'}} onClick={ onClickSetting }/>
        :
        <></>}
    </div>
  )
}

export default MypageRoutingTitle
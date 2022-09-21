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
    '':{name:'진행 중인 구독'},
    'subscriptionsNow':{name:'진행 중인 구독'},
    'subscriptions':{name:'전체 구독'},
    'unwrittenReviews':{name:'미작성 후기'},
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
    navigate(title[param].settingpath, currentFocus ? {state:{Id:currentFocus.val}}: '');
  }

  return (
    <div style={titleDiv}>
      {title[param].name}
      {title[param].setting ? 
        <FontAwesomeIcon icon={faGear} style={{color:'#776B62', fontSize:'18px'}} onClick={ onClickSetting }/>
        :
        <></>}
    </div>
  )
}

export default MypageRoutingTitle
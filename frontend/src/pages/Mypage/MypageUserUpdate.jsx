import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from  '../../stores/modules/user'

import { InputLayout, StyledInputBox, SmallText, MypageButton, subTitleStyle } from '../../components/Mypage/MypageCommon'
import Post from '../../components/Post'
import '../../components/Mypage/MypageStyle.css'
import { isEmail } from '../../util/EmailCheck'
import { nameCheck } from '../../util/NameCheck'
import { telCheck } from '../../util/PhoneNoCheck'
import { userInfoGet, userEdit, userDrop } from '../../api/mypageUser' 
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import '../../components/Mypage/MypageStyle.css'


const MypageUserUpdate = (props) => {
  const {setRerender, rerender} = props 
  // redux에서 아이디 꺼내서 
  const [userInfo, setUserInfo] = useState({})
  const [parseAddress, setParseAddress] = useState([])
  const [fullAddress, setFullAddress] = useState(parseAddress[0])
  const [detailAddress, setDetailAddress] = useState(parseAddress[1])
  const [postZip, setPostZip] = useState(parseAddress[2])
  const [popup, setPopup] = useState(false);
  const [phoneUpdate, setPhoneUpdate] = useState(0)
  const navigate = useNavigate()

  const usersSno = useSelector((state)=>state.user.user.user.usersSno)
  const dispatch = useDispatch()

  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1000,
    // timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  useEffect(()=>{
    userInfoGet(usersSno)
    .then((res)=>{
      setUserInfo(res.data)
      console.log(res.data)
      setParseAddress(res.data.address.split(';'))
    }) .catch((err)=>{
      console.log(err)
    })
  } ,[])

  useEffect(()=>{
    setFullAddress(parseAddress[0])
    setDetailAddress(parseAddress[1]?parseAddress[1]:'')
    setPostZip(parseAddress[2]?parseAddress[2]:'')
  },[parseAddress])


  useEffect(()=>{
    const body = document.getElementsByTagName('body')[0];
    if (popup) {
      body.classList.add('scrollLock');
    } else { 
      body.classList.remove('scrollLock');
    }

  }, [popup])


  useEffect(()=>{
    let autoHyphen = userInfo?.phone?.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ; 
    setUserInfo({
      ...userInfo,
      phone: autoHyphen?.substr(0,13)
    })
   
  }, [phoneUpdate])

  useEffect(()=>{
    setUserInfo({
      ...userInfo,
      address: fullAddress+';'+detailAddress+';'+postZip
    })
  }, [fullAddress,detailAddress,postZip])


  const handleComplete = (data) => {
    setPopup(!popup);
  }


  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name==='phone'){
      setPhoneUpdate(phoneUpdate+1)
    }
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  const onDetailAddressChange =  (e) => {
    const {value} = e.target
    setDetailAddress(value)
  }

  const onSubmit = () => {
    console.log(userInfo)
    Swal.fire({
      padding:'15px',
      text: "수정 내용을 저장하시겠습니까?",
      width:'30%',
      showCancelButton: true,
      confirmButtonColor: '#E1C4AE',
      cancelButtonColor: '#BEC3C6',
      confirmButtonText: '저장하기',
      cancelButtonText: '취소하기',
    }).then((result) => {
      if (result.isConfirmed) {
        userEdit(userInfo)
          .then((res)=>{
            console.log(res)
            setRerender(rerender+1)
            Swal.fire({
              width:'25%',
              position: "center",
              title: "🤎  저장되었습니다 :)",
              showConfirmButton: false,
              timer: 1000,
              customClass:{
                icon:'smallIcon',
                title:'midFont'
              }
            }).then(()=>{navigate('/mypage/user')})
            
          }).catch((err)=>{console.log(err)})
      }
    })
  }

  const onWithdraw = (e) =>{
    e.preventDefault()
    Swal.fire({
      title: "정말 탈퇴하시겠어요? &#128546",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#A9ACB1',
      cancelButtonColor: '#AC998A',
      confirmButtonText: '탈퇴하기',
      cancelButtonText: '취소하기',
      focusConfirm:false,
      focusCancel:true,
      customClass:{
        title:'midFont'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        userDrop({usersSno}).then((res)=>{
          console.log(res)
          dispatch(
            setUser({
              token: "",
            })
          );
          navigate('/')
          Swal.fire({
            width:'25%',
            position: "center",
            title: "탈퇴되었습니다!! \n언제든 재가입해주세요 :)",
            showConfirmButton: false,
            timer: 1500,
            customClass:{
              icon:'smallIcon',
              title:'midFont'
            }
          })
        })
        
  }}) } 

  const gridDiv = {
    display:'grid',
    gridTemplateColumns:'repeat(5, minmax(0, 1fr))',
    gap: '2%',
    marginBottom: '7px'
  }


  return (
    <div style={{padding:'5px 15px'}}>
      <div style={subTitleStyle}>기본정보</div>
      <div style={gridDiv}>
        <InputLayout label='이름' value={userInfo.name} span='span 2' onChange={onInputChange} name='name'></InputLayout>
      </div>
      <div style={{...gridDiv, marginBottom:'50px'}}>
        <InputLayout label='전화번호' onChange={onInputChange} value={userInfo?.phone} span='span 2' name='phone'></InputLayout>
        <InputLayout label='이메일' onChange={onInputChange} value={userInfo.email} span='span 3' name='email'></InputLayout>
      </div>

      <div style={subTitleStyle}>배송지 정보</div>
      <SmallText>주소</SmallText>
      <div style={{...gridDiv}}>
        <StyledInputBox value={fullAddress? fullAddress+',  '+postZip : ''} name='address' span='span 4' disabled={true}></StyledInputBox>
        <MypageButton onClick={handleComplete} height='100%'>주소 검색</MypageButton>
      </div>
      <StyledInputBox value={detailAddress} name='addressDetail' onChange={onDetailAddressChange}></StyledInputBox>
      <MypageButton padding='12px' fontSize='16px' color='#E6D9D3' margin='30px 0px 10px' onClick={onSubmit}>수정 완료</MypageButton>
      <div style={{width:'100%', textAlign:'end', color:'#929292', cursor:'pointer', fontSize:'14px'}} onClick={onWithdraw}>회원 탈퇴</div>
      {popup && <Post setPopup={setPopup} setPostZip={setPostZip} setFullAddress={setFullAddress} setDetailAddress={setDetailAddress}></Post>}
      
    </div>
  )
}

export default MypageUserUpdate
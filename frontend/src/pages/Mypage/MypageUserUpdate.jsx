import React, { useEffect, useState } from 'react'
import { FlexBox, InputLayout, StyledInputBox, SmallText, MypageButton, subTitleStyle } from '../../components/Mypage/MypageCommon'
import Post from '../../components/Post'
import '../../components/Mypage/MypageStyle.css'
import { isEmail } from '../../util/EmailCheck'
import { nameCheck } from '../../util/NameCheck'
import { telCheck } from '../../util/PhoneNoCheck'
import { userInfo, userEdit } from '../../api/mypageUser' 
import Swal from 'sweetalert2'


const MypageUserUpdate = () => {
  // redux에서 아이디 꺼내서 
  const [user, setUser] = useState({})
  const [parseAddress, setParseAddress] = useState([])
  const [fullAddress, setFullAddress] = useState(parseAddress[0])
  const [detailAddress, setDetailAddress] = useState(parseAddress[1])
  const [postZip, setPostZip] = useState(parseAddress[2])
  const [popup, setPopup] = useState(false);
  const [phoneUpdate, setPhoneUpdate] = useState(0)

  useEffect(()=>{
    const userSno = 'uXJFRDEC7DuyYasedNxU1'
    userInfo(userSno)
    .then((res)=>{
      setUser(res.data)
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
    let autoHyphen = user?.phone?.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ; 
    console.log(autoHyphen)
    setUser({
      ...user,
      phone: autoHyphen?.substr(0,13)
    })
   
  }, [phoneUpdate])

  useEffect(()=>{
    setUser({
      ...user,
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
    setUser({
      ...user,
      [name]: value,
    });
  }

  const onDetailAddressChange =  (e) => {
    const {value} = e.target
    setDetailAddress(value)
  }

  const onSubmit = () => {
    console.log(user)
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
        userEdit(user)
          .then((res)=>{
            Swal.fire({
              position: "center",
              icon: "success",
              title: "저장성공!",
              showConfirmButton: false,
              timer: 1500,
            });
            
          }).catch((err)=>{console.log(err)})
      }
    })
  }

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
        <InputLayout label='이름' value={user.name} span='span 2' onChange={onInputChange} name='name'></InputLayout>
      </div>
      <div style={{...gridDiv, marginBottom:'50px'}}>
        <InputLayout label='전화번호' onChange={onInputChange} value={user?.phone} span='span 2' name='phone'></InputLayout>
        <InputLayout label='이메일' onChange={onInputChange} value={user.email} span='span 3' name='email'></InputLayout>
      </div>

      <div style={subTitleStyle}>배송지 정보</div>
      <SmallText>주소</SmallText>
      <div style={{...gridDiv}}>
        <StyledInputBox value={fullAddress? fullAddress+',  '+postZip : ''} name='address' span='span 4' disabled={true}></StyledInputBox>
        <MypageButton onClick={handleComplete} height='100%'>주소 검색</MypageButton>
      </div>
      <StyledInputBox value={user.addressDetail} name='addressDetail' onChange={onDetailAddressChange}></StyledInputBox>
      <MypageButton padding='12px' fontSize='16px' color='#E6D9D3' margin='35px 0px' onClick={onSubmit}>수정 완료</MypageButton>
      {popup && <Post setPopup={setPopup} setPostZip={setPostZip} setFullAddress={setFullAddress} setDetailAddress={setDetailAddress}></Post>}
      
    </div>
  )
}

export default MypageUserUpdate
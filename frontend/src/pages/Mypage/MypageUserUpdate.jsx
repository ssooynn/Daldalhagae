import React, { useEffect, useState } from 'react'
import { FlexBox, InputLayout, StyledInputBox, SmallText, MypageButton, subTitleStyle } from '../../components/Mypage/MypageCommon'
import Post from '../../components/Post'
import '../../components/Mypage/MypageStyle.css'
import { isEmail } from '../../util/EmailCheck'
import { nameCheck } from '../../util/NameCheck'
import { telCheck } from '../../util/PhoneNoCheck'

const MypageUserUpdate = (props) => {
  const [user, setUser] = useState(props.user)
  console.log(user)
  const [fullAddress, setFullAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState('')
  const [postZip, setPostZip] = useState('')
  const [popup, setPopup] = useState(false);

  useEffect(()=>{
    const body = document.getElementsByTagName('body')[0];
    if (popup) {
      body.classList.add('scrollLock');
    } else { 
      body.classList.remove('scrollLock');
    }

  }, [popup])


  useEffect(()=>{
    let autoHyphen = user.phoneNo.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ; 
    setUser({
      ...user,
      phoneNo: autoHyphen
    })
  }, [user.phoneNo])


  const handleInput = (e) => {

  }

  const handleComplete = (data) => {
    setPopup(!popup);
  }


  const onInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
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
      <div style={{...gridDiv, marginBottom:'35px'}}>
        <InputLayout label='전화번호' onChange={onInputChange} value={user.phoneNo} span='span 2' name='phoneNo'></InputLayout>
        <InputLayout label='이메일' onChange={onInputChange} value={user.email} span='span 3' name='email'></InputLayout>
      </div>

      <div style={subTitleStyle}>배송지 정보</div>
      <SmallText>주소</SmallText>
      <div style={{...gridDiv}}>
        <StyledInputBox value={fullAddress? fullAddress+',  '+postZip : ''} name='address' span='span 4' disabled={true}></StyledInputBox>
        <FlexBox span='span 1' align='end'>
          <MypageButton onClick={handleComplete} >주소 검색</MypageButton>
        </FlexBox>
      </div>
      <StyledInputBox value={user.addressDetail} name='addressDetail' onChange={onInputChange}></StyledInputBox>
      <MypageButton padding='12px' fontSize='16px' color='#E6D9D3' margin='35px 0px'>수정 완료</MypageButton>
      {popup && <Post setPopup={setPopup} setPostZip={setPostZip} setFullAddress={setFullAddress} setDetailAddress={setDetailAddress}></Post>}
      
    </div>
  )
}

export default MypageUserUpdate
import React, { useEffect, useState } from 'react'
import { FlexBox, InputLayout, StyledInputBox, SmallText, AddressButton } from '../../components/Mypage/MypageCommon'
import Post from '../../components/Post'
import '../../components/Mypage/MypageStyle.css'

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
    let autoHyphen = user.phoneNo.replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
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
    marginBottom: '5px'
  }


  return (
    <div>
      <div>기본정보</div>
      <div style={gridDiv}>
        <InputLayout label='이름' value={user.name} span='span 2' onChange={onInputChange} name='name'></InputLayout>
      </div>
      <div style={gridDiv}>
        <InputLayout label='전화번호' onChange={onInputChange} value={user.phoneNo} span='span 2' name='phoneNo'></InputLayout>
        <InputLayout label='이메일' onChange={onInputChange} value={user.email} span='span 3' name='email'></InputLayout>
      </div>

      <div>배송지 정보</div>
        <SmallText>주소</SmallText>
        <div style={{...gridDiv}}>
          <StyledInputBox value={fullAddress? fullAddress+',  '+postZip : ''} name='address' span='span 4' disabled={true}></StyledInputBox>
          <FlexBox span='span 1' align='end'>
            <AddressButton onClick={handleComplete}>주소 검색</AddressButton>
          </FlexBox>
        </div>
        <StyledInputBox value={user.addressDetail} name='addressDetail' onChange={onInputChange}></StyledInputBox>
        {popup && <Post setPopup={setPopup} setPostZip={setPostZip} setFullAddress={setFullAddress} setDetailAddress={setDetailAddress}></Post>}
        

    </div>
  )
}

export default MypageUserUpdate
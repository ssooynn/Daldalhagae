import React, { useEffect, useState } from 'react'
import { FlexBox, InputLayout, StyledInputBox, SmallText, MypageButton, subTitleStyle } from '../../components/Mypage/MypageCommon'
import Post from '../../components/Post'
import '../../components/Mypage/MypageStyle.css'
import { isEmail } from '../../util/EmailCheck'
import { nameCheck } from '../../util/NameCheck'
import { telCheck } from '../../util/PhoneNoCheck'

const MypageUserUpdate = () => {
  // redux에서 아이디 꺼내서 
  const [user, setUser] = useState({
    usersSno : 'adsfasdf',
    kakaoId : 'adsfdsf',
    email: 'email@gmail.com',
    name: '김김김',
    phone: '010-9123-2423',
    address: '광교호수공원로 277;1110-1299048;01678' 
    })
  console.log(user)
  const parseAddress = user.address.split(';')
  const [fullAddress, setFullAddress] = useState(parseAddress[0])
  const [detailAddress, setDetailAddress] = useState(parseAddress[1])
  const [postZip, setPostZip] = useState(parseAddress[2])
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
    let autoHyphen = user?.phone.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") ; 
    setUser({
      ...user,
      phoneNo: autoHyphen
    })
  }, [user?.phone])

  useEffect(()=>{
    setUser({
      ...user,
      address: fullAddress+';'+detailAddress+';'+postZip
    })
  }, [fullAddress,detailAddress,postZip])


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

  const onDetailAddressChange =  (e) => {
    const {value} = e.target
    setDetailAddress(value)
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
        <FlexBox span='span 1' align='end'>
          <MypageButton onClick={handleComplete} >주소 검색</MypageButton>
        </FlexBox>
      </div>
      <StyledInputBox value={user.addressDetail} name='addressDetail' onChange={onDetailAddressChange}></StyledInputBox>
      <MypageButton padding='12px' fontSize='16px' color='#E6D9D3' margin='35px 0px'>수정 완료</MypageButton>
      {popup && <Post setPopup={setPopup} setPostZip={setPostZip} setFullAddress={setFullAddress} setDetailAddress={setDetailAddress}></Post>}
      
    </div>
  )
}

export default MypageUserUpdate
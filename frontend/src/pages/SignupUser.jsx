import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledButton, StyledInput, StyledText } from '../components/CommonComponent'
import { FlexBox } from '../components/MainComponent'
import SignupPost from '../components/SignupPost'

const SignupUser = (props) => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [fullAddress, setFullAddress] = useState('')
  const [detailAddress, setDetailAddress] = useState("");
  const [postZip, setPostZip] = useState("");
  const [popup, setPopup] = useState(false);

  // 모두 동의 완료시 다음 단계로 이동
  function NextStep() {
    if (name && phoneNum && email && fullAddress && detailAddress && postZip) {
      props.setUser({
        name: name,
        phoneNum: phoneNum,
        email: email,
        fullAddress: fullAddress,
        detailAddress: detailAddress,
        postZip: postZip,
      });
      Navigate("/signup/signupPet");
      props.setStep(3);
    } else {
      alert("모든 정보를 기입해주세요.")
    }
  }

  // 모두 동의 완료시 다음 단계로 이동
  function PreviousStep() {
    props.setStep(1);
    Navigate(-1);
  }

  useEffect(() => {
    setName(props.user.name);
    setPhoneNum(props.user.phoneNum);
    setEmail(props.user.email);
    setFullAddress(props.user.fullAddress);
    setDetailAddress(props.user.detailAddress);
    setPostZip(props.user.postZip);
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let autoHyphen = phoneNum.replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    setPhoneNum(autoHyphen);
  }, [phoneNum])

  return (
    <FlexBox direction="column" justify="space-between" align="center" width="70%">

      <FlexBox direction="row" justify="space-between">
        <StyledText size="16px" weight="400">이름</StyledText>
        <StyledInput onChange={(e) => { setName(e.target.value); console.log(name) }} value={name} />
      </FlexBox>

      <FlexBox direction="row" justify="space-between">
        <StyledText size="16px" weight="400">전화번호</StyledText>
        <StyledInput onChange={(e) => { setPhoneNum(e.target.value); console.log(phoneNum) }} value={phoneNum} />
      </FlexBox>

      <FlexBox direction="row" justify="space-between">
        <StyledText size="16px" weight="400">이메일</StyledText>
        <StyledInput onChange={(e) => { setEmail(e.target.value); console.log(email) }} value={email} />
      </FlexBox>

      <FlexBox direction="row" justify="space-between">
        <StyledText size="16px" weight="400">주소</StyledText>
        <StyledButton searchaddress="true" onClick={(e) => setPopup(!popup)}>주소지 검색</StyledButton>
      </FlexBox>

      <FlexBox direction="column" justify="start" align="center">
        <StyledInput value={fullAddress ? fullAddress + ',  ' + postZip : ""} width="90%" placeholder="주소" readOnly />
        <StyledInput onChange={(e) => { setDetailAddress(e.target.value) }} value={detailAddress} width="90%" margin="10px 5px" placeholder="상세주소" />
      </FlexBox>

      {popup && <SignupPost setPopup={setPopup} setPostZip={setPostZip} setFullAddress={setFullAddress} setDetailAddress={setDetailAddress}></SignupPost>}
      <FlexBox direction="row" justify="space-around">
        <StyledText size="12px" weight="400" onClick={(e) => PreviousStep()}>뒤로 돌아가기</StyledText>
        <StyledButton nextbutton onClick={(e) => NextStep()}>다음</StyledButton>
      </FlexBox>
    </FlexBox >
  )
}

export default SignupUser
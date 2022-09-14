import React from 'react'
import Main1 from "../assets/img/Main1.png";
import { StyledButton, StyledText } from '../components/CommonComponent';
import { FlexBox, MainContent } from '../components/MainComponent';
import { useSpring, animated } from '@react-spring/web';



export default function Main() {
  return (
    <div style={{ height: "100vh", scrollSnapType: "y mandatory", overflowY: "scroll" }}>

      <MainContent direction="row" justify="space-around" style={{ backgroundImage: `url(${Main1})`, backgroundSize: "cover" }}>
        <FlexBox></FlexBox>
        <FlexBox direction="column" margin="10px 10px 10px 300px">
          <StyledText weight="300" size="28px">항상 똑같은 반려견 용품</StyledText>
          <FlexBox>
            <StyledText weight="300" size="32px">바꾸고 싶다면</StyledText>
            <StyledText weight="600" size="34px" margin="10px 4px">달달하개</StyledText>
          </FlexBox>
          <StyledButton SmallWhite margin="50px 5px">지금 시작하기</StyledButton>
        </FlexBox>
      </MainContent>
      <MainContent style={{ backgroundColor: "#FFF2E5" }}>
        test
      </MainContent>
      <MainContent style={{ backgroundColor: "#FFFefe" }}>
        test
      </MainContent>
      <MainContent style={{ backgroundColor: "#e7d4c5" }}>
        test
      </MainContent>
    </div>
  )
}

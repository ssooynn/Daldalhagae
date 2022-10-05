import React from 'react'
// eslint-disable-next-line
import { FlexBox } from './MainComponent'
import styled from "styled-components";
import { StyledText } from './CommonComponent';
const Foot = styled.div`
    width : 100%;
    min-height : 20%;
    background-color: #EDDCCF;
    color:#767676;
    font-weight: 500;
    padding:0.5%;
    display: flex;
    justify-content: center;
    box-sizing:border-box;
    `

export default function Footer({ ...props }) {
  return (
    <Foot {...props}>
      <FlexBox direction="column" align="flex-start" justify="center">
        <StyledText size="20px" margin="10px 30px 1px 30px">(주) 달달하개</StyledText>
        <FlexBox direction="column" align="flex-start">
          <StyledText size="12px" margin="3px 20px">상호명 : (주) 달달하개 대표이사 : 김연준</StyledText>
          <StyledText size="12px" margin="3px 20px">A302조 김연준 배한빈 이아현 이수연 이경무 이준경</StyledText>
          <StyledText size="12px" margin="3px 20px">달달하개는 반려견 용품 구독 서비스로 아이의 상태와 기호에 맞추어 제품을 맞춤 추천드리는 서비스입니다.</StyledText>
          <StyledText size="12px" margin="3px 20px">Copyright 2022. SSAFYA302, Co., Ltd. All rights reserved</StyledText>
          <StyledText size="12px" margin="30px 20px 3px">* 달달하개는 SSAFY 팀 프로젝트물로, 실 서비스되지 않고 일체 수익성 활동을 진행하지 않습니다.</StyledText>
        </FlexBox>
      </FlexBox>
    </Foot>
  )
}

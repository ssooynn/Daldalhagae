import React from 'react'
// eslint-disable-next-line
import { FlexBox } from './MainComponent'
import styled from "styled-components";
import { StyledText } from './CommonComponent';
const Foot = styled.div`
    width : 99%;
    min-height : 20%;
    background-color: #EDDCCF;
    color:#767676;
    font-weight: 500;
    padding:0.5%;
    `

export default function Footer({ ...props }) {
  return (
    <Foot {...props}>
      <FlexBox direction="column" align="flex-start">
        <StyledText size="20px" margin="10px 30px 1px 30px">(주) 달달하개</StyledText>
        <FlexBox direction="row" justify="flex-start" margin="2px 20px">
          <StyledText size="14px">고객후기</StyledText>
          <StyledText size="14px">상품목록</StyledText>
          <StyledText size="14px">공지사항</StyledText>
          <StyledText size="14px">입점신청 문의</StyledText>
        </FlexBox>
        <FlexBox direction="column" align="flex-start">
          <StyledText size="12px" margin="3px 20px">상호명 : (주) 달달하개 대표이사 : 김연준</StyledText>
          <StyledText size="12px" margin="3px 20px">A302조 김연준 배한빈 이아현 이수연 이경무 이준경</StyledText>
          <StyledText size="12px" margin="3px 20px">달달하개는 반려견 용품 구독 서비스로 아이의 상태와 기호에 맞추어 제품을 맞춤 추천드리는 서비스입니다.</StyledText>
          <StyledText size="12px" margin="3px 20px">Copyright 2014. bucketplace, Co., Ltd. All rights reserved</StyledText>
        </FlexBox>
      </FlexBox>
    </Foot>
  )
}

import React from "react";
import {
  StyledButton,
  StyledProfile,
  StyledText,
} from "../components/CommonComponent";
import { FlexBox } from "../components/MainComponent";
import petProfile from "../assets/img/pet.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignupBox = styled.div`
  width: 30%;
  height: auto;
  padding: 30px 30px 20px 30px;
  border: 2px solid rgba(204, 170, 144, 0.3);
  border-radius: 10px;
  margin: 50px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
`;

export default function SignupPet(props) {
  const Navigate = useNavigate();
  function GoRegisterPetPage() {
    Navigate("/signup/signupRegisterPet");
  }
  return (
    <SignupBox>
      <FlexBox direction="row">
        <StyledText size="24px" weight="500">
          회원가입
        </StyledText>
      </FlexBox>
      <FlexBox
        direction="column"
        justify="space-between"
        align="center"
        width="70%"
      >
        <FlexBox direction="row" justify="space-between">
          <StyledText size="16px" weight="400">
            반려견 등록
          </StyledText>
          <FlexBox
            direction="row"
            justify="flex-end"
            width="auto"
            align="start"
          >
            <StyledText
              size="16px"
              weight="300"
              color="red"
              margin="0px 3px 0px 0px"
            >
              *
            </StyledText>
            <StyledText size="12px" weight="300" margin="0px">
              {" "}
              최대 3마리까지 등록할 수 있어요.
            </StyledText>
          </FlexBox>
        </FlexBox>
        <FlexBox
        direction="row"
        justify="space-between"
          width="100%"
          align="center"
          margin="20px 0px"
        >
          <StyledProfile
            src={petProfile}
            height="100px"
            width="100px"
            ></StyledProfile>
          <FlexBox direction="row" justify="flex-end" align="start" width="60%">
            <FlexBox
              direction="column"
              justify="space-around"
              margin="0px"
              align="flex-start"
            >
              <StyledText size="16px" weight="500" margin="5px 0px">
                이름
              </StyledText>
              <StyledText size="16px" weight="500" margin="5px 0px">
                생년월일
              </StyledText>
            </FlexBox>
            <FlexBox
              direction="column"
              justify="space-around"
              margin="0px"
              align="flex-start"
            >
              <StyledText size="16px" weight="500" margin="5px 0px">
                해리
              </StyledText>
              <StyledText size="16px" weight="500" margin="5px 0px">
                2022.04.05
              </StyledText>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          direction="row"
          justify="center"
          align="center"
          width="100px"
          height="100px"
          margin="20px 7px"
          style={{
            backgroundColor: "#ededed",
            borderRadius: "10px",
            alignSelf: "flex-start",
          }}
        >
          {/* 등록한 펫이 3마리보다 적으면 + 버튼 보여줌 */}
          {props.pets.length < 3 && (
            <StyledText
              size="32px"
              weight="400"
              margin="5px 0px"
              color="#525252"
              onClick={GoRegisterPetPage}
              style={{ cursor: "pointer" }}
            >
              +
            </StyledText>
          )}
        </FlexBox>
        <FlexBox direction="row" justify="space-around">
          <StyledText size="12px" weight="400">
            뒤로 돌아가기
          </StyledText>
          <StyledButton nextbutton>회원가입</StyledButton>
        </FlexBox>
      </FlexBox>
    </SignupBox>
  );
}

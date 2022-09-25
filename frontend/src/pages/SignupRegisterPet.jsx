import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton, StyledInput, StyledProfile, StyledText } from "../components/CommonComponent";
import { FlexBox } from "../components/MainComponent";
import Dog1 from "../assets/img/siberian-husky.png";
import CameraIcon from "../assets/img/CameraIcon.svg";
import BCS1 from "../assets/img/BCS1.png";
import BCS2 from "../assets/img/BCS2.png";
import BCS3 from "../assets/img/BCS3.png";
import BCS4 from "../assets/img/BCS4.png";
import BCS5 from "../assets/img/BCS5.png";
import { useNavigate } from "react-router-dom";

const SignupBox = styled.div`
  width: 50%;
  height: auto;
  padding: 30px 30px 20px 30px;
  border: 2px solid rgba(204, 170, 144, 0.3);
  border-radius: 10px;
  margin: 50px 0px 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 850px;
`;

const StyledBCS = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
`;

export default function SignupRegisterPet(props) {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [effectsOpen, setEffectsOpen] = useState(false);
  const [alergyList, setAlergyList] = useState(["오리", "연어", "양", "쌀", "곡물", "고구마", "칠면조", "기타", "과일/야채", "소", "닭", "생선/해조류", "사슴", "밀", "돼지", "참치", "치즈/유제품", "북어"]);
  const [profile, setProfile] = useState("");
  const [effectsList, setEffectsList] = useState([
    "피모관리",
    "저알러지",
    "면역력강화",
    "눈건강",
    "항산화",
    "종합비타민",
    "소화개선",
    "영양공급",
    "식욕증진(기호성)",
    "다이어트/중성화",
    "처방식",
    "체중유지",
    "관절강화",
    "냄새제거",
    "심장건강",
    "두뇌발달",
    "구강관리",
    "인도어",
    "치석제거",
    "세정효과",
    "퍼포먼스",
    "분리불안해소",
    "스트레스완화",
    "유리너리(비뇨계)",
    "호흡기관리",
    "식변증",
    "음수량증진",
    "신장/요로",
    "결석예방",
    "보습",
    "해충방지",
  ]);
  const [selectedTag, setSeletedTag] = useState([]);
  const [selectedEffect, setSelectedEffect] = useState([]);

  const [bcs, setBcs] = useState(0);

  // 모두 동의 완료시 다음 단계로 이동
  function PreviousStep() { }

  function RegisterPet() {
    //     {image:"",
    // name:"",
    // birth:"",
    // target:"",
    // materials:[],
    // effects:[],
    // fat:""}
    var id = 0;
    console.log(props.pets);
    if (props.pets === undefined) {
      id = 1;
    } else {
      id = props.pets.length + 1;
    }
    console.log({
      id: id,
      image: profile,
      name: name,
      birth: birth,
      target: "",
      materials: selectedTag,
      effects: selectedEffect,
      fat: bcs,
    });
    props.setPets([
      ...props.pets,
      {
        id: id,
        image: profile,
        name: name,
        birth: birth,
        target: "",
        materials: selectedTag,
        effects: selectedEffect,
        fat: bcs,
      },
    ]);
    Navigate("/signup/signupPet");
  }

  const WantUpdateProfile = (e) => {
    let file = e.target.files[0];
    let fileURL;
    let reader = new FileReader();
    reader.onload = () => {
      fileURL = reader.result;
      setProfile(fileURL);
    }
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    //    UpdateProfileImgApi(
    //      formData,
    //      (res) => {
    //        console.log(res);
    //        getInfo();
    //      },
    //      (err) => {
    //        console.log(err);
    //      }
    //    );
  };


  const selectTag = () => {
    setSeletedTag(
      selectedTag.sort(function (a, b) {
        return a - b;
      })
    );
    for (let index = 0; index < selectedTag.length; index++) {
      selectedTag[index]++;
    }
    const data = selectedTag;
  };

  return (
    <SignupBox>
      <FlexBox direction="row">
        <StyledText size="24px" weight="500">
          반려견 정보 등록
        </StyledText>
      </FlexBox>
      <FlexBox direction="column" justify="space-between" align="center" width="80%">
        {/* 프로필 + 이름 / 생년월일 */}
        <FlexBox direction="row" justify="space-between">
          <StyledProfile src={profile === "" ? Dog1 : profile} height="120px" width="120px"></StyledProfile>
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              paddingLeft: "90px",
              paddingTop: "80px",
            }}
          >
            <label htmlFor="image">
              <img src={CameraIcon} alt="프로필 편집" />
            </label>
            <input
              id="image"
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={(e) => WantUpdateProfile(e)}
              style={{
                display: "none",
              }}
            />
          </div>

          <FlexBox direction="row" justify="end" align="center">
            <FlexBox direction="column" align="start" width="150px">
              <StyledText size="16px" weight="400">이름</StyledText>
              <StyledText size="16px" weight="400">
                생년월일
              </StyledText>
            </FlexBox>
            <FlexBox direction="column" align="end" width="300px">
              <StyledInput onChange={(e) => { setName(e.target.value); }}
                value={name}
              />
              <StyledInput
                onChange={(e) => {
                  setBirth(e.target.value);
                }}
                value={birth}
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>

        {/* 알러지 태그 리스트 부분 */}
        <StyledText size="16px" weight="500" style={{ alignSelf: "flex-start" }}>
          알러지{" "}
        </StyledText>

        <FlexBox direction="row" justify="start" style={{ flexWrap: "wrap", padding: "6px 10px" }}>
          {alergyList.map((item, idx) => (
            <StyledButton
              key={idx}
              onClick={() => {
                !selectedTag.includes(idx) ? setSeletedTag((selectedTag) => [...selectedTag, idx]) : setSeletedTag(selectedTag.filter((Button) => Button !== idx));
              }}
              tagGray={!selectedTag.includes(idx) ? true : false}
              tagSelected={selectedTag.includes(idx) ? true : false}
              style={{
                margin: "6px 3px ",
                flex: "1 1 11%",
                wordWrap: "break-word",
                maxWidth: "13%",
                padding: "5px 3px",
              }}
            >
              {item}
            </StyledButton>
          ))}
        </FlexBox>

        {/* 비만도 */}
        <FlexBox direction="row" justify="space-between">
          <StyledText size="16px" weight="500">
            비만도
          </StyledText>
          <StyledText size="12px" weight="400">
            반려견의 모습과 가장 유사한 그림을 선택해주세요.
          </StyledText>
        </FlexBox>
        <FlexBox direction="row" justify="space-between">
          <FlexBox direction="column" justify="center" align="center" onClick={(e) => setBcs(1)}>
            <StyledBCS
              src={BCS1}
              alt="야윈체중"
              style={{
                border: `${bcs === 1 ? "2px solid #eddccf" : "2px solid white"}`,
              }}
            ></StyledBCS>
            <StyledText size="13px" weight="500">
              야윈 체중
            </StyledText>
          </FlexBox>

          <FlexBox direction="column" justify="center" align="center" onClick={(e) => setBcs(2)}>
            <StyledBCS
              src={BCS2}
              alt="저체중"
              style={{
                border: `${bcs === 2 ? "2px solid #eddccf" : "2px solid white"}`,
              }}
            ></StyledBCS>
            <StyledText size="13px" weight="500">
              저체중
            </StyledText>
          </FlexBox>

          <FlexBox direction="column" justify="center" align="center" onClick={(e) => setBcs(3)}>
            <StyledBCS
              src={BCS3}
              alt="정상체중"
              style={{
                border: `${bcs === 3 ? "2px solid #eddccf" : "2px solid white"}`,
              }}
            ></StyledBCS>
            <StyledText size="13px" weight="500">
              정상체중
            </StyledText>
          </FlexBox>

          <FlexBox direction="column" justify="center" align="center" onClick={(e) => setBcs(4)}>
            <StyledBCS
              src={BCS4}
              alt="과체중"
              style={{
                border: `${bcs === 4 ? "2px solid #eddccf" : "2px solid white"}`,
              }}
            ></StyledBCS>
            <StyledText size="13px" weight="500">
              과체중
            </StyledText>
          </FlexBox>

          <FlexBox direction="column" justify="center" align="center" onClick={(e) => setBcs(5)}>
            <StyledBCS
              src={BCS5}
              alt="비만"
              style={{
                border: `${bcs === 5 ? "2px solid #eddccf" : "2px solid white"}`,
              }}
            ></StyledBCS>
            <StyledText size="13px" weight="500">
              비만
            </StyledText>
          </FlexBox>
        </FlexBox>

        {/* 효능 태그 리스트 부분 */}
        <FlexBox direction="row" justify="space-between" align="end">
          <StyledButton XSmallBrown onClick={(e) => setEffectsOpen(!effectsOpen)}>
            사료 기능 선택하기
          </StyledButton>
          {/* <StyledText
            size="13px"
            weight="500"
            onClick={(e) => setEffectsOpen(!effectsOpen)}
          >
            열기 ▼
          </StyledText> */}
        </FlexBox>
        {effectsOpen && (
          <FlexBox direction="row" justify="start" style={{ flexWrap: "wrap", padding: "6px 10px" }}>
            {effectsList.map((item, idx) => (
              <StyledButton
                key={idx}
                onClick={() => {
                  !selectedEffect.includes(idx) ? setSelectedEffect((selectedEffect) => [...selectedEffect, idx]) : setSelectedEffect(selectedEffect.filter((Button) => Button !== idx));
                }}
                tagGray={!selectedEffect.includes(idx) ? true : false}
                tagSelected={selectedEffect.includes(idx) ? true : false}
                style={{
                  margin: "6px 3px ",
                  flex: "1 1 15%",
                  wordWrap: "break-word",
                  maxWidth: "15%",
                  padding: "5px 3px",
                }}
              >
                {item}
              </StyledButton>
            ))}
          </FlexBox>
        )}
        <StyledText size="12px" weight="400" onClick={(e) => PreviousStep()} style={{ alignSelf: "flex-start" }}>뒤로 돌아가기</StyledText>
        <FlexBox direction="row" justify="space-around">
          <StyledButton nextbutton style={{ width: "200px", height: "45px" }} onClick={(e) => RegisterPet()}>등록</StyledButton>
        </FlexBox>
      </FlexBox>
    </SignupBox>
  );
}

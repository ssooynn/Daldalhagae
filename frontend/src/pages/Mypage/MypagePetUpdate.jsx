import React, { useState } from "react";
import { useSelector } from 'react-redux'

import styled from "styled-components";
import { StyledButton, StyledInput, StyledProfile, StyledText } from "../../components/CommonComponent";
import { FlexBox } from "../../components/MainComponent";
import Dog1 from "../../assets/img/siberian-husky.png";
import CameraIcon from "../../assets/img/CameraIcon.svg";
import BCS1 from "../../assets/img/BCS1.png";
import BCS2 from "../../assets/img/BCS2.png";
import BCS3 from "../../assets/img/BCS3.png";
import BCS4 from "../../assets/img/BCS4.png";
import BCS5 from "../../assets/img/BCS5.png";
import calendarButton from "../../assets/img/calendar.png";

import { useLocation, useNavigate } from "react-router-dom";
import { Calendar } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect } from "react";

import Swal from "sweetalert2"
import { petInfo, petAdd, petEdit } from "../../api/mypagePet";
import { mypageMain } from '../../api/mypageUser'



const SignupBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 30px 30px 20px 30px;
  border: 2px solid rgba(204, 170, 144, 0.3);
  border-radius: 10px;
  margin: 30px 0px 30px ;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
    -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const StyledBCS = styled.img`
width: 100px;
height: 100px;
border-radius: 5px;
`;

export default function MypagePetUpdate(props) {
  const {setRerender, rerender, pets} = props
  const navigate = useNavigate();
  const location = useLocation()
  const usersSno = useSelector((state)=>state.user.user.user?.usersSno)


  const [effectsOpen, setEffectsOpen] = useState(false);
  const [locale, ] = React.useState("ko");
  const [date, setDate] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);

// eslint-disable-next-line
  const [alergyList, setAlergyList] = useState(["??????", "??????", "???", "???", "??????", "?????????", "?????????", "??????", "??????/??????", "???", "???", "??????/?????????", "??????", "???", "??????", "??????", "??????/?????????", "??????"]);
  const [profile, setProfile] = useState("");
  const [image,setImage] = useState("");
  const [effectsList, setEffectsList] = useState([
    "????????????",
    "????????????",
    "???????????????",
    "?????????",
    "?????????",
    "???????????????",
    "????????????",
    "????????????",
    "????????????(?????????)",
    "????????????/?????????",
    "?????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "????????????",
    "?????????",
    "????????????",
    "????????????",
    "????????????",
    "??????????????????",
    "??????????????????",
    "????????????(?????????)",
    "???????????????",
    "?????????",
    "???????????????",
    "??????/??????",
    "????????????",
    "??????",
    "????????????",
  ]);
  const [selectedTag, setSeletedTag] = useState([]);
  const [selectedEffect, setSelectedEffect] = useState([]);
  const [bcs, setBcs] = useState(0);
  const [pet, setPet] = useState({
    usersSno : usersSno,
    targetNo : 1,
    name : '',
    birth : '', 
    fat : 0,
    materials : [], 
    effects : [],
    image : '',
    imageFlag:0,
  })

  useEffect(()=>{
    const path = location.pathname
    console.log(path)
    if (path === '/mypage/petAdd'){
      console.log(pets, 'p')
      mypageMain(usersSno).then((res)=>{
        if (res.data.pets?.length >= 3){
          Swal.fire({
            position: "center",
            icon: "error",
            title: "???????????? 3??????????????? ????????????????????? ",
            showConfirmButton: false,
            timer: 1500,
            customClass:{
              title:'midFont'
            }
          });
          navigate("/mypage");
        }
      })
      setProfile('')
      setSelectedEffect([])
      setSeletedTag([])
      setImage('')
      setBcs(0)
    } else if (path==='/mypage/petUpdate'){
      const petId = location.state?.val
      console.log(petId)
      if (!petId) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "????????? ???????????????.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/mypage");
      } else {
        petInfo(petId)
        .then((res)=>{
          let month = res.data.pets.birth[1]
          if (month<10){
            month = '0' + month
          }

          let day = res.data.pets.birth[2]
          if (day<10){
            day = '0' + day

          }
          const temp = {
            petSno: petId,
            usersSno : usersSno,
            targetNo : 1,
            name : res.data.pets.name,
            birth : [res.data.pets.birth[0], month, day].join('-'), 
            fat : res.data.pets.fat,
            materials : Object.keys(res.data.pets.materials).map((el)=>{return(parseInt(el))}), 
            effects : Object.keys(res.data.pets.effects).map((el)=>{return(parseInt(el))}),
            image : '',
            imageFlag:0,
          }
          setDate(new Date([res.data.pets.birth[0], month, day].join('-')))
          setPet(temp)
          setSelectedEffect(temp.effects)
          setSeletedTag(temp.materials)
          setProfile(res.data.pets.image)
          setBcs(res.data.pets.fat)
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    }
  },[location.pathname])
  
  useEffect(()=>{
    setPet({
      ...pet,
      materials: selectedTag,
      effects: selectedEffect,
      fat: bcs
    })
  },
  [selectedEffect, selectedTag, bcs])



  const WantUpdateProfile = (e) => {
    let file = e.target.files[0];
    let fileURL;
    let reader = new FileReader();
    reader.onload = () => {
      fileURL = reader.result;
      setProfile(fileURL);
    }
    reader.readAsDataURL(file);
    setImage(file);
    if (location.pathname==="/mypage/petUpdate"){
      setPet({...pet, image:file.name, imageFlag:1})
    } else {
      setPet({...pet, image:file.name})
    }
  };

  const birthday = (item) => {
    setDate(item);
    setShowCalender(!showCalender);
    const year = item.getFullYear(item);
    const month =
      item.getMonth(item) + 1 < 10
        ? "0" + (item.getMonth(item) + 1)
        : item.getMonth(item) + 1;
    const date =
      item.getDate(item) < 10 ? "0" + item.getDate(item) : item.getDate(item);
    setPet({...pet, birth:`${year}-${month}-${date}`});
  };

  const onSubmit= () => {
    console.log(image)
    console.log(pet)
    const formData = new FormData()
    const petBlob = new Blob([JSON.stringify(pet)], {
      type: "application/json",
    });
    formData.append("pet", petBlob);
    formData.append("image",image)

    const path = location.pathname

    if (path === '/mypage/petAdd'){
      petAdd(formData).then((res)=>{
        console.log(res)
        setRerender(rerender+1)
        Swal.fire({
          width:'25%',
          position: "center",
          title: "????  ??? ????????? ?????????????????????.",
          showConfirmButton: false,
          timer: 1000,
          customClass:{
            icon:'smallIcon',
            title:'midFont'
          }}).then(()=>{navigate('/mypage')})
      }).catch((err)=>{
        console.log(err)
        Swal.fire({
        width:'25%',
        position: "center",
        title: "??? ?????? ????????? ???????????? ??????????????????",
        showConfirmButton: false,
        timer: 1000,
        customClass:{
          icon:'smallIcon',
          title:'midFont'
        }})})
    } else{
      petEdit(formData)
      .then((res)=>{
        console.log(res)
        setRerender(rerender+1)
        Swal.fire({
          width:'25%',
          position: "center",
          title: "????  ??? ????????? ?????????????????????.",
          showConfirmButton: false,
          timer: 1000,
          customClass:{
            icon:'smallIcon',
            title:'midFont'
          }}).then(()=>{navigate('/mypage/petDetail', {state:{petId:location.state.val}})})
      }).catch((err)=>{
        console.log(err)
        Swal.fire({
          width:'25%',
          position: "center",
          title: "??? ?????? ????????? ???????????? ??????????????????",
          showConfirmButton: false,
          timer: 1000,
          customClass:{
            icon:'smallIcon',
            title:'midFont'
          }})
      })
    }

  }

  const gridDiv = {
    width:'100%',
    display:'grid',
    gridTemplateColumns:'repeat(6, minmax(0, 1fr))',
    gap: '1%',
    marginTop:'4px',
  }
  
  return (
    <SignupBox>
      <FlexBox direction="column" justify="space-between" align="center" width="80%">
        {/* ????????? + ?????? / ???????????? */}
        <div style={{...gridDiv, gridTemplateColumns:'repeat(4, minmax(0, 1fr))'}}>
          <StyledProfile src={profile === "" ? Dog1 : profile} height="120px" width="120px"></StyledProfile>
          <div
            style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              paddingLeft: "90px",
              paddingTop: "90px",
            }}
          >
            <label htmlFor="image">
              <img src={CameraIcon} alt="????????? ??????" />
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

          <FlexBox direction="row" justify="end" align="center" width='100%' style={{gridColumn:'span 3'}}>
            <FlexBox direction="column" align="start" width="100%">
              <div style={{...gridDiv, gridTemplateColumns:'repeat(3, minmax(0, 1fr))'}}>
                <StyledText size="15px" weight="400">??????</StyledText>
                <StyledInput padding='10px' onChange={(e) => { setPet({...pet, name:e.target.value}) }}
                style={{ gridColumn:'span 2', boxSizing:'border-box'}}
                width='100%'
                  value={pet.name}
                  
                />
              </div>
              <div style={{...gridDiv, gridTemplateColumns:'repeat(3, minmax(0, 1fr))'}}>
                <StyledText size="15px" weight="400" width='100%' style={{whiteSpace:'nowrap'}}>????????????</StyledText>
                <div style={{position:'relative', gridColumn:'span 2'}}>
                  <StyledInput padding='10px'
                    width='100%'
                    value={pet.birth}
                    style={{boxSizing:'border-box'}}
                  />
                  <div style={{position: "absolute", top:'55%', right:'10px',transform: 'translate(0, -50%)'}}>
                    <img src={calendarButton} alt="?????? ??????" onClick={() => {
                        setShowCalender(!showCalender);
                        setDate(date);
                      }}
                      width="25px"

                      />
                  </div>
                </div>

              </div>

             
            </FlexBox>
          </FlexBox>
        </div>
        {showCalender && ( // ?????? ????????? ???????????? ?????? true ??? ?????? ????????? ????????????
        <LoginModalStyled>
          <div style={{ display: "flex", flexFlow: "column nowrap", position:"absolute" }}>
            <Calendar
              onChange={(item) => {
                birthday(item);
              }}
              locale={locales[locale]}
              date={date}
              style={{ width: "300px" }}
              color="#ccaa90"
              />
          </div>
        </LoginModalStyled>
        )}
        {/* ????????? ?????? ????????? ?????? */}
        <StyledText size="16px" weight="500" style={{ alignSelf: "flex-start", marginTop:'25px' }}>
          ?????????{" "}
        </StyledText>

        <div style={gridDiv}>
          {alergyList.map((item, idx) => (
            <StyledButton
              key={idx}
              onClick={() => {
                !selectedTag.includes(idx+1) ? setSeletedTag((selectedTag) => [...selectedTag, idx+1]) : setSeletedTag(selectedTag.filter((Button) => Button !== idx+1));
              }}
              tagGray={!selectedTag.includes(idx+1) ? true : false}
              tagSelected={selectedTag.includes(idx+1) ? true : false}
              style={{
                margin: "6px 3px ",
                flex: "1 1 11%",
                wordWrap: "break-word",
                width:'100%',
                padding: "5px 3px",
              }}
            >
              {item}
            </StyledButton>
          ))}
        </div>

        {/* ????????? */}
        <FlexBox direction="row" justify="space-between" style={{marginTop:'20px'}}>
          <StyledText size="16px" weight="500">
            ?????????
          </StyledText>
          <StyledText size="12px" weight="400">
            ???????????? ????????? ?????? ????????? ????????? ??????????????????.
          </StyledText>
        </FlexBox>
        <div style={{...gridDiv, gridTemplateColumns:'repeat(5, minmax(0, 1fr))'}}>
          <FlexBox margin='0px' direction="column" justify="center" align="center" onClick={(e) => setBcs(1)}>
            <img
              src={BCS1}
              alt="????????????"
              style={{
                border: `${bcs === 1 ? "2px solid #eddccf" : "2px solid white"}`,
                aspectRatio:'1/1',
                width:'100%',
                borderRadius:'5px'
              }}
            />
            <StyledText size="13px" weight="500" style={{whiteSpace:'nowrap'}}>
              ?????? ??????
            </StyledText>
          </FlexBox>

          <FlexBox margin='0px' direction="column" justify="center" align="center" onClick={(e) => setBcs(2)}>
            <img
              src={BCS2}
              alt="?????????"
              style={{
                border: `${bcs === 2 ? "2px solid #eddccf" : "2px solid white"}`,
                aspectRatio:'1/1',
                width:'100%',
                borderRadius:'5px'
              }}
            />
            <StyledText size="13px" weight="500" style={{whiteSpace:'nowrap'}}>
              ?????????
            </StyledText>
          </FlexBox>

          <FlexBox margin='0px' direction="column" justify="center" align="center" onClick={(e) => setBcs(3)}>
            <img
              src={BCS3}
              alt="????????????"
              style={{
                border: `${bcs === 3 ? "2px solid #eddccf" : "2px solid white"}`,
                aspectRatio:'1/1',
                width:'100%',
                borderRadius:'5px'
              }}
            />
            <StyledText size="13px" weight="500"  style={{whiteSpace:'nowrap'}}>
              ????????????
            </StyledText>
          </FlexBox>

          <FlexBox margin='0px' direction="column" justify="center" align="center" onClick={(e) => setBcs(4)}>
            <img
              src={BCS4}
              alt="?????????"
              style={{
                border: `${bcs === 4 ? "2px solid #eddccf" : "2px solid white"}`,
                aspectRatio:'1/1',
                width:'100%',
                borderRadius:'5px'
              }}
            />
            <StyledText size="13px" weight="500"  style={{whiteSpace:'nowrap'}}>
              ?????????
            </StyledText>
          </FlexBox>

          <FlexBox margin='0px' direction="column" justify="center" align="center" onClick={(e) => setBcs(5)}>
            <img
              src={BCS5}
              alt="??????"
              style={{
                border: `${bcs === 5 ? "2px solid #eddccf" : "2px solid white"}`,
                aspectRatio:'1/1',
                width:'100%',
                borderRadius:'5px'
              }}
            />
            <StyledText size="13px" weight="500" style={{whiteSpace:'nowrap'}}>
              ??????
            </StyledText>
          </FlexBox>
        </div>

        {/* ?????? ?????? ????????? ?????? */}
        <FlexBox direction="row" justify="space-between" align="end">
          <StyledButton XSmallBrown onClick={(e) => setEffectsOpen(!effectsOpen)}>
            ?????? ?????? ????????????
          </StyledButton>
          {/* <StyledText
            size="13px"
            weight="500"
            onClick={(e) => setEffectsOpen(!effectsOpen)}
          >
            ?????? ???
          </StyledText> */}
        </FlexBox>
        {effectsOpen && (
          <div style={{...gridDiv, gridTemplateColumns:'repeat(5, minmax(0, 1fr))'}}>
            {effectsList.map((item, idx) => (
              <StyledButton
                key={idx}
                onClick={() => {
                  !selectedEffect.includes(idx+1) ? setSelectedEffect((selectedEffect) => [...selectedEffect, idx+1]) : setSelectedEffect(selectedEffect.filter((Button) => Button !== idx+1));
                }}
                tagGray={!selectedEffect.includes(idx+1) ? true : false}
                tagSelected={selectedEffect.includes(idx+1) ? true : false}
                style={{
                  margin: "6px 3px ",
                  flex: "1 1 15%",
                  wordWrap: "break-word",
                  width:'100%',
                  padding: "5px 6px",
                }}
              >
                {item}
              </StyledButton>
            ))}
          </div>
        )}
        <FlexBox direction="row" justify="space-around">
          <StyledButton nextbutton style={{ width: "200px", height: "45px" }} onClick={onSubmit}>??????</StyledButton>
        </FlexBox>
      </FlexBox>
    </SignupBox>
  );
}

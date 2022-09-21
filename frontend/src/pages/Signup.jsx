import React from 'react'
import { Routes, Route } from "react-router-dom";
import { FlexBox, MainContent } from '../components/MainComponent'
import Signup1 from '../assets/img/Signup1.png'
import Signup2 from '../assets/img/Signup2.png'
import Signup3 from '../assets/img/Signup3.png'
import { useState } from 'react'
import SignupTerm from "./SignupTerm";
import SignupUser from "./SignupUser";
import SignupPet from "./SignupPet";
import { useEffect } from 'react';
import styled from 'styled-components';
import { StyledText } from '../components/CommonComponent';

const SignupBox = styled.div`
    width: 30%;
    height: auto;
    padding: 30px 30px 20px 30px;
    border: 2px solid rgba(204,170,144,0.3);
    border-radius: 10px;
    margin:50px 0px 0px 10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    min-width: 500px;
`

export default function Signup() {
    const [step, setStep] = useState(1);
    const [user, setUser] = useState({
        name: "",
        phoneNum: "",
        email: "",
        fullAddress: "",
        detailAddress: "",
        postZip: "",
    })
    useEffect(() => {
        console.log(user);
    }, [step])
    return (
        <MainContent height="90%" style={{ marginTop: "100px" }}>
            {step === 1 && <img src={Signup1} alt="약관동의 단계" />}
            {step === 2 && <img src={Signup2} alt="약관동의 단계" />}
            {step === 3 && <img src={Signup3} alt="약관동의 단계" />}
            <SignupBox>
                <FlexBox direction="row">
                    <StyledText size="24px" weight="500">회원가입</StyledText>
                </FlexBox>
                <Routes>
                    <Route exact="true" path="" element={<SignupTerm setStep={setStep} />} />
                    <Route path="signupUser" element={<SignupUser setStep={setStep} user={user} setUser={setUser} />} />
                    <Route path="signupPet" element={<SignupPet setStep={setStep} />} />
                </Routes>
            </SignupBox>
        </MainContent>
    )
}

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FlexBox, MainContent } from "../components/MainComponent";
import Signup1 from "../assets/img/Signup1.png";
import Signup2 from "../assets/img/Signup2.png";
import Signup3 from "../assets/img/Signup3.png";
import { useState } from "react";
import SignupTerm from "./SignupTerm";
import SignupUser from "./SignupUser";
import SignupPet from "./SignupPet";
import SignupRegisterPet from "./SignupRegisterPet";

import { useEffect } from "react";

export default function Signup() {
  const location = useLocation();
  const [kakaoId,] = useState(location.state)
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    name: "",
    phoneNum: "",
    email: "",
    fullAddress: "",
    detailAddress: "",
    postZip: "",
  });
  const [pets, setPets] = useState([
    //     {image:"",
    // name:"",
    // birth:"",
    // target:"",
    // materials:[],
    // effects:[],
    // fat:""}
  ]);


  return (
    <MainContent height="90%" style={{ marginTop: "100px" }}>
      {step === 1 && <img src={Signup1} alt="약관동의 단계" />}
      {step === 2 && <img src={Signup2} alt="약관동의 단계" />}
      {step === 3 && <img src={Signup3} alt="약관동의 단계" />}

      <Routes>
        <Route
          exact="true"
          path=""
          element={<SignupTerm setStep={setStep} />}
        />
        <Route
          path="signupUser"
          element={
            <SignupUser setStep={setStep} user={user} setUser={setUser} />
          }
        />
        <Route
          path="signupPet"
          element={
            <SignupPet setStep={setStep} pets={pets} setPets={setPets} user={user} kakaoId={kakaoId} />
          }
        />

        <Route
          path="signupRegisterPet"
          element={
            <SignupRegisterPet
              setStep={setStep}
              pets={pets}
              setPets={setPets}
            />
          }
        />
      </Routes>
    </MainContent>
  );
}

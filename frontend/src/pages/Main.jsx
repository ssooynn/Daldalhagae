import React from 'react'
import Main1 from "../assets/img/Main1.png";
import { MainContent } from '../components/MainComponent';


const Main = () => {
  return (
    <MainContent>
      <img src={Main1} alt="메인" style={{ width: "100%", height: "94vh", margin: "0px", padding: "0px", objectFit: "cover" }}></img>
    </MainContent>

  )
}

export default Main
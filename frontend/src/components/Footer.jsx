import React from 'react'
import { FlexBox, MainContent } from './MainComponent'
import styled from "styled-components";
const Foot = styled.div`
    width : 100%;
    height : 300px;
    background-color: #EDDCCF;
    color:#767676;
    font-weight: 500;
    position : relative;
  transform : translateY(-100%);
    `

export default function Footer({ ...props }) {
  return (
    <Foot {...props}></Foot>
  )
}

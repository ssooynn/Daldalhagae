import React from 'react'
import styled, { css } from 'styled-components';
import { animated } from '@react-spring/web';

const Button = styled(animated.button)`
    height: 70px;
    border-radius: 10px;
    border: 0px;
    font-size: 12px;
    font-family:"Spoqa Han Sans Neo";
    font-weight: 400;
    margin: ${(props) => props.margin || "10px 5px"};
    width: ${(props) => props.width || "300px"};
    color: ${(props) => props.color || "#1f1d1d"};
    background-color: ${(props) => props.bgcolor || "white"};

    ${(props) =>
    props.FullDeepBrown &&
    css`
      color: white;
      background: #776B62;
      width: 100%;
      font-size:20px;
    `}

    ${(props) =>
    props.FullIvory &&
    css`
      color: #776B62;
      background: #EDDCCF;
      width: 100%;
      font-size:20px;
    `}

    ${(props) =>
    props.BigDeepBrown &&
    css`
      color: white;
      background: #776B62;
      width: 700px;
      font-size:20px;
      &:hover{
        background-color: #EDDCCF;
        color:#776B62;
      }
    `}

    ${(props) =>
    props.BigIvory &&
    css`
      color: #776B62;
      background: #EDDCCF;
      width: 700px;
      font-size:20px;
    `}

    ${(props) =>
    props.MediumIvory &&
    css`
      color: #776B62;
      background: #EDDCCF;
      width: 500px;
      font-size:20px;
      &:hover{
        background-color: #776B62;
        color:white;
      }
    `}

    ${(props) =>
    props.MediumBrown &&
    css`
      color: #1f1d1d;
      background: #CCAA90;
      width: 500px;
      font-size:20px;
    `}

    ${(props) =>
    props.SmallBrown &&
    css`
      color: #1f1d1d;
      background: #CCAA90;
      width: 250px;
      height: 60px;
      font-size:18px;
    `}

    ${(props) =>
    props.SmallIvory &&
    css`
      color: #776B62;
      background: #EDDCCF;
      width: 250px;
      height: 60px;
      font-size:18px;
      &:hover{
        background-color: #776B62;
        color:white;
      }
    `}

    ${(props) =>
    props.XSmallIvory &&
    css`
      color: #776B62;
      background: #EDDCCF;
      width: 120px;
      height: 45px;
      font-size:16px;
      &:hover{
        background-color: #776B62;
        color:white;
      }
    `}

    ${(props) =>
    props.SmallWhite &&
    css`
      background: #CCaa90;
      color: #1f1d1d;
      width: 220px;
      height: 55px;
      font-size:18px;
      &:hover{
        background-color: #776B62;
        color:white;
      }
    `}
`
export function StyledButton({ children, width, color, bgcolor, margin, ...props }) {
  return <Button width={width} color={color} bgcolor={bgcolor} margin={margin} {...props} >{children}</Button>
}

const Text = styled(animated.div)`
    font-weight: ${(props) => props.weight || "400"};
    color: ${(props) => props.color || "#1f1d1d"};
    font-size: ${(props) => props.size || "20px"};
    margin: ${(props) => props.margin || "10px"};
`

export function StyledText({ children, weight, color, size, margin, ...props }) {
  return <Text weight={weight} color={color} size={size} margin={margin} {...props} >{children}</Text>
};
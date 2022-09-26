import React from "react";
import styled, { css } from "styled-components";
import { animated } from "@react-spring/web";

const Button = styled(animated.button)`
    height: 70px;
    border-radius: 10px;
    border: 0px;
    font-size: 12px;
    font-family:"Spoqa Han Sans Neo";
    font-weight: 400;
    cursor: pointer;
    margin: ${(props) => props.margin || "10px 5px"};
    width: ${(props) => props.width || "300px"};
    color: ${(props) => props.color || "#1f1d1d"};
    background-color: ${(props) => props.bgcolor || "white"};

  ${(props) =>
    props.FullDeepBrown &&
    css`
      color: white;
      background: #776b62;
      width: 100%;
      font-size: 20px;
    `}

  ${(props) =>
    props.FullIvory &&
    css`
      color: #776b62;
      background: #eddccf;
      width: 100%;
      font-size: 20px;
    `}

    ${(props) =>
    props.BigDeepBrown &&
    css`
      color: white;
      background: #776b62;
      width: 700px;
      font-size: 20px;
      &:hover {
        background-color: #eddccf;
        color: #776b62;
      }
    `}

    ${(props) =>
    props.BigIvory &&
    css`
      color: #776b62;
      background: #eddccf;
      width: 700px;
      font-size: 20px;
    `}

    ${(props) =>
    props.MediumIvory &&
    css`
      color: #776b62;
      background: #eddccf;
      width: 500px;
      font-size: 20px;
      &:hover {
        background-color: #776b62;
        color: white;
      }
    `}

    ${(props) =>
    props.MediumBrown &&
    css`
      color: #1f1d1d;
      background: #ccaa90;
      width: 500px;
      font-size: 20px;
    `}

    ${(props) =>
    props.SmallBrown &&
    css`
      color: #1f1d1d;
      background: #ccaa90;
      width: 250px;
      height: 60px;
      font-size: 18px;
    `}

    ${(props) =>
    props.SmallIvory &&
    css`
      color: #776b62;
      background: #eddccf;
      width: 250px;
      height: 60px;
      font-size: 18px;
      &:hover {
        background-color: #776b62;
        color: white;
      }
    `}

    ${(props) =>
    props.XSmallIvory &&
    css`
      color: #776b62;
      background: #eddccf;
      width: 120px;
      height: 45px;
      font-size: 16px;
      &:hover {
        background-color: #776b62;
        color: white;
      }
    `}

    
    ${(props) =>
    props.XSmallBrown &&
    css`
      color: #776b62;
      background: #eddccf;
      width: 140px;
      height: 40px;
      font-size: 14px;
      font-weight: 400;
      &:hover {
        background-color: #776b62;
        color: white;
      }
    `}

    ${(props) =>
    props.nextbutton &&
    css`
      background: #eddccf;
      color: #776b62;
      width: 90px;
      height: 40px;
      font-size: 14px;
      &:hover {
        background-color: #776b62;
        color: white;
      }
    `}

    ${(props) =>
    props.SmallWhite &&
    css`
      background: #ccaa90;
      color: #1f1d1d;
      width: 220px;
      height: 55px;
      font-size: 18px;
      &:hover {
        background-color: #776b62;
        color: white;
      }
    `}

    ${(props) =>
    props.searchaddress &&
    css`
      background: #eddccf;
      color: #1f1d1d;
      width: 100px;
      height: 30px;
      font-size: 12px;
    `}

    ${(props) =>
    props.tagGray &&
    css`
      background: #f4f4f4;
      color: #1f1d1d;
      width: 50px;
      height: 33px;
      font-size: 12px;
    `}

    ${(props) =>
    props.tagSelected &&
    css`
      background: #eddccf;
      color: #1f1d1d;
      width: 50px;
      height: 33px;
      font-size: 12px;
    `}
`;
export function StyledButton({ children, width, color, bgcolor, margin, ...props }) {
  return (
    <Button width={width} color={color} bgcolor={bgcolor} margin={margin} {...props}>
      {children}
    </Button>
  );
}

const Text = styled(animated.div)`
  font-weight: ${(props) => props.weight || "400"};
  color: ${(props) => props.color || "#1f1d1d"};
  font-size: ${(props) => props.size || "20px"};
  margin: ${(props) => props.margin || "10px"};
`;

export function StyledText({ children, weight, color, size, margin, ...props }) {
  return (
    <Text weight={weight} color={color} size={size} margin={margin} {...props}>
      {children}
    </Text>
  );
}

const InputStyled = styled.input`
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "220px"};
  border: ${(props) => props.border || "1px solid #969696"};
  padding: ${(props) => props.padding || "12px 10px"};
  margin: ${(props) => props.margin || "3px 5px"};
  border-radius: 7px;
`;
export function StyledInput({ chidren, height, width, border, padding, margin, ...props }) {
  return <InputStyled type="text" height={height} width={width} border={border} padding={padding} margin={margin} {...props}></InputStyled>;
}

const ProfileStyled = styled.img`
  height: ${(props) => props.height || "100px"};
  width: ${(props) => props.width || "100px"};
  border-radius: 10px;
  margin: ${(props) => props.margin || "5px"};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;

export function StyledProfile({ chidren, height, width, border, padding, margin, ...props }) {
  return <ProfileStyled height={height} width={width} margin={margin} {...props}></ProfileStyled>;
}
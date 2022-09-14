import React from 'react';
import styled from "styled-components";

// Main 100vh, vw 채우는 div
const Main1 = styled.div`
    display: flex;
    scroll-snap-align: start;
    width : ${(props) => props.width || "100%"};
    height : ${(props) => props.height || "100vh"};
    object-fit: cover;
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    margin: 0px;
    padding: 0px;
    flex-direction:  ${(props) => props.direction || "column"};
    
`

export function MainContent({ children, width, height, justify, align, ...props }) {
    return <Main1 width={width} height={height} justify={justify} align={align} {...props}>{children}</Main1>
}

const Flex = styled.div`
    display: flex;
    width : ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    flex-direction:  ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    margin: ${(props) => props.margin || "10px"};
`
export function FlexBox({ children, width, height, justify, direction, align, margin, ...props }) {
    return <Flex width={width} height={height} direction={direction} justify={justify} align={align} margin={margin} {...props}>{children}</Flex>
}
import React from 'react';
import styled from "styled-components";


// Main 100vh, vw 채우는 div
const Main1 = styled.div`
    width : ${(props) => props.width || "100vw"};
    height : ${(props) => props.height || "100vh"};
    object-fit: cover;
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
`

export function MainContent({ children, width, height, justify, align, ...props }) {
    return <Main1 width={width} height={height} justify={justify} align={align} {...props}>{children}</Main1>
}

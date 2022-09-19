import React from 'react'
import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
height: auto;
box-sizing: border-box;
display: block;
text-decoration: none;
text-align: center;
color: #1f1d1d;
margin:0;
padding:0;
`;

const MypageProfile = styled(animated.img)`
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: ${(props) => props.width || "100%"};
    border-radius: ${(props)=> props.radius || '10px'};
    `;

export const StyledProfile = ({ width, radius, src, ...props }) => {
    return <MypageProfile width={width} radius={radius} {...props} src={src} alt='프로필 이미지'></MypageProfile>
    };

    const Flex = styled.div`
    display: flex;
    width : ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    flex-direction:  ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    margin: ${(props) => props.margin || "0px"};
`
export const FlexBox= ({ children, width, height, justify, direction, align, margin, ...props }) => {
    return <Flex width={width} height={height} direction={direction} justify={justify} align={align} margin={margin} {...props}>{children}</Flex>
}
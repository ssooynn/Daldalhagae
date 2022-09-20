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
width : ${(props) => props.width || "100%"};
height: ${(props) => props.height || "auto"};
flex-direction:  ${(props) => props.direction || "row"};
justify-content: ${(props) => props.justify || "center"};
align-items: ${(props) => props.align || "center"};
margin: ${(props) => props.margin || "0px"};
grid-column: ${(props) => props.span || "span 1"};
`
export const FlexBox= ({ children, width, height, justify, direction, align, margin, ...props }) => {
    return <Flex width={width} height={height} direction={direction} justify={justify} align={align} margin={margin} {...props}>{children}</Flex>
}

const InfoBox = styled.div`
    padding: ${(props)=> props.padding || '5px'};
    width: ${(props) => props.width || '100%'};
    min-width: ${(props) => props.minWidth || '200px'};
    height: ${(props) => props.height || "auto"};
    font-size: ${(props)=> props.mainFontSize || '14px'};
    margin: ${(props)=> props.margin || '1px'};
    border: 0.1px solid #969696;
    border-radius: 5px;
    box-sizing: border-box;

`

const StyledInput = styled.input`
    padding: ${(props)=> props.padding || '5px'};
    width: ${(props) => props.width || '100%'};
    min-width: ${(props) => props.minWidth || '200px'};
    height: ${(props) => props.height || "auto"};
    font-size: ${(props)=> props.mainFontSize || '14px'};
    margin: ${(props)=> props.margin || '1px'};
    border: 0.1px solid #969696;
    border-radius: 5px;
    box-sizing: border-box;

`

const SmallText = styled.div`
    width: auto;
    text-align: start;
    font-size: ${(props)=> props.fontSize ||'12px'};
    font-weight: ${(props)=> props.fontWeight ||'300'};
    margin: ${(props)=> props.textMargin || '1px'};
    `

export const InfoLayout = ({padding, subpadding, width, height, mainFontSize, fontSize, fontWeight, textMargin, margin, label, minWidth, span, sub, children}) => {
    return(
        <FlexBox justify='start' align='start' direction='column' span={span}>
            <SmallText fontSize={fontSize} fontWeight={fontWeight} textMargin={textMargin}>{label}</SmallText>
            <InfoBox width={width} height={height} mainFontSize={mainFontSize} margin={margin} minWidth={minWidth} padding={padding} style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{padding:subpadding}}>{children}</div>
                {sub? <div style={{padding:subpadding, width:'10%', borderLeft:'0.1px solid #969696', textAlign:'center'}}>{sub}</div>:<></>}
                </InfoBox>

        </FlexBox>
    )
}
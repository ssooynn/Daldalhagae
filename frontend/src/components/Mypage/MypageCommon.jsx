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
box-sizing:border-box;
display: flex;
width : ${(props) => props.width || "100%"};
height: ${(props) => props.height || "auto"};
flex-direction:  ${(props) => props.direction || "row"};
justify-content: ${(props) => props.justify || "center"};
align-items: ${(props) => props.align || "center"};
margin: ${(props) => props.margin || "0px"};
grid-column: ${(props) => props.span || "span 1"};
background-color: ${(props) => props.bgColor ||''};
padding: ${(props)=> props.padding || '6px 8px'};
`
export const FlexBox= ({ children, width, height, justify, direction, align, margin ,bgColor,padding, ...props }) => {
    return <Flex padding={padding} width={width} height={height} direction={direction} justify={justify} align={align} margin={margin} bgColor={bgColor} {...props}>{children}</Flex>
}

const InfoBox = styled.div`
    padding: ${(props)=> props.padding || '6px 8px'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || "auto"};
    font-size: ${(props)=> props.mainFontSize || '14px'};
    margin: ${(props)=> props.margin || '1px'};
    border: 0.1px solid #969696;
    border-radius: 5px;
    box-sizing: border-box;
`

const StyledInput = styled.input`
    padding: ${(props)=> props.padding || '7.5px 8px'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || "auto"};
    font-size: ${(props)=> props.mainFontSize || '14px'};
    margin: ${(props)=> props.margin || '0px'};
    border: 0.1px solid #969696;
    border-radius: 7px;
    box-sizing: border-box;
    grid-column: ${(props) => props.span || "span 1"};
    &:focus{
        outline: 1.2px solid #AC998A;
    }
`

export const SmallText = styled.div`
    width: auto;
    text-align: start;
    font-size: ${(props)=> props.fontSize ||'12.5px'};
    font-weight: ${(props)=> props.fontWeight ||'300'};
    margin: ${(props)=> props.textMargin || '3px 1px'};
    `

export const InfoLayout = ({padding, subpadding, width, height, mainFontSize, fontSize, fontWeight, textMargin, margin, label, span, sub, children}) => {
    return(
        <FlexBox justify='start' align='start' direction='column' span={span}>
            <SmallText fontSize={fontSize} fontWeight={fontWeight} textMargin={textMargin}>{label}</SmallText>
            <InfoBox width={width} height={height} mainFontSize={mainFontSize} margin={margin} padding={padding} style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{padding:subpadding}}>{children ? children: '-'}</div>
                {sub? <div style={{padding:subpadding, width:'10%', borderLeft:'0.1px solid #969696', textAlign:'center'}}>{sub}</div>:<></>}
                </InfoBox>

        </FlexBox>
    )
}

export const StyledInputBox = ({disabled, value, name, onChange, span}) => {
    return(
        <StyledInput disabled={disabled} value={value} name={name} onChange={onChange} span={span}></StyledInput>
    )
}

export const InputLayout = ({padding, width, height, mainFontSize, fontSize, fontWeight, textMargin, margin, label, name, span, value, onChange}) => {
    return(
        <FlexBox justify='start' align='start' direction='column' span={span}>
            <SmallText fontSize={fontSize} fontWeight={fontWeight} textMargin={textMargin}>{label}</SmallText>
            <StyledInput onChange={onChange} value={value} name={name} width={width} height={height} mainFontSize={mainFontSize} margin={margin} padding={padding} style={{display:'flex', justifyContent:'space-between'}}></StyledInput>
        </FlexBox>
    )
}

const ButtonStyle = styled(animated.button)`
    padding: ${(props)=> props.padding || '0px'};
    box-shadow: -1px -1px 2px rgba(0,0,0,0.1), 1px 1px 2px rgba(0,0,0,0.1);
    box-sizing: border-box;
    border: none;
    width: 100%;
    height:  ${(props)=> props.height || '100%'};
    border-radius: 5px;
    background-color: ${(props)=> props.color || '#FFEEC3'};
    font-size:  ${(props)=> props.fontSize || '14px'};
    font-weight: 500;
    white-space: nowrap;
    margin: ${(props)=> props.margin || '0px'};
    transition-duration:100ms;
    &:hover{
        background-color: ${(props)=> props.hoverColor || '#776B62'};
        color:white;
        cursor: pointer;
      }
`

export const MypageButton = ({children, onClick, color,hoverColor, padding, height, fontSize, margin}) => {
    return (
        <ButtonStyle onClick={onClick} color={color} padding={padding} hoverColor={hoverColor} height={height} fontSize={fontSize} margin={margin}>{children}</ButtonStyle>
    )
}

export const subTitleStyle = {
    margin:'20px 0px 18px', 
    borderBottom:'0.1px solid #929292', 
    paddingBottom:'10px',
    fontWeight:'500',
    color:''
  }

const TagDiv = styled.div`
  height: ${(props)=> props.height || 'auto'};
  width: ${(props)=> props.width || '100%'};
  padding: ${(props)=>props.padding|| '2.5px 0px'};
  background-color: ${(props)=> props.bgColor || '#FFE6A7'}; 
  font-size: 13px;
  font-weight: 400;
  border-radius:5px;
  white-space:nowrap;
  text-align: center;
`


export const PetTag = ({children, height, width, bgColor, padding}) => {
    return (
        <TagDiv height={height} padding={padding} width={width} bgColor={bgColor} >{children}</TagDiv>
    )
}


export const ImgDiv = styled(animated.div)`
    width: ${(props)=> props.width || '100%'};
    height: ${(props)=> props.height || '130px'};
    margin:  ${(props)=> props.margin ||'12px 0px'};
    position: relative;
    box-sizing: border-box;
    border-radius: ${(props)=> props.radius||'10px'};
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.48);
`

export const RatingBox = styled.div`
margin: 0 auto;

& svg {
  color: #BEC3C6;
  cursor: pointer;
}
:hover svg {
  color: #FFD875;
}
& svg:hover ~ svg {
  color: #BEC3C6;
}
.black {
  color: #FFD875;
}

.marginR {
  margin-right:'2px'
}
`
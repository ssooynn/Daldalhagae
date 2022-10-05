import React from 'react';
import styled from "styled-components";
import downArrow from "../assets/img/down-arrow.png";
import { useSpring, animated } from '@react-spring/web';
import { StyledText } from './CommonComponent';
//나중에 api연결하면 지워야 할 것
import BasicPackage from "../assets/img/BasicPackage.png";
import PlayPackage from "../assets/img/PlayPackage.png";
import AllInOnePackage from "../assets/img/AllInOnePackage.png";
import { useNavigate } from 'react-router-dom';

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
    width : ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
    flex-direction:  ${(props) => props.direction || "row"};
    justify-content: ${(props) => props.justify || "center"};
    align-items: ${(props) => props.align || "center"};
    margin: ${(props) => props.margin || "10px"};
`
export function FlexBox({ children, width, height, justify, direction, align, margin, ...props }) {
    return <Flex width={width} height={height} direction={direction} justify={justify} align={align} margin={margin} {...props}>{children}</Flex>
}

const Arrow = styled(animated.img)`
    width: 80px;
    height : 80px;
    position: fixed;
    top: 90%;
    left : 47%;
`

export function ArrowImg({ ...props }) {
    const animation = useSpring({
        loop: true,
        from: {
            opacity: 0.6,
        },
        to: [{
            opacity: 0.9,
        },
        {
            opacity: 0.4,
        }],
        config: { duration: 500 },
        delay: 1000
    })
    return <Arrow src={downArrow} style={animation} {...props} alt="down-arrow" />
}

// 당신을 위한 구독 서비스 img styled
const SubImg = styled.img`
    width: 100%;
    max-height: 60vh;
    display: block;
    &:hover{
        transition: 0.5s;
        transform:scale(1.2);
    }
    `
const SubImgBox = styled.div`
border-radius: 10px;
overflow: hidden;
width:100%;
max-height:60vh;
`
export function StyledSubImg({ src, alt, ...props }) {
    return <SubImgBox><SubImg src={src} alt={alt} {...props} /></SubImgBox>
}

//구독 서비스 card list
export function MainSubscribeCard() {
    const Navigate = useNavigate();
    function GoBasic() {
        Navigate("/subscribeDetail", {
            state: {
                name: 'Basic Package',
                intro: '사료 1개월',
                components1: ['사료 1개월 분 (10~15kg)', '', '',],
                components2: [1, 0, 0],
                price: '21900',
            }
        })
    }
    function GoPlay() {
        Navigate("/subscribeDetail", {
            state: {
                name: 'Play Package',
                intro: '간식 3종 + 장난감 2종',
                components1: ['', '간식 3종', '장난감 2종'],
                components2: [0, 3, 2],
                price: '40000'
            }
        })
    }
    function GoAllInOne() {
        Navigate("/subscribeDetail", {
            state: {
                name: 'All In One Package',
                intro: '사료 1개월 + 간식 3종 + 장난감 2종',
                components1: ['사료 1개월 분 (10~15kg)', '간식 3종', '장난감 2종',],
                components2: [1, 3, 2],
                price: '22900'
            }
        })
    }
    return (
        <FlexBox direction="row" justify="space-between" align="center" width="100%">
            <FlexBox direction="column" justify="center" align="center" width="30%" onClick={GoBasic}>
                <StyledSubImg src={BasicPackage} alt="사료 사진"></StyledSubImg>
                <div>
                    <StyledText size="22px" weight="500" margin="30px 10px 2px 10px">Basic Package</StyledText>
                    <StyledText size="14px" weight="300" margin="2px 10px">( 사료 1개월 구성 )</StyledText>
                </div>
            </FlexBox>
            <FlexBox direction="column" justify="center" align="center" width="30%" onClick={GoPlay}>
                <StyledSubImg src={PlayPackage} alt="사료 사진"></StyledSubImg>
                <StyledText size="22px" weight="500" margin="30px 10px 2px 10px">Play Package</StyledText>
                <StyledText size="14px" weight="300" margin="2px 10px">( 간식 3종 + 장난감 2종 구성 ) </StyledText>
            </FlexBox>
            <FlexBox direction="column" justify="center" align="center" width="30%" onClick={GoAllInOne}>
                <StyledSubImg src={AllInOnePackage} alt="사료 사진"></StyledSubImg>
                <StyledText size="22px" weight="500" margin="30px 10px 2px 10px">All In One Package</StyledText>
                <StyledText size="14px" weight="300" margin="2px 10px">( 사료 1개월 + 간식 3종 + 장난감 2종 구성 )</StyledText>
            </FlexBox>
        </FlexBox>)
}

const ReviewImg = styled.img`
    border-radius: 10px;
    width: 80%;
    height: 55%;
    object-fit: cover;
    margin:20px 10%;
`
export function StyledReviewImg({ src, alt, ...props }) {
    return <ReviewImg src={src} alt={alt} {...props} />
}

// 메인 후기 card list
export function MainReviewCard({ reviewList }) {
    const rateList = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]
    console.log((reviewList));
    return (
        <FlexBox direction="row" justify="space-between" align="center" width="100%" height="100%">
            {reviewList.length == 3 ? reviewList.map((review, idx) => (
                <FlexBox key={idx} direction="column" justify="center" align="center" width="30%" height="100%" style={{ backgroundColor: "#ffffff", boxShadow: "1px 4px 4px 0px rgba(0,0,0,0.25)", borderRadius: "5px" }}>
                    <StyledReviewImg src={review.image} alt="사료 사진"></StyledReviewImg>
                    <FlexBox direction="column" justify="center" align="flex-start" style={{ alignSelf: "flex-start", margin: "10px 10%" }}>
                        <FlexBox direction="row" justify="start" align="end">
                            <StyledText size="18px" weight="500" margin="5px 10px 2px 0px">{review.userName}</StyledText>
                            <StyledText size="14px" weight="500" margin="5px 10px 2px 2px">[{review.subName}]</StyledText>
                            <StyledText size="12px" weight="300" margin="2px 10px">{review.date[0]}년 {review.date[1]}월 {review.date[2]}일</StyledText>
                        </FlexBox>
                        <StyledText size="14px" weight="300" margin="2px 10px">{rateList[review.rate - 1]}</StyledText>
                        <div style={{ marginTop: "20px", alignSelf: "flex-start" }}>
                            <StyledText size="15px" weight="400" margin="2px 10px">{review.content}</StyledText>
                        </div>
                    </FlexBox>
                </FlexBox>

            )) : <div>아직 리뷰가 없어요ㅠ</div>}
        </FlexBox>)
}
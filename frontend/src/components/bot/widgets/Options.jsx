import React from 'react'
import styled from 'styled-components';

const OptionBox = styled.div`
  display: flex;
  direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
const StyledOption = styled.button`
  margin: 5px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  background-color: #e1c4ae;
  padding: 8px 15px;
  border: 1px solid white;
  font-family: "Spoqa Han Sans Neo";
`;

export default function Options(props) {
    console.log(props);
    const options = [
        {
            text: "서비스 문의",
            handler: props.actions.handleServiceQuestion,
            id: 1,
        },
        {
            text: "구독목록 문의",
            handler: props.actionProvider.handleSubscribeQuestion,
            id: 2,
        },
        {
            text: "결제문의",
            handler: props.actionProvider.handlePaymentQuestion,
            id: 3,
        },
        {
            text: "기타문의",
            handler: props.actionProvider.handleEtcQuestion,
            id: 4,
        },
    ];

    return (
        <OptionBox>
            {
                options.map((option) => (
                    <StyledOption key={option.id} onClick={option.handler}>
                        {option.text}
                    </StyledOption>
                ))
            }
        </OptionBox>
    )
}
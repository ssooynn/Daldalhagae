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

export default function ServiceOptions(props) {
    console.log(props);
    const options = [
        {
            text: "서비스 소개",
            handler: props.actions.handleServiceInfo,
            id: 1,
        },
        {
            text: "추천 알고리즘",
            handler: props.actionProvider.handleAlgorithmInfo,
            id: 2,
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
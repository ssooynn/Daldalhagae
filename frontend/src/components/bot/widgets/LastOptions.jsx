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

export default function LastOptions(props) {
    console.log(props);
    const options = [
        {
            text: "처음으로 돌아가기",
            handler: props.actionProvider.handleBack,
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
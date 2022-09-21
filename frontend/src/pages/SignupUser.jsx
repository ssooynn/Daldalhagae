import React from 'react'
import { StyledText } from '../components/CommonComponent'
import { FlexBox } from '../components/MainComponent'

const SignupUser = () => {
  return (
    <FlexBox direction="column" justify="space-between">
      <FlexBox direction="row" justify="space-around">
        <StyledText size="16px" weight="400" color="6E6E6E">이름</StyledText>
      </FlexBox>

    </FlexBox>
  )
}

export default SignupUser
import React from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.section`
  align-item: start;
  padding: 0;
  @media only screen and (min-width: 789px) {
    margin: 0 15% 0 15%;
  }
`

const Underline = styled.section`
  border-color: white;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`

const UnderLineSection = props => (
  <Wrapper>
    <Underline>{props.children}</Underline>
  </Wrapper>
)

export default UnderLineSection

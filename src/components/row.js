import React from "react"
import styled from "styled-components"


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 789px) {
    flex-direction: row;
  }
`

const Row = props => <Wrapper>{props.children}</Wrapper>

export default Row

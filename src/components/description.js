import React from "react"
import styled, { css } from "styled-components"
import Paragraph from "../components/paragraph"
import SectionTitle from "../components/sectionTitle"

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2px;
  background: #b9bcc5 @media only screen and (min-width: 992px) {
    width: 32.5%;
  }
`

const Description = props => (
  <Wrapper>
    <SectionTitle>{props.title}</SectionTitle>
    <Paragraph>{props.paragraph}</Paragraph>
  </Wrapper>
)

export default Description

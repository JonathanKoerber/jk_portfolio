import React from "react"
import styled from "styled-components"

const Text = styled.p`
  font-family: Helvetica Nue, sans-serif;
  font-size: 1.1em;
  color: #000;
  text-align: left;
  padding: 1%;
`

const Paragraph = props => <Text>{props.text}</Text>

export default Paragraph

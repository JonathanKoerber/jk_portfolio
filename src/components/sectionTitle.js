import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Title = styled.h3`
  text-align: left;
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  font-size: 2em;
  font-weight: bold;
  margin: 0;
`
const UnderLine = styled.div`
  width: 4em;
  height: 0.15em;
  background-color: #00002;
  margin: 0 auto;
  border-radius: 5px;
  opacity: 0.5;
`
const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const SectionTitle = props => (
  <div>
    <Title>
      <StyleLink target="blank" to={props.link}>
        {props.title}
      </StyleLink>
    </Title>
    <UnderLine />
  </div>
)

export default SectionTitle

import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import mark from "../images/GitHub-Mark-64px.png"

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 2em;
  height: 2em;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  opacity: 7;
  margin-right: auto;
  margin-left: auto;
`
const Icon = styled.img`
  width: 2em;
  height: 2em;
`

const Github = props => (
  <div>
    <Link to="https://github.com/JonathanKoerber" target="blank">
      <Icon src={mark} />
    </Link>
  </div>
)

export default Github

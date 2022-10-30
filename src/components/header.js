import React from "react"
import UnderLineSection from "../components/UnderLineSection"
import styled, { css } from "styled-components"
import Dropdown from "../components/dropdown"

// style for heading component
const Wrapper = styled.header`
    width: 100%;
    padding: 1em;
    height: 3em;
    display: flex;
    flex-direction: row;
    justify-content: right;
    position: fixed;
    background-image: linear-gradient(180deg, rgba(144,176,148,1), rgba(0,0,0,0));
}
    z-index: 10;
    top: 0;
    left: 0;

`

const Header = () => (
  <Wrapper>
    <Dropdown />
  </Wrapper>
)

export default Header

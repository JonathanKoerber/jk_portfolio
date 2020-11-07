import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from "gatsby";
import Button from "../components/button";
import Row from "../components/row";


const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: min-content;
  height: min-content;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: .5em;
  opacity: 7;
  margin-right: auto;
  margin-left: auto;

`;


const Nav = (props) => (
<Wrapper>
<Row>
{props.buttons.map((c, index)=>{
  return(
  <Button link={c.link} text={c.text}/>
)
})}
</Row>
</Wrapper>
)

export default Nav;
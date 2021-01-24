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

const Underline = styled.div`
  margin:0;
  border-color: white;
  border-top-width: 1px;
  border-top-style: solid;
@media only screen and (min-width: 789px){
  margin:0 15% 0 15%;
}
`;

const VertLine = styled.div`
  height: 4em;
  width: 1px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
`;

const Nav = (props) => (
  <div>
  <Underline/>
  <VertLine/>
<Wrapper>
<Row>
{props.buttons.map((c, index)=>{
  return(
  <Button link={c.link} text={c.text}/>
)
})}
</Row>
</Wrapper>
</div>
)

export default Nav;

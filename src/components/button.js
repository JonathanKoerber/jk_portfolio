import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from "gatsby";

const Wrapper = styled.div`
    width: max-content;
  padding: 1em;


`;
const Text = styled.h1`
font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif;
font-weight: bold;
font-size: 1em;
color: black;
font-weight: lighter;
padding: 10% 0 10% 0;
margin-left: auto;
margin-top: auto;
margin-bottom: auto;

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    @media only screen and (min-width: 789px){
    ${Wrapper}:hover &{
      color: #5ba491;
    }
    }

`;
const Divider = styled.div`
  height: inherit;
`;

const Button = (props) => (
    <Wrapper>
    <Text><StyledLink target="blank" to={props.link}>{props.text}</StyledLink></Text>

    </Wrapper>
)

export default Button;

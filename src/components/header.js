import React from 'react';
import UnderLineSection from '../components/UnderLineSection';
import styled, {css} from 'styled-components'
import logo from '../images/wheel.gif';

// style for heading component
const Wrapper = styled.header`
    width: 100%;
    padding: 1em;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom-color: #cbcbcb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`;

const Logo = styled.img`
    height: 2em;
    width: auto;
    align-self: center;

    @media only screen and (min-width: 582px){
      height: 2.7em;
      }
    @media only screen and (min-width: 778px){
      height: 4em;
      }
    @media only screen and (min-width: 992px){
      height: 5em;
     }
    `;

const Header = () =>(
    <Wrapper>
  <Logo src={logo} />
    </Wrapper>
)

export default Header;

import React from 'react';
import UnderLineSection from '../components/UnderLineSection';
import styled, {css} from 'styled-components';
import Dropdown from "../components/dropdown"


// style for heading component
const Wrapper = styled.header`
    width: 100%;
    padding: 1em;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;


const Header = () =>(
    <Wrapper>
    <Dropdown/>
    </Wrapper>
)

export default Header;

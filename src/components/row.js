import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from "gatsby";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media only screen and (min-width: 789px){
      flex-direction: row;
    }
`;



const Row = (props) => (
    <Wrapper>{props.children}</Wrapper>
)

export default Row;

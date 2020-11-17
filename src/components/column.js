import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from "gatsby";

const Wrapper = styled.div`
    max-width: 340px;
    width: 100%;
@media only screen and (min-width: 789px){
  width: auto;
  max-with: 50%;
}
@media only screen and (min-width: 992px){
    min-width: 550px;
  
    }
`;

const Column = (props) => (
    <Wrapper>{props.children}</Wrapper>
)

export default Column;

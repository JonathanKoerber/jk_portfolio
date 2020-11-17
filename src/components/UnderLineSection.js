import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.section`
    align-item: start;
    margin: 0 15% 0 15%;
    padding: 0;

`;

const Underline = styled.section`
    border-color: white;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`;



const UnderLineSection = (props) =>(

    <Wrapper>
      <Underline>
    {props.children}
      </Underline>
    </Wrapper>
)

export default UnderLineSection;

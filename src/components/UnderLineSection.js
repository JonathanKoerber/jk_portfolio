import React from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.section`
    align-item: start;
    margin: 5% 5% 5% 5%;
    padding: 0 0 2% 0;

    border-bottom-width: 1px;
    border-bottom-style: solid;
`;
const Text = styled.div`
    align-item: start;
    margin: 5% 0 5% 0;
    padding: 0 5% 2% 5%;
@media only screen and (min-width: 992px){
    width: 50%;

}
`;

const Underline = styled.section`
    border-bottom-color: #cbcbcb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`;



const UnderLineSection = (props) =>(

    <Wrapper>
    {props.children}

    </Wrapper>
)

export default UnderLineSection;

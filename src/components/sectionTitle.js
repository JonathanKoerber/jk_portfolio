import React from 'react';
import styled, {css} from 'styled-components';

const Title = styled.h3`
text-align: center;
fort-family: Times New Roman, serif;
font-size: 30px;
color: #000002;
font-weight: lighter;
margin: 0;
`;
const UnderLine = styled.div`
width: 4em;
height: .15em;
background-color: #111;
margin: 0 auto;
border-radius: 5px;
opacity: .5;
`

const SectionTitle = (props) => (
    <div>
    <Title>{props.title}</Title>
        <UnderLine/>
    </div>
)

export default SectionTitle;

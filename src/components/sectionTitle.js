import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from "gatsby";

const Title = styled.h3`
text-align: left;
fort-family: Times New Roman, serif;
font-size: 30px;
color: #000002;
font-weight: lighter;
margin: 0;
`;
const UnderLine = styled.div`
width: 4em;
height: .15em;
background-color: #00002;
margin: 0 auto;
border-radius: 5px;
opacity: .5;
`
const StyleLink = styled(Link)`
      text-decoration: none;
      color: white;
`

const SectionTitle = (props) => (
    <div>
    <Title><StyleLink target="blank" to={props.link}>{props.title}</StyleLink></Title>
        <UnderLine/>
    </div>
)

export default SectionTitle;

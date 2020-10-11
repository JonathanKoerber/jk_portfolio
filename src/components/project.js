import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';

import chainlink from '../images/chainlink.webp'
import headshot from '../images/headshot.png'
import SectionTitle from '../components/sectionTitle'
import Paragraph from '../components/paragraph'


const Wrapper = styled.section`
  position: relative;
  width: 50%;
  height: auto;
/* @media only screen and (min-width: 575.98px){
    margin-bottom: -.75%;
}
@media only screen and (min-width: 768px){
    margin-bottom: .-40%;
}
@media only screen and (min-width: 992px){
    width: 50%;
    height: auto;
    margin-bottom: -.2%;
} */
    `;

const Image = styled.img`
    width: 100%;
    height: auto;
    background-color: #000000;
    margin: 0;
    padding: 0;
    display: block;
@media only screen and (min-width: 992px){
}
    `;

const Content = styled.div`
   position: absolute;
   bottom: 0;
   left: 100%;
   right: 0;
   background-color: #06292e;
   overflow: hidden;
   width: 0;
   height: 100%;
   transition: .3s ease;
   ${Wrapper}:hover &{
     width: 100%;
     left: 0;
   }
`;
const FlexContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;

`;
const TextWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;

`;



function Project(props) {
    const project = props.project;
    const image = "https://react-flask-app.s3-us-west-2.amazonaws.com"+project.image;
return(
    <Wrapper>
        <Image src={chainlink}/>
        <Content>
        <FlexContainer>
          <SectionTitle title={project.title} link={project.href}/>
          <Paragraph text={project.description}/>
        </FlexContainer>
        </Content>
    </Wrapper>
)
}
export default Project;

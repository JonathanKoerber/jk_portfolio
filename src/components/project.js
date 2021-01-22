import React, {useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Header from "../components/header"
import SectionTitle from '../components/sectionTitle'
import Paragraph from '../components/paragraph'
import Column from '../components/column'


const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: inherit;
  padding: .5em 0 .5em 0;
  @media only screen and (min-width: 789px){
    padding: 0;
    width: 100%;
    height: inherit;
  }
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
    height: 100%;
    background-color: #000000;
    margin: 0;
    padding: 0;
    display: block;
@media only screen and (min-width: 992px){
}
    `;

const Content = styled.div`

@media only screen and (min-width: 789px){
   position: absolute;
   bottom: 0;     
   left: 100%;
   right: 0;
   background-color: #b1dec8;
   opacity: .8;
   overflow: hidden;
   width: 0;
   height: 0;
   transition: .2s ease;
     ${Wrapper}:hover &{
       width: 100%;
       height: 100%;
       left: 0;
     }
   }
`;
const FlexContainer=styled.div`
display: none;
@media only screen and (min-width: 789px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;
}
`;

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  padding: .5em 0 .5em 0;
  @media only screen and (min-width: 789px){
    display: none;
  }
`;



function Project(props) {
    const project = props.project;
    const image = "https://react-flask-app.s3-us-west-2.amazonaws.com"+project.image;
return(
    <Wrapper>
        <Image src={project.image}/>
        <Content>
        <FlexContainer>
          <SectionTitle title={project.title} link={project.href}/>
          <Paragraph text={project.description}/>
        </FlexContainer>
        </Content>
        <TextContainer>
        <Column>
          <SectionTitle title={project.title} link={project.href}/>
          <Paragraph text={project.description}/>
          </Column>
        </TextContainer>
    </Wrapper>
)
}
export default Project;

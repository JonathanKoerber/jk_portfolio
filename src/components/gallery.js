import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Project from "../components/project";
import Description from "../components/description";
import {chainlink} from "../images/chainlink.webp";
import UnderLineSection from "../components/UnderLineSection";
import SectionTitle from "../components/sectionTitle"

const Container = styled.div`
  margin: 5%;
  padding: 0;

`;
const Wrapper = styled.figure`
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
`;

const PortfolioTitle = styled(SectionTitle)`
  padding: 5%;
  text-align: center;
`;

const projects = [
        {"title": "Celys Portfolio",
          "image": "chainlink",
          "href": "http://ec2-34-210-61-167.us-west-2.compute.amazonaws.com/",
          "description":"2019 was the 2nd year Amazon celebrated Prime membership with an"+
          "exclusive Prime Day Concert. Featuring live performances by headliner, Taylor Swift, "+
          "Dua Lipa, Sza, Becky G, and hosted by Jane Lynch. With a large budget and multiple stakeholders "+
          "including Amazon Music and Amazon Video, this concert was to be broadcast live on Amazon Video. "+
          "The venue itself allowed entrance to Prime members by invitation only at absolutely no cost with"}
    ,
        {"title": "WGU Capstone",
         "image": "headshot",
         "href": "#",
         "description":"2019 was the 2nd year Amazon celebrated Prime membership with an"+
         "exclusive Prime Day Concert. Featuring live performances by headliner, Taylor Swift, "+
         "Dua Lipa, Sza, Becky G, and hosted by Jane Lynch. With a large budget and multiple stakeholders "+
         "including Amazon Music and Amazon Video, this concert was to be broadcast live on Amazon Video. "+
         "The venue itself allowed entrance to Prime members by invitation only at absolutely no cost with"}
         ,
        {"title": "ADA Bundler",
         "image": "chainlink",
         "href": "#",
         "description":"2019 was the 2nd year Amazon celebrated Prime membership with an"+
         "exclusive Prime Day Concert. Featuring live performances by headliner, Taylor Swift, "+
         "Dua Lipa, Sza, Becky G, and hosted by Jane Lynch. With a large budget and multiple stakeholders "+
         "including Amazon Music and Amazon Video, this concert was to be broadcast live on Amazon Video. "+
         "The venue itself allowed entrance to Prime members by invitation only at absolutely no cost with"}
]

const Gallery=()=>(

          <Container>

              <PortfolioTitle title="Portfolio"/>

              <Wrapper>
                  {projects.map((p, index)=>{
                          return <Project project={p} />
                  })}
                  </Wrapper>
          </Container>

      );



export default Gallery;

import React, {Component, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import Project from "../components/project";
import Description from "../components/description";
import UnderLineSection from "../components/UnderLineSection";
import SectionTitle from "../components/sectionTitle";
import Paragraph from "../components/paragraph";
import Title from "../components/title";
import Github from "../components/github";
import Row from "../components/row";
import Column from "../components/column";

const Container = styled.div`
  margin: 0;
  padding: 5% 0 5% 0;
`;

const Wrapper = styled.figure`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 789px){
    flex-flow: row wrap;
  }
`;

const PortfolioTitle = styled(SectionTitle)`
  padding: 5%;
  text-align: center;
`;
const ParaRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const projects = [
        {"title": "Celys Portfolio",
          "image": "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot_2020-10-24 React App.jpg",
          "href": "http://ec2-34-210-61-167.us-west-2.compute.amazonaws.com/",
          "description":"This is a personal portfolio site displaying Cely Henriquez design work. The site was "+
          "build off of her design and all copy and images were provided. The application uses a Flask api to "+
          "serve JSON files to a REACT UI. Content for the application is stored in a S3 bucket."}
    ,
        {"title": "WGU Capstone",
         "image": "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot_2020-10-24+Home+Page(1).png",
         "href": "http://ec2-34-211-147-138.us-west-2.compute.amazonaws.com/",
         "description":"I built this application for my capstone project for WGU. "+
         "This application is based on reddit and allow user some of the basic functionality. Users can register "+
         "manage there account, create post comments and threads as well as manage there threads. It was written in "+
         "python using the Flask frame work storage using SQLite database. Search is provided through connecting with "+
         "a AWS EC2 instance running Elastic Search."}
         ,
        {"title": "ADA Bundler",
         "image": "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot+from+2020-10-06+07-40-52.png",
         "href": "https://github.com/JonathanKoerber/ADADirBundler",
         "description":"This is CLI, written using Node.js, converts a  directory exported from Adobe Animate"+
         "with its image resource as well as the logic for the animation for separate files. This tool converts "+
         "the images into base64 and combines them and the animation logic in one HTML file. The specific use case "+
         "of this application is to prepare animation to run in an environment which prevents the animation from "+
         "calling outside resources."}
]

const Gallery=()=>(

          <Container>
          <Row>
            <Column>
              <SectionTitle title="portfolio"/>
            </Column>
            <Column>
              <Paragraph text="Here are a few of my projects."/>
              <ParaRow>
              <Paragraph text="There's more here."/>
              <Github />
              </ParaRow>
            </Column>
          </Row>
              <Wrapper>
                  {projects.map((p, index)=>{
                          return <Project project={p} />
                  })}
                  </Wrapper>
          </Container>

      );



export default Gallery;

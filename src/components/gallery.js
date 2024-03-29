import React from "react";
import styled from "styled-components";
import Project from "../components/project";
import SectionTitle from "../components/sectionTitle";
import Github from "../components/github";
import Column from "../components/column";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const Wrapper = styled.figure`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 789px) {
    flex-flow: row wrap;
  }
`;

const Text = styled.p`
  font-family: Helvetica Nue, sans-serif;
  font-size: 1.1em;
  color: #000;
  text-align: left;
`;

const projects = [
  // {
  //   title: "",
  //   image: '',
  //   href: "",
  //   description: "",
  // },
  {
    title: "TreeMama/iSea Tree-React-Prototype",
    image:
      "https://avatars.githubusercontent.com/u/62637055?s=460&u=b364b454161f9ee86e0be099ce1ff4ce6f80b4ba&v=4",
    href: "https://github.com/TreeMama/iSeaTree-React-Prototype",
    description:
      "Here is an open-source project using React Native with TypeScript and Expo that I contribute to. " +
      "The app is designed for educational use for middle and high school students. Users can identify trees and gathers " +
      "environmental data about the trees that they find. ",
  },
  {
    title: "Celys Portfolio",
    image:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot_2020-10-24 React App.jpg",
    href: "https://celyhenriquez.gatsbyjs.io/",
    description:
      "Here is the personal portfolio site I built for Cely Henriquez to display her design work. " +
      "I created the site using her design and content. The application uses a Flask back end to serve JSON files to a REACT UI. ",
  },
  {
    title: "WGU Capstone",
    image:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot_2020-10-24+Home+Page(1).png",
    href: "http://192.81.133.218/",
    description:
      "I built this application for my capstone project for WGU. It is modeled after Reddit and provides some of the basic functionality. " +
      "Users can register, manage their accounts, create post and comments and threads. It uses the Flask framework with Handlebars to " +
      "build UI templates with an SQLite database.",
  },
  {
    title: "ADA Bundler",
    image:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot+from+2020-10-06+07-40-52.png",
    href: "https://github.com/JonathanKoerber/ADADirBundler",
    description:
      "This is CLI, written using Node.js, converts a  directory exported from Adobe Animate" +
      "with its image resource as well as the logic for the animation for separate files. This tool converts " +
      "the images into base64 and combines them and the animation logic in one HTML file. The specific use case " +
      "of this application is to prepare an animation to run in an environment which prevents the file from " +
      "calling outside resources.",
  },
];

const Gallery = () => (
  <Container>
    <Column>
      <SectionTitle title="Portfolio" />
      <Text>Here are some of the projects that I have worked on. I’m a curious person by nature and am always looking for projects to expand my skill set. So check out my GitHub to see more of my work. Since enrolling at City University of Seattle, I’m back to writing papers, which has been fun! I’ve got one on data structures below.</Text>
      <Github />
    </Column>
    <Wrapper>
      {projects.map((p, index) => {
        return <Project project={p} />;
      })}
    </Wrapper>
  </Container>
);

export default Gallery;

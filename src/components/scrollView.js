import React from "react";
import styled from "styled-components";

const projects = [
  {
    title: "Celys Portfolio",
    image:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot_2020-10-24 React App.jpg",
    href: "http://ec2-34-210-61-167.us-west-2.compute.amazonaws.com/",
    description:
      "Here is the personal portfolio site I built for Cely Henriquez to display her design work. " +
      "I created the site using her design and content. The application uses a Flask back end to serve JSON files to a REACT UI. ",
  },
  {
    title: "WGU Capstone",
    image:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/Screenshot_2020-10-24+Home+Page(1).png",
    href: "http://ec2-34-211-147-138.us-west-2.compute.amazonaws.com/",
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
let background = projects[0].image;
const Container = styled.div`
  background-image: url(background);
  padding: 0;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const Item = styled.li`
  padding: 0;
`;

//chancge container backgound
function changeBackground(image) {
  background = image;
}
const list = projects.map((project, index) => (
  <Item key={index} onMouseOver={changeBackground(project.image)}>
    {project.title}
  </Item>
));
const ScrollView = () => (
  <Container>
    <List>{list}</List>
  </Container>
);
export default ScrollView;

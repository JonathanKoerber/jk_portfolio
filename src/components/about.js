import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import Hero from "../components/hero";
import Gallery from "../components/gallery";
import Footer from "../components/footer";
import Info from "../components/info";

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 99;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 1%;
  width: 100%;
  height: auto;
  justify-content: center;
  /* accent color => #4d553c  */
  @media only screen and (min-width: 992px) {
  }
`;

const Image = styled.img`
  width: 100%;
  height: inherit;
  opacity: 0.6;
  background-color: #000000;
  object-fit: cover;
  object-position: center;
`;
const About = () => (
  <Wrapper>
    <Container>
      <Header />
      <Hero />
      <Info />
      <Gallery />
    </Container>
  </Wrapper>
);
export default { About };

import React from "react";
import styled from "styled-components";

// style for heading component
const Wrapper = styled.footer`
  height: auto;
  padding: 0;
  margin: 1em;
`;
const Email = styled.h5`
  font-size: 2em;
  font-family: "Helvetica Nue", sans-serif;
  font-weight: bolder;
  font-size: 1em;
  color: #5ba491;
`;
const Social = styled.h6`
  font-family: "Helvetica Nue", sans-serif;
  font-size: 0.8em;
  font-weight: lighter;
  color: #457b6d;
`;
const Link = styled.a`
  text-decoration: none;
  color: #457b6d;
`;

const Footer = () => (
  <Wrapper>
    <Email>Say Hello</Email>
    <Social>
      <Link href="mailto:jonathankoerber@gmail.com" target="_blank">
        jonathankoerber@gmail.com
      </Link>
    </Social>
    <Social>
      <Link href="https://github.com/JonathanKoerber" target="_blank">
        github
      </Link>
    </Social>
    <Social>
      <Link
        href="https://www.linkedin.com/in/jonathan-koerber-864b36123/"
        target="_blank"
      >
        linkedin
      </Link>
    </Social>
  </Wrapper>
);

export default Footer;

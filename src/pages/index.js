import React from "react";
import { GlobalStyle } from "../components/theme/globalStyle";
import Header from "../components/header";
import Hero from "../components/hero";
import Info from "../components/info";
import Nav from "../components/nav";
import Main from "../components/main";
const buttons = [
  { text: "Resume", link: "/content/resume", key: "resume" },
  { text: "Projects", link: "/portfolio", key: "projects" },
];

export default function About() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Hero />
      <Main>
        <Info />
      </Main>
      <Nav buttons={buttons} />
    </div>
  );
}

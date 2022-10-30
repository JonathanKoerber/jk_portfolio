import React from "react"
import { GlobalStyle } from "../components/theme/globalStyle"
import Header from "../components/header"
import Hero from "../components/hero"
import Info from "../components/info"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Main from "../components/main"
const buttons = [
  { text: "Home", link: "/" },
  { text: "What I've Been Up To", link: "/milestones" },
  { text: "Projects", link: "/portfolio" },
]
const content = [
  {
    name: "Jonathan Koerber",
    title: "Software Developer",
    text:
      "I am naturally curious, always trying to understand the details behind how systems work. To gain more experience writing code and learning, I have also sought out an opportunity to contribute to open-source projects. One project I contributed to, iSeaTree, is REACT Native app used to identify trees. With this group, I would contribute to UI components and lead hackathons that Democracy Lab hosted. While I am always looking for opportunities to extend my skills, I am currently focusing on deep diving into Python using Flask and Django to build API and back-end apps and using REACT in the front end.",
    photo:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg",
  },
]
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
      <Footer />
    </div>
  )
}

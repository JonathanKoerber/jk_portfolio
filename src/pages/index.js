import React from "react"
import { GlobalStyle } from "../components/theme/globalStyle"
import Header from "../components/header"
import Hero from "../components/hero"
import Info from "../components/info"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Main from "../components/main"
const buttons = [
  { text: "What I've Been Up To", link: "/milestones" },
  { text: "Projects", link: "/portfolio" },
]
const content = [
  {
    name: "Jonathan Koerber",
    title: "Software Developer",
    text:
      "\tCurrently, I have been contributing to an open-source app using REACT Native with TypeScript.  The first feature that I added was'+" +
      " a location feature for iSeaTree using Expo Location API, making the app usable in the US and Canada. iSeaTree is a free and intuitive mobile " +
      "application that helps you identify and record tree species. Being part of iSeaTree, has allowed me to dive deep into a code base and impact users' experience. " +
      "I look forward to bring the same excitement forward to future endeavors.\n" +
      "\tAt Western Governors University, I studied independently to gaining my Bachelors in Software Development. Starting out using best practices in software to design " +
      "static web applications, then I progressed to build mobile apps using Android with Java. To continue to grow as a developer I built applications in React and Gatsby " +
      "and set aside time to continually make progress on freeCodeCamp an online curriculum both in Python and JavaScript.",
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

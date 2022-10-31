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

import React from "react"
import {GlobalStyle} from "../components/theme/globalStyle";
import Header from "../components/header"
import Hero from "../components/hero";
import Nav from "../components/nav";
import Main from "../components/main";
import Gallery from "../components/gallery"
import Footer from "../components/footer"


const buttons =[
  {'text':'Home', 'link':'/'},
  {'text':'About', 'link':'/about'},
  {'text':'What I\'ve Been Up To', 'link':'/milestones'}

]

export default function Portfolio() {
  return (
    <div>
    <GlobalStyle/>
    <Header/>
      <Hero />
      <Main>
      <Gallery />
      </Main>
      <Nav buttons={buttons}/>
      <Footer/>
      </div>
  )
}

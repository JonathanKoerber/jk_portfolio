import React from "react"
import styled, {css} from "styled-components";
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
const content = [
   {"name": "Jonathan Koerber's portfolio",
   "title":"Software Developer",
   "text": "I am a Software Developer based in the greater Seattle area. "+
   "Most recently I have been building web apps using Python with the Flask framework and JavaScript using React. ",
   "photo":"https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg" }
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

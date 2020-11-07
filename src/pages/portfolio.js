import React from "react"
import styled, {css} from "styled-components";
import {GlobalStyle} from "../components/theme/globalStyle";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Footer from "../components/footer"

const buttons =[
  {'text':'About', 'link':'about'},
  {'text':'What I\'ve Been Up To', 'link':'timeline'},
  {'text':'Projects', 'link':'portfolio'}
]
const content = [
   {"name": "Jonathan Koerber's portfolio",
   "title":"Software Developer",
   "text": "I am a Software Developer based in the greater Seattle area. "+
   "Most recently I have been building web apps using Python with the Flask framework and JavaScript using React. ",
   "photo":"https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg" }
 ]
export default function About() {
  return (
    <div>
    <GlobalStyle/>
      <Hero />
      <Nav buttons={buttons}/>
      <Footer/>
      </div>
  )
}

import React from "react"
import styled, {css} from "styled-components";
import {GlobalStyle} from "../components/theme/globalStyle";
import Header from "../components/header"
import Hero from "../components/hero";
import Nav from "../components/nav";
import Main from "../components/main";
import Timeline from "../components/timeLine";
import Footer from "../components/footer";

const buttons =[
  {'text': "Home", 'link':'/'},
  {'text':'About', 'link':'/about'},
  {'text':'Projects', 'link':'/portfolio'}
]
const content = [
   {"name": "Jonathan Koerber What I've Been Up To",
   "title":"Software Developer",
   "text": "I am a Software Developer based in the greater Seattle area. "+
   "Most recently I have been building web apps using Python with the Flask framework and JavaScript using React. ",
   "photo":"https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg" }
 ]
export default function Milestones() {
  return (
    <div>
    <GlobalStyle/>
    <Header/>
      <Hero />
      <Main>
      <Timeline/>
      </Main>
      <Nav buttons={buttons}/>
      <Footer/>
      </div>
  )
}

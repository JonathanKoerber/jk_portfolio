import React from "react"
import {GlobalStyle} from "../components/theme/globalStyle";
import Header from "../components/header";
import Hero from "../components/hero";
import Info from "../components/info";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Main from "../components/main";
const buttons =[
  
  {'text':'What I\'ve Been Up To', 'link':'/milestones'},
  {'text':'Projects', 'link':'/portfolio'}
]
const content = [
   {"name": "Jonathan Koerber",
   "title":"Software Developer",
   "text": "I am a Software Developer based in the greater Seattle area. "+
   "Most recently I have been building web apps using Python with the Flask framework and JavaScript using React. ",
   "photo":"https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg" }
 ]
export default function About() {
  return (
    <div>
    <GlobalStyle/>
    <Header/>
      <Hero />
      <Main>
      <Info/>
      </Main>
      <Nav buttons={buttons}/>
      <Footer/>
      </div>
  )
}

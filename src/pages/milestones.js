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
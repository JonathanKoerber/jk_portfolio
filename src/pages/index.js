import React from "react"
import styled, { css} from "styled-components";
import {GlobalStyle} from "../components/theme/globalStyle";
import Header from "../components/header";
import Hero from "../components/hero";
import Main from "../components/main";
import Intro from "../components/intro";
import Nav from "../components/nav";
import Footer from "../components/footer";


const buttons =[
  {'text':'About', 'link':'/about'},
  {'text':'What I\'ve Been Up To', 'link':'/milestones'},
  {'text':'Projects', 'link':'/portfolio'}
]
export default function UsersList() {
  return (
    <div>
    <GlobalStyle/>
    <Header/>
      <Hero />
      <Main>
    <Intro />
      </Main>
      <Nav buttons={buttons}/>
      <Footer/>
</div>

  )
}

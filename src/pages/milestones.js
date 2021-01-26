import React from "react"
import styled, {css} from "styled-components";
import {GlobalStyle} from "../components/theme/globalStyle";
import Header from "../components/header"
import Logo from "../components/logo";
import FixedNav from "../components/fixedNav";
import Main from "../components/main";
import Timeline from "../components/timeLine";
import Footer from "../components/footer";

const buttons =[
  {'text':'Home', 'link':'/'},
  {'text':'Projects', 'link':'/portfolio'}
]

export default function Milestones() {
  return (
    <div>
    <GlobalStyle/>
    <Header/>
    <Logo/>
      <Main>
      <Timeline/>
      </Main>
      <FixedNav buttons={buttons}/>

      </div>
  )
}

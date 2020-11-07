import React from "react"
import styled, { css} from "styled-components"
import {GlobalStyle} from "../components/theme/globalStyle"
import Header from "../components/header"
import About from "../components/about"
import Hero from "../components/hero"
import Nav from "../components/nav"
import Footer from "../components/footer"
import {Link} from "gatsby"



const buttons =[
  {'text':'About', 'link':'about'},
  {'text':'What I\'ve Been Up To', 'link':'timeline'},
  {'text':'Projects', 'link':'portfolio'}
]
export default function UsersList() {
  return (
    <div>
    <GlobalStyle/>
      <Hero />
      <Nav buttons={buttons}/>
      <Footer/>
</div>

  )
}

import React from "react"
import styled from "styled-components"
import Button from "../components/button"
import Row from "../components/row"

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0),
    rgba(144, 176, 148, 1)
  );
`
const Uderline = styled.div`
  width: 100%;
  margin: 0 15% 0 15%;
  border-color: white;
  border-top-width: 1px;
  border-top-style: solid;
`
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
  height: min-content;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5em;
  opacity: 7;
`
const VertLine = styled.div`
  height: 2em;
  width: 1px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
`

const FixedNav = props => (
  <div>
    <Wrapper>
      <Row>
        <Uderline />
      </Row>
      <VertLine />
      <Container>
        <Row>
          {props.buttons.map((c, index) => {
            return <Button link={c.link} text={c.text} />
          })}
        </Row>
      </Container>
    </Wrapper>
  </div>
)

export default FixedNav

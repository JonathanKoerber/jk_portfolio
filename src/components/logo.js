import React from "react"
import styled from "styled-components"
import Row from "../components/row"
import Column from "../components/column"


const Wrapper = styled.article`
  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
  padding: 1em;
  position: fixed;
  z-index: 1;
  background-image: linear-gradient(
    180deg,
    rgba(144, 176, 148, 1),
    rgba(0, 0, 0, 0)
  );
`
const ImageWrapper = styled.div`
  height: 0.5em;
  width: 0.5em;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  opacity: 7;
  padding: 0.2em;
  margin-right: auto;
  margin-left: auto;
`
const ImageOuterWrapper = styled.div`
  width: min-content;
  hight: max-content;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  opacity: 7;
  margin-right: auto;
  margin-left: auto;
  padding: 0.7em;
`

const VertLine = styled.div`
  height: 2em;
  width: 1px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
`

const HorzLine = styled.div`
  border-color: white;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  margin: 0 15% 0 15%;
`
const Hero = () => (
  <Wrapper>
    <Row>
      <Column>
        <ImageOuterWrapper>
          <ImageOuterWrapper>
            <ImageWrapper></ImageWrapper>
          </ImageOuterWrapper>
        </ImageOuterWrapper>
      </Column>
    </Row>
    <VertLine />
    <HorzLine />
  </Wrapper>
)
export default Hero

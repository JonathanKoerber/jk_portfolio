import React from "react"
import styled from "styled-components"
import SectionTitle from "../components/sectionTitle"
import Paragraph from "../components/paragraph"
import Column from "../components/column"

const Wrapper = styled.section`
  position: relative;

  height: inherit;
  padding: 1em;
  margin: 2em;
  border-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 1em;
  @media only screen and (min-width: 789px) {
    padding: 0;
    width: 100%;
    height: inherit;
  }
  /* @media only screen and (min-width: 575.98px){
    margin-bottom: -.75%;
}
@media only screen and (min-width: 768px){
    margin-bottom: .-40%;
}
@media only screen and (min-width: 992px){
    width: 50%;
    height: auto;
    margin-bottom: -.2%;
} */
`

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  padding: 1em;
  display: block;
  @media only screen and (min-width: 789px) {
    width: 50%;
  }
`

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  padding: 0.5em 0 0.5em 0;
  @media only screen and (min-width: 789px) {
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 789px) {
    flex-direction: row;
  }
`

function Project(props) {
  const project = props.project
 
  return (
    <Wrapper>
      <Row>
        <Image src={project.image} />
        <TextContainer>
          <Column>
            <SectionTitle title={project.title} link={project.href} />
            <Paragraph text={project.description} />
          </Column>
        </TextContainer>
      </Row>
    </Wrapper>
  )
}
export default Project

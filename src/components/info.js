import React from "react"
import styled, { css } from "styled-components"
import UnderLineSection from "../components/UnderLineSection"
import SectionTitle from "../components/sectionTitle"
import Paragraph from "../components/paragraph"
import Title from "../components/title"

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 1em;
  @media only screen and (min-width: 789px) {
    flex-direction: row;
  }
`

const Column = styled.div`
  max-width: 340px;
  width: 100% @media only screen and (min-width: 575px) {
    max-width: 400px;
  }
  @media only screen and (min-width: 789px) {
    width: 50%;
  }
  @media only screen and (min-width: 992px) {
    max-width: 550px;
  }
`
const blurb = [
  {
    name: "Jonathan Koerber",
    title: "Software Developer:",
    text:
    "I am naturally curious, always trying to understand the details behind how systems work. To gain more experience writing code and learning, I have also sought out an opportunity to contribute to open-source projects. One project I contributed to, iSeaTree, is REACT Native app used to identify trees. With this group, I would contribute to UI components and lead hackathons that Democracy Lab hosted. While I am always looking for opportunities to extend my skills, I am currently focusing on deep diving into Python using Flask and Django to build API and back-end apps and using REACT in the front end.",
    photo:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg",
  },
]
const content = [
  {
    title: "Education",
    text: "Western Govenors Univerity: BA Software Development",
  },
  {
    title: "Certifications",
    text:
      "• CompTIA A+\n" +
      " • CompTIA Project+\n" +
      "• CIW Advanced HTML5 and CSS3 Specialist\n" +
      "• Microsoft Database MTA-396\n" +
      "• ITIL Foundations\n",
  },
]
const Info = props => (
  <div>
    <Row>
      <Title text="Jonathan Koerber" />
    </Row>
    {blurb.map((c, index) => {
      return (
        <Row>
          <Column>
            <SectionTitle title={c.title} />
          </Column>
          <Column>
            <Paragraph text={c.text} />
          </Column>
        </Row>
      )
    })}
    <Row>
      {content.map((c, index) => {
        return (
          <Column>
            <SectionTitle title={c.title} />
            <Paragraph text={c.text} />
          </Column>
        )
      })}
    </Row>
  </div>
)

export default Info

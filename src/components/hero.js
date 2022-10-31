import React from "react"
import styled from "styled-components"
import Row from "../components/row"
import Column from "../components/column"
import UnderLineSection from "../components/UnderLineSection"
import Photo from "../components/photo"


const VertLine = styled.div`
  height: 4em;
  width: 1px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
`

const content = [
  {
    name: "Jonathan Koerber",
    title: "Software Developer",
    text:
      "I am a Software Developer based in the greater Seattle area. " +
      "I am a Software Developer based in the greater Seattle area. I graduated from West Governors University with a Bachelors in Software Development in the Summer of 2020. I have recently been building web apps using Python with the Flask framework and JavaScript using React. ",
    photo:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/2020-11-14-095538_2.jpg",
  },
]
const Hero = () => (
  <div>
    <UnderLineSection>
      <Row>
        {content.map((c, index) => {
          return (
            <Column>
              <Photo url={c.photo} />
            </Column>
          )
        })}
      </Row>
      <VertLine />
    </UnderLineSection>
  </div>
)
export default Hero

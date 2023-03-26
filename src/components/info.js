import React from "react";
import styled from "styled-components";

import SectionTitle from "../components/sectionTitle";
import Paragraph from "../components/paragraph";
import Title from "../components/title";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0.5em;
  @media only screen and (min-width: 789px) {
    flex-direction: row;
  }
`;
const ColumnBlurb = styled.div`
  max-width: 600px;
  width: 100% @media only screen and (min-width: 575px) {
    max-width: 400px;
  }
  @media only screen and (min-width: 789px) {
    width: 75%;
  }
  @media only screen and (min-width: 992px) {
    max-width: 700px;
  }
`;
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
`;
const blurb = [
  {
    name: "Jonathan Koerber",
    title: "Software Developer:",
    text: "Hello, I'm excited to connect and learn about your technology needs.  I'm naturally curious about systems, I like to focus on why, what, and who then make a plan for how they will be built. By taking a rigorous approach to all stages of development I can deliver a versatile product to meet clients' needs.",
    photo:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg",
  },
];
const content = [
  {
    title: "Education",
    text: "City University Seattle: MSCS -enroled",
    text2: "Western Govenors Univerity: BS Software Development",
  },
  {
    title: "Certifications",
    text: "• IT Automation with Python Google •  Scientific Computing with Python FFC • JavaScript Algorithms and Data Structures FFC • CIW Advanced HTML5 and CSS3 Specialist • Microsoft MTA-396 Database Foundations • ITIL Foundations •  CompTIA Project+",
  },
];
const Info = (props) => (
  <div>
    <Row>
      <Title text="Jonathan Koerber" />
    </Row>
    {blurb.map((c, index) => {
      return (
        <Row>
          <ColumnBlurb>
            <Paragraph text={c.text} key={index} />
          </ColumnBlurb>
        </Row>
      );
    })}
    <Row>
      {content.map((c, index) => {
        return (
          <Column>
            <SectionTitle title={c.title} />
            <Paragraph text={c.text} />
            {c.text2 ? <Paragraph text={c.text2} /> : <></>}
          </Column>
        );
      })}
    </Row>
  </div>
);

export default Info;

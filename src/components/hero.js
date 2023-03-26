import React from "react";
import styled from "styled-components";
import Row from "../components/row";
import Column from "../components/column";
import UnderLineSection from "../components/UnderLineSection";
import Photo from "../components/photo";

const VertLine = styled.div`
  height: 4em;
  width: 1px;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
`;

const content = [
  {
    name: "Jonathan Koerber",
    title: "Software Developer",
    text:
      "I am a Software Developer based in the greater Seattle area. " +
      "Hello, I'm excited to connect and learn about your technology needs. I'm naturally curious about systems, I like to focus on why, what, and who then make a plan for how they will be built. By taking a rigorous approach to all stages of development I can deliver a versatile product to meet clients' needs.",
    photo:
      "https://jk-portfolio.s3-us-west-2.amazonaws.com/2020-11-14-095538_2.jpg",
  },
];
const Hero = () => (
  <div>
    <UnderLineSection>
      <Row>
        {content.map((c, index) => {
          return (
            <Column>
              <Photo url={c.photo} key={index} />
            </Column>
          );
        })}
      </Row>
      <VertLine />
    </UnderLineSection>
  </div>
);
export default Hero;

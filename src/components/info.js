import React from 'react';
import styled, {css} from 'styled-components';
import UnderLineSection from '../components/UnderLineSection';
import SectionTitle from '../components/sectionTitle';
import Paragraph from '../components/paragraph';
import Title from '../components/title';


const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 1em;
    @media only screen and (min-width: 789px){
      flex-direction: row;
    }
`;

const Column = styled.div`
    max-width: 340px;
    width: 100%
@media only screen and (min-width: 575px){
    max-width: 400px;
}
@media only screen and (min-width: 789px){
  width: 50%;
}
@media only screen and (min-width: 992px){
    max-width: 550px;
    }
    `;
const blurb = [
      {"name": "Jonathan Koerber",
      "title":"Software Developer:",
      "text": "I am a Software Developer based in the greater Seattle area. "+
      "Most recently I have been building web apps using Python with the Flask framework and JavaScript using React. ",
      "photo":"https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg" }
    ]
const content = [
  {"title":"Education",
  "text":"Western Govenors Univerity: BA Software Development"},
  {"title":"Certifications",
  "text":  "• CompTIA A+\n"+
  " • CompTIA Project+\n"+
  "• CIW Advanced HTML5 and CSS3 Specialist\n"+
  "• Microsoft Database MTA-396\n"+
  "• ITIL Foundations\n"}
];
const Info = (props) => (
<div>
<Row>
  <Title text="Jonathan Koerber"/>
</Row>
  {blurb.map((c, index)=>{
    return(
      <Row>
    <Column>
      <SectionTitle title={c.title}/>
    </Column>
    <Column>
      <Paragraph text={c.text}/>
    </Column>
    </Row>
  )
  })}
    <Row>
    {content.map((c, index)=>{
      return(
      <Column>
        <SectionTitle title={c.title}/>
        <Paragraph text={c.text}/>
      </Column>
    )
    })}
    </Row>
</div>
)

export default Info;

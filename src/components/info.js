import React from 'react';
import styled, {css} from 'styled-components';
import UnderLineSection from '../components/UnderLineSection';
import SectionTitle from '../components/sectionTitle';
import Paragraph from '../components/paragraph';


const Row = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const content = [
  {"title":"Education",
  "text":"Western Govenors Univerity: BA Software"},
  {"title":"Certifications",
  "text":  "• CompTIA A+\n"+
  " • CompTIA Project+\n"+
  "• CIW Advanced HTML5 and CSS3 Specialist\n"+
  "• Microsoft Database MTA-396\n"+
  "• ITIL Foundations\n"}
];
const Info = (props) => (

  <UnderLineSection>
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
  </UnderLineSection>
)

export default Info;

import React from 'react';
import styled, {css} from 'styled-components';
import UnderLineSection from '../components/UnderLineSection';
import SectionTitle from '../components/sectionTitle';
import Paragraph from '../components/paragraph';
import Row from '../components/row';
import Column from '../components/column';
import Title from '../components/title';


const WideColumn = styled(Column)`
  width: 100%;
`;
const blurb = [
      {"name": "Jonathan Koerber",
      "title":"Software Developer:",
      "text": "I am a Software Developer based in the greater Seattle area. I graduated "+
      "from West Governors University with a Bachelors in Software Development in the Summer of 2020. "+
      "Most recently I have been building web apps using Python with the Flask framework and JavaScript using React.  ",
      "photo":"https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg" }
    ]

const Intro = (props) => (
<div>
<Row>
  <Title text="Jonathan Koerber"/>
</Row>
  {blurb.map((c, index)=>{
    return(
      <Row>
      <Paragraph text={c.text}/>
    </Row>
  )
  })}

</div>
)

export default Intro;

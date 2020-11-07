import React from 'react';
import styled, {css} from 'styled-components';
import headshot from '../images/headshot.png';
import Title from '../components/title';
import SectionTitle from '../components/sectionTitle';
import Paragraph from '../components/paragraph';
import Row from '../components/row';
import Column from '../components/column'
import UnderLineSection from '../components/UnderLineSection'
import Photo from '../components/photo'



const T= styled.h1`
    font-family: "Times New Roman", serif;
    align-self: left;
    font-size: 1.5em;
    font-weight: bolder;
    color: #000;
@media only screen and (min-width: 992px){
    font-size: 3em;
    }
    `;

  const VertLine = styled.div`
    height: 7em;
    width: 1px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
  `;

  const content = [
    {"name": "Jonathan Koerber",
    "title":"Software Developer",
    "text": "I am a Software Developer based in the greater Seattle area. "+
    "Most recently I have been building web apps using Python with the Flask framework and JavaScript using React. ",
    "photo":"https://jk-portfolio.s3-us-west-2.amazonaws.com/20201025_121900.jpg" }
  ]
  const Hero = () =>(
    <div>
<UnderLineSection>
    <Row>
      {content.map((c, index)=>{
        return(
        <Column>
          <Photo url={c.photo}/>
        </Column>
      )
      })}
  </Row>
  <VertLine/>
</UnderLineSection>
<UnderLineSection>
  <Row>
     { content.map((c, index)=>{
              return (
        <Column>
        <Title text={c.name}/>
        </Column>

      )
      })}
    </Row>
</UnderLineSection>
<VertLine/>

</div>

  )
export default Hero;

import React from 'react';
import styled, {css} from 'styled-components';
import headshot from '../images/headshot.png'
import SectionTitle from '../components/sectionTitle'
import Paragraph from '../components/paragraph'
const Photo = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    padding:10% 20% 10% 30%;
  `;

const Title = styled.h1`
    font-family: "Times New Roman", serif;
    align-self: left;
    font-size 1.5em;
    font-weight: bolder;
    color: #111;
    padding: 4%%;
@media only screen and (min-width: 992px){
    font-size: 3em;
    }
    `;
const Text = styled.p`
    font-family: "Helvetica Nue", sans-serif;
    color: white;
    font-size: .8em;
@media only screen and (min-width: 992px){
    font-size: 1em;
    }
    `;
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
    {"name": "Jonathan Koerber",
    "title":"Software Developer",
    "text": "I am a full stack developer. Bellow is a sample of projects that I have recently compleeted.",
    "photo":"#" }
  ]
  const Hero = () =>(

    <Row>
     { content.map((c, index)=>{
              return (
        <Column>
        <Title>{c.name}</Title>
         <SectionTitle title={c.title}/>

        <Paragraph text={c.text}/>
        </Column>
        <Column>
            <Photo src={headshot} />
        </Column>
      )
        })}
    </Row>

  )
export default Hero;

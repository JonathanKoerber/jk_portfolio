import React from 'react';
import styled, {css} from 'styled-components';
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
    const ImageWrapper = styled.div`
      height: 3em;
      width: 3em;
      border-color: #fff;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      opacity: 7;
      padding: .5em;
      margin-right: auto;
      margin-left: auto;
    `;
    const ImageOuterWrapper = styled.div`
      width: min-content;
      hight: max-content;
      border-color: #fff;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      opacity: 7;
      margin-right: auto;
      margin-left: auto;
      padding: 1em;
    `;
    const Line = styled.div`
      with:.4em;
      height: 30%;
      color: #fff;
    `;
  const VertLine = styled.div`
    height: 3em;
    width: 1px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
  `;


const Hero = () =>(
<UnderLineSection>
  <Row>
      <Column>
      <ImageOuterWrapper>
      <ImageOuterWrapper>
      <ImageWrapper>

      </ImageWrapper>
      </ImageOuterWrapper>
        </ImageOuterWrapper>
      </Column>

</Row>
<VertLine/>
</UnderLineSection>
)
export default Hero;

import React from 'react';
import styled, {css} from 'styled-components';
import Title from '../components/title';
import SectionTitle from '../components/sectionTitle';
import Paragraph from '../components/paragraph';
import Row from '../components/row';
import Column from '../components/column'
import UnderLineSection from '../components/UnderLineSection'
import Photo from '../components/photo'


const Wrapper = styled.article`
  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
  padding: 1em;
  position: fixed;
  z-index: 1;
  background-image: linear-gradient(180deg, rgba(144,176,148,1), rgba(0,0,0,0));

    `;
    const ImageWrapper = styled.div`
      height: .5em;
      width: .5em;
      border-color: #fff;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      opacity: 7;
      padding: .2em;
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
      padding: .7em;
    `;
    const Line = styled.div`
      with:.4em;
      height: 30%;
      color: #fff;
    `;
  const VertLine = styled.div`
    height: 2em;
    width: 1px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
  `;

  const HorzLine = styled.div`
      border-color: white;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      margin: 0 15% 0 15%;
  `;
const Hero = () =>(
  <Wrapper>
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
<HorzLine/>
</Wrapper>
)
export default Hero;

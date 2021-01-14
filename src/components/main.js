import React from 'react';
import styled, {css} from 'styled-components';
import Title from '../components/title';
import SectionTitle from '../components/sectionTitle';
import Paragraph from '../components/paragraph';
import Row from '../components/row';
import Column from '../components/column'
import UnderLineSection from '../components/UnderLineSection'
import Photo from '../components/photo'



  const VertLine = styled.div`
    height: 7em;
    width: 1px;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  `;

  const Wrapper = styled.section`
      align-item: start;
      padding: 0;

      margin: 35% 2% 35% 2%;
      @media only screen and (min-width: 789px){
      margin: 10% 15% 10% 15%;
    }
  `;
  const Main = (props) => (
    <Wrapper>

    <Row>
      {props.children}
    </Row>

  </Wrapper>
)
export default Main;

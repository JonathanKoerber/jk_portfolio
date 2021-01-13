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
  `;
  const Wrapper = styled.article`
    height: 50%;
    width: 100%;
  `;
  const Main = (props) => (
    <Wrapper>
  <UnderLineSection>
    <Row>
      {props.children}
    </Row>
  </UnderLineSection>
  </Wrapper>
)
export default Main;

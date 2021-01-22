import React from 'react';
import styled, {css} from 'styled-components';
import node_hero from '../images/node_hero.jpeg'

const Wrapper = styled.div`
      margin-top: 3.5em;
`;
const Image = styled.img`
    height: 10em;
    width: 10em;
    border-radius: 50%;
    display: block;
    margin-right: auto;
    margin-left: auto;

    border-color: #fff;
    border-width: 1px;
  `;

const ImageWrapper = styled.div`
  height: 10em;
  width: 10em;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  opacity: 7;
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
  padding: 2em;
`;
const Line = styled.div`
  with:.4em;
  height: 30%;
  color: #fff;
`;

const Photo = (props) =>(
  <Wrapper>
  <ImageOuterWrapper>
  <ImageOuterWrapper>
  <ImageWrapper>
    <Image src={props.url} />
  </ImageWrapper>
  </ImageOuterWrapper>
    </ImageOuterWrapper>
    </Wrapper>
)


 export default Photo;

import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from "gatsby";
import farestart from '../images/farestart.jpg';
import wgu from '../images/wgu_icon.jpg';
import omega from '../images/omega.png';
import github from '../images/GitHub-Mark-64px.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Container = styled.article`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  width: 500px;
  max-width: 70%;
  margin: .3em;
`;
const Tag = styled.span`
  border-radius:50%;
  float: right;
  margin-left: auto;
`;
const Row = styled.div`
    display: flex;
    width: 100%;
      flex-direction: row;
    }
`;
const Title = styled.h4`
float: left;
font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif;
font-weight: lighter;
font-size: 1em;
color: #000;
padding: 0;
margin: 0;
`;
const Text = styled.p`
font-family: Helvetica Nue, sans-serif;
font-size: .7em;
color: #000;
text-align: flex-start;
padding: 1%;
margin-right: auto;
`;


const StyleLink = styled(Link)`
      text-decoration: none;
      color: #000;
      font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif;
      margin-left: auto;
`;
const Logo = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
function GetLogo(tag){
  if(tag === 'wgu'){
    return <Logo src={wgu} />
  }else if(tag === 'github'){
    return <Logo src={github}/>
  }else if(tag === 'farestart'){
    return <Logo src={farestart}/>
  }else if(tag === 'omega'){
    return <Logo src={omega}/>
  }
}
function GetBackground(tag){
  if(tag === 'wgu'){
    return '#8aa0ff'
  }else if(tag === 'github'){
    return '#f3f3f3'
  }else if(tag === 'farestart'){
    return '#fee5cf'
  }else if(tag === 'omega'){
    return '#e8fbff'
  }
}
function GetFade(tag){
  if(tag === 'wgu'){
    return 'fade-up'
  }else if(tag === 'github'){
    return 'fade-up-left'
  }else if(tag === 'farestart'){
    return 'fade-up-right'
  }else if(tag === 'omega'){
    return 'fade-up-right'
  }
}

const Item = ({data}) => (

      <Container data-aos={GetFade(data.category.tag)} style={{ alignSelf: data.category.align, backgroundColor:GetBackground(data.category.tag)}} >
        <Row>
        <Text>{data.date}</Text>
            <Tag >
                {GetLogo(data.category.tag)}
            </Tag>
        </Row>
        <Title>{data.title}</Title>
            <Text>{data.text}</Text>
            {data.link && (
                <StyleLink
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </StyleLink>
            )}
            <span className="circle" />
    </Container>
)

export default Item;

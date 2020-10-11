
import React from 'react';
import styled, {css} from 'styled-components'

// style for heading component
const Wrapper = styled.footer`
    height: auto;
    padding: 0 0% 0 10%;
    margin: 5em;
    border-top-color: #111;
    border-top-width: 1px;
    border-top-style: solid;
`;
const Container = styled.div`
  padding: .0 0 5em 0;
`;
const Email = styled.h5`
    font-size: 2em;
    font-family: "Helvetica Nue", sans-serif;
    font-weight: bolder;
    font-size: 1em;
    color: #000;
`;
const Social = styled.h6`
    font-family: "Helvetica Nue", sans-serif;
    font-size: .8em;
    font-weight: lighter;
    color: #000;
`;
const Link = styled.a`
    text-decoration: none;
    color: #000;
`;

const Footer = () =>(
        <Wrapper>
            <Container>
                <Email >Say Hello</Email>
                <Social>
                    <Link href="mailto:jonathankoerber@gmail.com"
                                                     target="_blank">jonathankoerber@gmail.com</Link>
                </Social>
                <Social>
                    <Link href="https://github.com/JonathanKoerber"
                                                       target="_blank">github</Link>
                </Social>
                <Social ><Link href="https://www.linkedin.com/in/jonathan-koerber-864b36123/"
                                                    target="_blank">linkedin</Link></Social>
            </Container>
        </Wrapper>
)

export default Footer

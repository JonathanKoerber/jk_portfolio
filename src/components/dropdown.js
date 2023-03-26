import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import menuImage from "../images/menu(1).png";
import closeImage from "../images/closeImage.png";
const Wrapper = styled.div`
  margin-right: 2em;
  @media only screen and (max-width: 789px) {
    display: none;
  }
`;

const Menu = styled.div`
  padding: 1em;
  margin: 1em;
  position: absolute;
  right: 30px;
  border-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5em;
`;

const Text = styled.h1`
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 1em;
  color: black;
  font-weight: lighter;
  padding: 10% 0 10% 0;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  @media only screen and (min-width: 789px) {
  }
`;
const StyledExternalLink = styled.a`
  text-decoration: none;
  color: black;
  @media only screen and (min-width: 789px) {
  }
`;
const Icon = styled.img`
  height: 2em;
  width: 2em;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [looking, setLooking] = useState(false);

  // TODO the handle click function is not working.
  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setTimeout(function(){
      setOpen(false);
    }, 1000);
  };
  return (
    <Wrapper onMouseLeave={() => closeMenu()}>
      <Icon src={open ? closeImage : menuImage} onClick={() => handleClick()} />

      {open ? (
        <Menu>
          <List>
            <li>
              <Text>
                <StyledLink target="blank" to="/" onClick={() => handleClick()}>
                  {" "}
                  Home{" "}
                </StyledLink>
              </Text>
            </li>
            <li>
              <Text>
                <StyledLink
                  target="blank"
                  to="/portfolio"
                  onClick={() => handleClick()}
                >
                  {" "}
                  Projects{" "}
                </StyledLink>
              </Text>
              </li>
              <li>
              <Text>
                <StyledExternalLink
                  target="blank"
                  href="mailto:jkoerbe@wgu.edu"
                  onClick={() => handleClick()}
                >
                  {" "}
                  Email{" "}
                </StyledExternalLink>
              </Text>{" "}
              </li>
              <li>
              <Text>
                <StyledExternalLink
                  target="blank"
                  href="https://www.linkedin.com/in/jonathan-koerber/"
                  onClick={() => handleClick()}
                >
                  {" "}
                  LinkedIn{" "}
                </StyledExternalLink>
              </Text>{" "}
              </li>
              <li>
              <Text>
                <StyledExternalLink
                  target="blank"
                  href="https://github.com/JonathanKoerber"
                  onClick={() => handleClick()}
                >
                  {" "}
                  GitHub{" "}
                </StyledExternalLink>
              </Text>
            </li>
            <li>
              <Text>
                <StyledLink target="blank" to="/content/resume" onClick={() => handleClick()}>
                  {" "}
                  Resume{" "}
                </StyledLink>
              </Text>
            </li>
          </List>
        </Menu>
      ) : null}
    </Wrapper>
  );
};

export default Dropdown;

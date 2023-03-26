import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Text = styled.h1`
  text-align: left;
  font-family: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
    Droid Sans, Helvetica Neue, sans-serif;
  font-weight: bold;
  font-size: 3em;
  color: #fff;
  padding: 10% 0 10% 0;
  margin: 0;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;

const Title = (props) => (
  <div>
    <Text>
      <StyleLink target="blank" to={props.link}>
        {props.text}
      </StyleLink>
    </Text>
  </div>
);

export default Title;

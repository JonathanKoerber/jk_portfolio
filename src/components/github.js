import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import mark from "../images/GitHub-Mark-64px.png";

const Icon = styled.img`
  width: 2em;
  height: 2em;
`;

const Github = () => (
  <div>
    <Link to="https://github.com/JonathanKoerber" target="blank">
      <Icon src={mark} />
    </Link>
  </div>
);

export default Github;

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  @media only screen and (min-width: 789px) {
    width: auto;
    max-with: 50%;
  }
  @media only screen and (min-width: 992px) {
    min-width: 50%;
  }
`;

const Column = (props) => <Wrapper>{props.children}</Wrapper>;

export default Column;

import React from "react";
import styled from "styled-components";

import Row from "../components/row";

const Wrapper = styled.section`
  align-item: start;
  padding: 0;
  margin: 35% 2% 35% 2%;
  @media only screen and (min-width: 789px) {
    margin: 5% 15% 10% 15%;
  }
`;
const Main = (props) => (
  <Wrapper>
    <Row>{props.children}</Row>
  </Wrapper>
);
export default Main;

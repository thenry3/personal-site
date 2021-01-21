import React from "react";
import styled from "styled-components";

import Train from "./train";

const Wrapper = styled("div")`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin-bottom: 65px;
  @media only screen and (max-width: 900px) {
    align-items: center;
  }
`;

const TitleDiv = styled("div")`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled("div")`
  color: #4f38a1;
  font-size: 40px;
  height: fit-content;
  margin-right: 20px;
  @media screen and (max-width: 650px) {
    margin-right: 0;
  }
`;

export default function Section(props) {
  return (
    <>
      <Wrapper>
        <TitleDiv>
          <Title>{props.title}</Title>
          <Train />
        </TitleDiv>
        {props.children}
      </Wrapper>
    </>
  );
}

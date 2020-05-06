import React from "react";
import styled from "styled-components";

import ExpComp from "./experience";
import { experiences as exps } from "../assets/data";

const ExperienceWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const EMainW = styled("div")`
  width: 83%;
`;

const SecTitle = styled("div")`
  font-size: 36px;
  background: linear-gradient(90deg, #1d2b64 -50%, #f8cdda 120%);
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
  width: fit-content;
  font-weight: bold;
`;

export default class Experience extends React.Component {
  render() {
    return (
      <>
        <ExperienceWrapper>
          <EMainW>
            <SecTitle>Experience</SecTitle>
          </EMainW>
          {exps.map((exp) => (
            <ExpComp data={exp}></ExpComp>
          ))}
        </ExperienceWrapper>
      </>
    );
  }
}

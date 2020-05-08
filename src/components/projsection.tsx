import React from "react";
import styled from "styled-components";

import Project from "./project";

import { projs } from "../assets/data";

const ProjectWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  padding-top: 30px;
  position: relative;
  background: linear-gradient(-200deg, #1d2b64, #f8cdda);
  z-index: -1;
`;

const SecTitle = styled("div")`
  font-size: 36px;
  color: white;
  width: fit-content;
  position: relative;
`;

const ProjDiv = styled("div")`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  justify-content: space-around;
`;

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <ProjectWrapper>
          <div style={{ width: "83%" }}>
            <SecTitle href="/">projects</SecTitle>
          </div>
          <ProjDiv>
            {projs.map((proj) => (
              <Project data={proj} />
            ))}
          </ProjDiv>
        </ProjectWrapper>
      </>
    );
  }
}

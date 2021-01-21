import React from "react";
import styled from "styled-components";

import Section from "./section";
import { projs } from "../assets/data";

const ProjectGallery = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

const ProjDiv = styled("a")`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  text-decoration: none;
  border-top: white 5px solid;
  transition: 0.3s;
  margin: 10px;
  margin-bottom: 30px;
  font-family: monospace;
  /* color: var(--purple); */
  color: black;
  &:hover {
    border-top: var(--green) 5px solid;
    background: rgba(81, 207, 178, 0.2);
    text-decoration: underline;
  }
  @media screen and (max-width: 575px) {
    border-top: var(--green) 5px solid;
    background: rgba(81, 207, 178, 0.1);
  }
`;

const ProjPic = styled("div")<{ pic: any }>`
  background: ${(props) => `url(${props.pic})`} no-repeat center;
  background-size: cover;
  width: 200px;
  height: 200px;
`;

export default function Projects() {
  return (
    <>
      <Section title="projects">
        <ProjectGallery>
          {projs.map((proj) => (
            <ProjDiv target="_blank" href={proj.link}>
              <ProjPic pic={proj.pic} />
              <p style={{ fontSize: "16px", textAlign: "center" }}>
                {proj.title}
                {"\u2197"}
              </p>
            </ProjDiv>
          ))}
        </ProjectGallery>
      </Section>
    </>
  );
}

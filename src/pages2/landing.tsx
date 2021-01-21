import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import Navigation from "../components2/nav";
import Home from "../components2/home";
import Peanut from "../assets/peanut-butter.svg";
import Experiences from "../components2/experiences";
import Projects from "../components2/projects";
import Videos from "../components2/videos";

const Wrapper = styled("div")`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  width: 80%;
  /* height: fit-content; */
  align-items: center;
  position: relative;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

// const Background = styled("div")`
//   background-color: #b6d1bd;
//   background-color: white;
//   height: 100%;
//   width: 110%;
//   position: absolute;
//   top: 50vh;
//   opacity: 50%;
//   right: 4%;
//   z-index: -100;
// `;

const Icon = styled("div")`
  position: fixed;
  top: 40px;
  left: 40px;
  width: 60px;
  @media screen and (max-width: 575px) {
    top: 70px;
    left: 5px;
  }
`;

const AdjElem = styled(Element)`
  position: relative;
  bottom: 60px;
`;

export default function LandingPage() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Icon>
          <img src={Peanut} style={{ maxWidth: "100%" }} alt="ilikepb"></img>
        </Icon>
        <Navigation></Navigation>
        <Wrapper>
          <Content>
            <Home />
            <AdjElem name="exps" />
            <Experiences />
            <AdjElem name="projs" />
            <Projects />
            <AdjElem name="vids" />
            <Videos />
          </Content>
        </Wrapper>
      </div>
    </>
  );
}

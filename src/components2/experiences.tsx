import React from "react";
import styled from "styled-components";
import Plx from "react-plx";

import { experiences as exps } from "../assets/data";
import Section from "./section";

const Wrapper = styled("a")`
  width: 60%;
  position: relative;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  padding-left: 20px;
  border-left: white solid 5px;
  transition: 0.2s;
  margin: 0px;
  margin-bottom: 30px;
  text-decoration: none;
  color: black;
  &:hover {
    border-left: var(--purple) solid 5px;
    background: rgba(79, 56, 161, 0.1);
  }
  @media screen and (max-width: 900px) {
    width: 75%;
  }
`;

const LogoDiv = styled("img")`
  min-width: 90px;
  max-width: 90px;
  height: auto;
  align-self: center;
  margin-right: 30px;
`;

const Company = styled("p")`
  color: var(--green);
  font-size: 20px;
  margin: 0;
`;

const months = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May",
  "Jun.",
  "July",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec.",
];

const seasons = ["Winter", "Spring", "Summer", "Fall"];

function Experience(props) {
  const { logo, title, company, link, startdate, enddate } = props.exp;
  const start = startdate;
  const end = enddate;
  const today = new Date();
  return (
    <>
      <Wrapper target="_blank" href={link} rel="noopener noreferrer">
        <LogoDiv src={logo} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Company>
            <strong>{company}</strong>
          </Company>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              marginBottom: "0",
            }}
          >
            {title.toLowerCase()}
            {"\u2197"}
          </p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              marginTop: "0",
            }}
          >
            {today.getTime() >= start.getTime()
              ? months[start.getMonth()] +
                " " +
                start.getFullYear() +
                " – " +
                (end != null
                  ? months[end.getMonth()] + " " + end.getFullYear()
                  : "Present")
              : seasons[Math.floor(start.getMonth() / 3)] +
                " " +
                start.getFullYear()}
          </p>
        </div>
      </Wrapper>
    </>
  );
}

const ExpWrapper = styled("a")`
  margin-bottom: 30px;
  width: 60%;
  margin-right: 0;
  text-decoration: none;
  color: black;
`;

export default function Experiences() {
  // var today = new Date();
  const Animations = [];

  for (let i = 0; i < exps.length; i++) {
    // Animations.push([
    //   {
    //     start: "self",
    //     startOffset: "0px",
    //     duration: "20vh",
    //     properties: [
    //       {
    //         startValue: 0,
    //         endValue: 1,
    //         property: "opacity",
    //       },
    //       {
    //         startValue: 20,
    //         endValue: 0,
    //         property: "translateY",
    //       },
    //     ],
    //   },
    // ]);
  }

  return (
    <>
      <Section title="experiences">
        {exps.map((exp, i) => (
          <Experience exp={exp} />
        ))}
      </Section>
    </>
  );
}

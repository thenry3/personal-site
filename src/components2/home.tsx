import React from "react";
import styled from "styled-components";
import Plx from "react-plx";

import Profile from "../assets/main.jpg";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

const Wrapper = styled("div")`
  display: flex;
  width: 100%;
  font-size: 20px;
  justify-content: flex-start;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 575px) {
    margin-top: 60px;
  }
`;

const Name = styled("div")`
  color: #4f38a1;
  font-size: 48px;
  display: flex;
  margin-bottom: 15px;
`;

const ItMe = styled("div")`
  width: 300px;
  height: fit-content;
  z-index: -101;
  padding-left: 140px;
  @media screen and (max-width: 900px) {
    padding: 0;
    margin-bottom: -130px;
  }
`;

const Contacts = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = styled("a")`
  color: black;
  margin-right: 16px;
  padding: 6px;
  & > * {
    width: 30px;
    height: 30px;
    transition: 0.13s;
  }
  &:hover {
    & > * {
      transform: scale(1.3);
    }
  }
`;

const NameWrapper = styled("div")`
  padding-top: 180px;
  padding-left: 150px;
  height: fit-content;

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

export default function Home() {
  const desc = "peanut butter connoisseur";
  const letters = [];
  const descLetters = [];
  for (let i = 0; i < 11; i++) {
    letters.push([
      // {
      //   start: 20,
      //   duration: 150,
      //   properties: [
      //     {
      //       startValue: 1,
      //       endValue: 0,
      //       property: "opacity",
      //     },
      // {
      //   startValue: 0,
      //   endValue: Math.random() * (i % 2 == 0 ? 1 : -1) * 150,
      //   property: "translateY",
      //   unit: "px",
      // },
      // {
      //   startValue: 0,
      //   endValue: Math.random() * (i < 5 ? -1 : 1) * 200,
      //   property: "translateX",
      //   unit: "px",
      // },
      //   ],
      // },
    ]);
  }

  for (let i = 0; i < desc.length; i++) {
    descLetters.push([
      // {
      //   start: 50,
      //   duration: 150,
      //   properties: [
      //     {
      //       startValue: 1,
      //       endValue: 0,
      //       property: "opacity",
      //     },
      //   ],
      // },
    ]);
  }

  return (
    <>
      <Wrapper>
        <NameWrapper>
          <Name>
            henry trinh
            {/* {"henry trinh".split("").map((character, i) =>
              character === " " ? (
                <pre style={{ margin: "0" }}> </pre>
              ) : (
                <Plx parallaxData={letters[i]} style={{ height: "0" }}>
                  <strong>{character}</strong>
                </Plx>
              )
            )} */}
          </Name>

          <div
            style={{
              display: "flex",
              top: "0px",
              position: "relative",
              marginBottom: "5px",
            }}
          >
            {desc}
            {/* {desc
              .split("")
              .map((character, i) =>
                character === " " ? (
                  <pre> </pre>
                ) : (
                  <Plx parallaxData={descLetters[i]}>{character}</Plx>
                )
              )} */}
          </div>

          <Contacts>
            <Contact
              target="_blank"
              href="https://www.linkedin.com/in/thenry3/"
            >
              <AiOutlineLinkedin />
            </Contact>
            <Contact target="_blank" href="https://github.com/thenry3/">
              <AiOutlineGithub />
            </Contact>
            <Contact
              target="_blank"
              href="https://www.instagram.com/hernythetrainh/"
            >
              <AiOutlineInstagram />
            </Contact>
            <Contact target="_blank" href="mailto:henrymtrinh14@gmail.com">
              <AiOutlineMail />
            </Contact>
          </Contacts>
        </NameWrapper>
        <ItMe>
          <img
            src={Profile}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            alt={"ilovepb"}
          ></img>
        </ItMe>
      </Wrapper>
    </>
  );
}

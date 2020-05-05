import React from "react";
import styled from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";

import mainpic from "../media/main1.jpeg";

const CoverWrapper = styled("div")`
  background: linear-gradient(200deg, #1d2b64, #f8cdda);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfPic = styled("div")`
  border-radius: 50%;
  border: white 7px solid;
  background-image: url(${mainpic});
  background-size: 150%;
  background-position-x: center;
  background-position-y: 18%;
  width: 300px;
  height: 300px;
`;

const Title = styled("div")`
  color: white;
  font-weight: bold;
  font-size: 70px;
  letter-spacing: 0.07em;
  margin-top: 10px;
  @media only screen and (max-width: 500px) {
    font-size: 60px;
  }
`;

const Desc = styled("div")`
  color: white;
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const PicWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 125px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

const ConCollection = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = styled("a")`
  color: white;
  margin-left: 8px;
  margin-right: 8px;
  padding: 4px;
  & > * {
    width: 30px;
    height: 30px;
    transition: 0.2s;
  }
  &:hover {
    & > * {
      transform: scale(1.3);
    }
  }
`;

export default class Cover extends React.Component {
  render() {
    return (
      <>
        <CoverWrapper>
          <PicWrapper>
            <ProfPic />
            <Title>Henry Trinh</Title>
            <Desc>i like peanut butter and trains</Desc>
            <ConCollection>
              <Contact
                target="_blank"
                href="https://www.linkedin.com/in/thenry3/"
              >
                <AiOutlineLinkedin />
              </Contact>
              <Contact
                target="_blank"
                href="https://www.linkedin.com/in/thenry3/"
              >
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
            </ConCollection>
          </PicWrapper>
        </CoverWrapper>
      </>
    );
  }
}

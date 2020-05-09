import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai";
import { WiTrain } from "react-icons/wi";
// import { GiPeanut } from "react-icons/gi";

import mainpic from "../assets/main1.jpeg";

const ProfFrame = keyframes`
from {
  width: 0px;
  height: 0px;
  border: none;
}
to {

}
`;

const Otherframe = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

const CoverWrapper = styled("div")`
  background: linear-gradient(200deg, #1d2b64, #f8cdda);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
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
  animation: ${ProfFrame} 0.7s 0.5s both;
  @media only screen and (max-width: 500px) {
    width: 260px;
    height: 260px;
  }
`;

const Title = styled("div")`
  color: white;
  font-weight: 300;
  font-size: 70px;
  letter-spacing: 0.07em;
  margin-top: 10px;
  animation: ${Otherframe} 0.8s 1.2s both;
  @media only screen and (max-width: 500px) {
    font-size: 60px;
  }
`;

const Desc = styled("div")`
  color: white;
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 8px;
  animation: ${Otherframe} 0.8s 1.2s both;
`;

const PicWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

const ConCollection = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Otherframe} 0.8s 1.2s both;
`;

const Contact = styled("a")`
  color: white;
  margin-left: 8px;
  margin-right: 8px;
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

const CHOOFUCKINGCHOO = keyframes`
  from {
    transform: translateX(calc(-50vw - 80px))
  }
  to {
    transform: translateX(calc(50vw + 80px));
  }
`;

const Train = styled(WiTrain)`
  color: white;
  width: 100px;
  height: auto;
  position: absolute;
  bottom: 100px;
  animation: ${CHOOFUCKINGCHOO} 5s 0s infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
  @media only screen and (max-width: 500px) {
    bottom: 90px;
  }
`;

// const Yum = keyframes`
// 0% {
//   transform: rotateZ(90deg)
// }
// 50% {
//   transform: rotateZ(0deg)
// }
// 100% {
//   transform: rotateZ(90deg)
// }`;

// const Peanut = styled(GiPeanut)`
//   color: white;
//   width: 120px;
//   height: auto;
//   position: absolute;
//   left: 200px;
//   animation: ${Yum} 3s 0s infinite;
//   animation-timing-function: linear;
//   animation-fill-mode: both;
//   bottom: 30vh;
//   @media only screen and (max-width: 500px) {
//     width: 0px;
//     display: none;
//   }
// `;

// const Yum1 = keyframes`
// 0% {
//   transform: rotateZ(90deg)
// }
// 50% {
//   transform: rotateZ(180deg)
// }
// 100% {
//   transform: rotateZ(90deg)
// }`;

// const Peanut1 = styled(GiPeanut)`
//   color: white;
//   width: 120px;
//   height: auto;
//   position: absolute;
//   right: 200px;
//   animation: ${Yum1} 3s 0s infinite;
//   animation-timing-function: linear;
//   animation-fill-mode: both;
//   top: 25vh;
//   @media only screen and (max-width: 500px) {
//     width: 0px;
//     display: none;
//   }
// `;

export default class Cover extends React.Component {
  render() {
    return (
      <>
        <CoverWrapper>
          <Train />
          <PicWrapper>
            <ProfPic />
            <Title>henry trinh</Title>
            <Desc>i like peanut butter and trains</Desc>
            <ConCollection>
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
            </ConCollection>
          </PicWrapper>
        </CoverWrapper>
      </>
    );
  }
}

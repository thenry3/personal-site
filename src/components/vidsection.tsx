import React from "react";
import styled from "styled-components";

import VidDisplay from "./videodisplay";

const VidsWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
  padding-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 30px;
  position: relative;
`;

const SecTitle = styled("div")`
  font-size: 36px;
  background: linear-gradient(90deg, #1d2b64 -50%, #f8cdda 120%);
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
  width: fit-content;
`;

export default class Vidsection extends React.Component {
  render() {
    return (
      <>
        <VidsWrapper>
          <div style={{ width: "83%" }}>
            <SecTitle>videos</SecTitle>
          </div>
          <VidDisplay />
        </VidsWrapper>
      </>
    );
  }
}

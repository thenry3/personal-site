import React from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";

const FriendWrapper = styled("div")`
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

// const ModGallery = styled(Gallery)`
//   width: 80%;
//   height: 2px;
// `;

export default class Friends extends React.Component {
  render() {
    return (
      <>
        <FriendWrapper>
          <div style={{ width: "83%" }}>
            <SecTitle href="/">friends</SecTitle>
          </div>
          {/* <ModGallery /> */}
        </FriendWrapper>
      </>
    );
  }
}

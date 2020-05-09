import React from "react";
import styled from "styled-components";

const FriendWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;
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
  margin-bottom: 30px;
`;

const Gallery = styled("div")`
  display: flex;
  width: 75%;
  box-sizing: border-box;
  flex-wrap: wrap;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.7) 1px 3px 20px;
  padding: 30px;
  height: 700px;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
    padding-right: 15px;
  }
`;

const ImageWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 30px;
`;

const Image = styled("img")`
  width: auto;
  height: 200px;
  background: url(${(props) => props.src}) no-repeat;
  background-size: contain;
`;

export default class Friends extends React.Component<{}, { photos: any }> {
  componentWillMount() {
    let friendpics = require.context(
      "../assets/friends",
      true,
      /\.(jpg|png|jpeg|JPG|JPEG)$/
    );
    let friendpaths = friendpics.keys().map((path) => friendpics(path));

    let frends = [];
    for (var path in friendpaths) {
      frends.push(friendpaths[path]);
    }

    this.setState({
      photos: frends,
    });
  }

  render() {
    // console.log(friends);
    return (
      <>
        <FriendWrapper>
          <div style={{ width: "83%" }}>
            <SecTitle href="/">friends</SecTitle>
          </div>
          <Gallery>
            <ImageWrapper>
              {this.state.photos.map((photo) => (
                <Image src={photo} loading="lazy"></Image>
              ))}
            </ImageWrapper>
          </Gallery>
        </FriendWrapper>
      </>
    );
  }
}

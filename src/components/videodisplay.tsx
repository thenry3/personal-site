import React from "react";
import styled from "styled-components";

import { videos as viddict } from "../assets/data";

const MainWrapper = styled("div")`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 3px 8px;
  background: white;
  width: 70%;
  height: 500px;
  border-radius: 10px;
  margin-top: 30px;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Menu = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  &:hover {
    overflow-y: auto;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: row;
    overflow-x: hidden;
    overflow-y: hidden;
    min-height: fit-content;
    &:hover {
      overflow-x: auto;
    }
  }
`;

const MenuOption = styled("span")`
  color: #484848;
  font-size: 14px;
  text-align: center;
  min-width: 160px;
  min-height: 50px;
  box-sizing: border-box;
  padding-left: 13px;
  padding-right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  user-select: none;
  background: ${(props) => (props.selected ? "rgba(0, 0, 0, 0.1)" : "none")};
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 800px) {
    min-width: 150px;
    max-width: 150px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Display = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    @media only screen and (min-width: 801px) {
      bottom: 0;
      width: 8px;
      background: linear-gradient(#1d2b64 -50%, #f8cdda);
    }
    @media only screen and (max-width: 800px) {
      right: 0;
      height: 8px;
      background: linear-gradient(90deg, #1d2b64 -50%, #f8cdda);
    }
  }
`;

const Vidtitle = styled("div")`
  font-size: 24px;
  color: rgba(99, 99, 99, 1);
  width: fit-content;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 95%;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    width: 80%;
    background: linear-gradient(90deg, #1d2b64 -50%, #f8cdda 120%);
    bottom: 0;
    left: 10%;
    right: 0;
    height: 3px;
    margin-bottom: -8px;
    z-index: 2;
  }
`;

const FrameContainer = styled("div")`
  width: 80%;
  margin-bottom: 60px;
  max-width: 700px;
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;

const Frame = styled("div")`
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
  height: 0;
`;

export default class VidDisplay extends React.Component<
  {},
  { selected: number; title: string }
> {
  constructor(props) {
    super(props);
    this.selectVid = this.selectVid.bind(this);
    this.clickTitle = this.clickTitle.bind(this);
  }

  componentWillMount() {
    this.selectVid(0);
  }

  selectVid(num: number) {
    this.setState({
      selected: num,
      title: Object.keys(viddict)[num],
    });
  }

  clickTitle(e) {
    this.selectVid(e.target.dataset.id);
    // console.log(this.state.selected === e.target.dataset.id);
  }

  render() {
    return (
      <>
        <MainWrapper>
          <Menu>
            {Object.keys(viddict).map((title, index) => (
              <MenuOption
                data-id={index}
                selected={index.toString() === this.state.selected.toString()}
                onClick={this.clickTitle}
              >
                {title}
              </MenuOption>
            ))}
          </Menu>
          <Display>
            <Vidtitle>{this.state.title}</Vidtitle>
            <FrameContainer>
              <Frame>
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title={this.state.title}
                  src={viddict[this.state.title]}
                ></iframe>
              </Frame>
            </FrameContainer>
          </Display>
        </MainWrapper>
      </>
    );
  }
}

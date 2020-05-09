import React from "react";
import styled from "styled-components";

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
  min-width: 200px;
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
  min-width: 200px;
  max-width: 200px;
  min-height: 50px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
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
    height: 2px;
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

var keys = [
  "AIzaSyADw7w8Uc_DZ35ac1C5PKspE1BznHA1_38",
  "AIzaSyB3w9RZuBhN8pVPGYCrTXU8ocmp5pJGO5U",
  "AIzaSyD1Mm1MmYRC1l__6qWnSckZPZe0Gp2ob2g",
];

export default class VidDisplay extends React.Component<
  {},
  { selected: number; title: string; videos: any }
> {
  constructor(props) {
    super(props);
    this.selectVid = this.selectVid.bind(this);
    this.clickTitle = this.clickTitle.bind(this);
  }

  componentWillMount() {
    // var success = false;
    // for (let j = 0; j < keys.length; j++) {
    //   var youtube =
    //     "https://www.googleapis.com/youtube/v3/search?key=" +
    //     keys[j] +
    //     "&channelId=UCfVO0QElfJ2bVFlZ6Su2bBQ&part=snippet,id&order=date&maxResults=50";
    //   fetch(youtube)
    //     .then((results) => results.json())
    //     .then((results) => {
    //       let tempdict = {};
    //       results = results.items.reverse().slice(1);
    //       for (let i = 0; i < results.length; i++) {
    //         tempdict[results[i].snippet.title] =
    //           "https://www.youtube.com/embed/" + results[i].id.videoId;
    //       }
    //       success = true;
    //       return tempdict;
    //     })
    //     .then((dict) =>
    //       this.setState({
    //         videos: dict,
    //         selected: 0,
    //         title: Object.keys(dict)[0],
    //       })
    //     )
    //     .catch((error) => console.log("rip api key " + j.toString()));
    //   if (success) break;
    // }
  }

  selectVid(num: number) {
    this.setState({
      selected: num,
      title: Object.keys(this.state.videos)[num],
    });
  }

  clickTitle(e) {
    this.selectVid(e.target.dataset.id);
  }

  render() {
    if (!this.state || !this.state.videos)
      return (
        <p>
          sorry youtubes being bitchy today, it dont like a lot of api calls
        </p>
      );
    return (
      <>
        <MainWrapper>
          <Menu>
            {Object.keys(this.state.videos).map((title, index) => (
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
                  src={this.state.videos[this.state.title]}
                ></iframe>
              </Frame>
            </FrameContainer>
          </Display>
        </MainWrapper>
      </>
    );
  }
}

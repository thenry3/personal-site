import React from "react";
import styled from "styled-components";

const ProjWrapper = styled("a")`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 3px 10px;
  border-radius: 10px;
  height: 350px;
  width: 250px;
  background: white;
  text-decoration: none;
  transition: 0.2s;
  margin-bottom: 30px;
  @media only screen and (min-width: 501px) {
    &:hover {
      transform: translateY(-13px);
      box-shadow: rgba(0, 0, 0, 0.8) 1px 3px 13px;
    }
  }
`;

const ProjPic = styled("div")`
  width: 100%;
  height: 60%;
  background: url(${(props) => props.pic}) no-repeat;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const DetsDiv = styled("div")`
  display: flex;
  flex-direction: column;
  color: #484848;
`;

const ProjName = styled("div")`
  text-align: center;
  font-size: 20px;
  margin-top: 5px;
  position: relative;
  width: fit-content;
  align-self: center;
  margin-bottom: 5px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0px;
    background: linear-gradient(90deg, #1d2b64 -50%, #f8cdda 120%);
    height: 2px;
    margin-bottom: -2px;
    z-index: 2;
  }
`;

const ProjDesc = styled("div")`
  font-size: 14px;
  align-self: center;
  margin: 5px 10px;
`;

interface ProjProps {
  data: {
    title: string;
    pic: any;
    desc: string;
    link: string;
  };
}

export default class Project extends React.Component<ProjProps> {
  render() {
    return (
      <>
        <ProjWrapper target="_blank" href="/">
          <ProjPic pic={this.props.data.pic} />
          <DetsDiv>
            <ProjName>{this.props.data.title}</ProjName>
            <ProjDesc>{this.props.data.desc}</ProjDesc>
          </DetsDiv>
        </ProjWrapper>
      </>
    );
  }
}

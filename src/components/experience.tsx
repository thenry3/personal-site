import React from "react";
import styled from "styled-components";

const ExpWrapper = styled("div")`
  display: flex;
  width: 67%;
  margin-top: 30px;
  box-sizing: border-box;
  padding-left: 30px;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 3px 8px;
  border-radius: 10px;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    padding-left: 0px;
    width: 85%;
  }
`;

const LogoDiv = styled("img")`
  min-width: 12%;
  max-width: 12%;
  height: auto;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 20px;
  @media only screen and (max-width: 500px) {
    min-width: 30%;
    max-width: 30%;
    margin-top: 20px;
  }
`;

const ContentDiv = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 30px 30px 20px;
  font-size: 14px;
  @media only screen and (max-width: 500px) {
    max-width: 100%;
    margin: 10px;
    margin-top: 0px;
  }
  @media only screen and (min-width: 501px) {
    width: 100%;
  }
`;

const CompDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Company = styled("div")`
  background: linear-gradient(90deg, #1d2b64 -50%, #f8cdda 120%);
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
  font-weight: bold;
  font-size: 20px;
  width: fit-content;
`;

const Dates = styled("div")`
  color: #484848;
`;

const Position = styled("div")`
  color: #999999;
  font-weight: bold;
  font-size: 15px;
`;

const JobDesc = styled("ul")`
  color: #484848;
  width: 90%;
  & > li {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 500px) {
    padding-left: 30px;
  }
`;

interface ExpProps {
  data: {
    company: string;
    title: string;
    startdate: Date;
    enddate: Date;
    bullets: string[];
    logo: any;
  };
}

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

export default class Experience extends React.Component<ExpProps> {
  render() {
    var start = this.props.data.startdate;
    var end = this.props.data.enddate;
    return (
      <>
        <ExpWrapper>
          <LogoDiv src={this.props.data.logo} />
          <ContentDiv>
            <CompDiv>
              <Company>{this.props.data.company}</Company>
              <Dates>
                {months[start.getMonth()]} {start.getFullYear()} –{" "}
                {end != null
                  ? months[end.getMonth()] + " " + end.getFullYear()
                  : "Present"}
              </Dates>
            </CompDiv>
            <Position>{this.props.data.title}</Position>
            <JobDesc>
              {this.props.data.bullets.map((bullet) => (
                <li>{bullet}</li>
              ))}
            </JobDesc>
          </ContentDiv>
        </ExpWrapper>
      </>
    );
  }
}

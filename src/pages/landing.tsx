import React from "react";
import styled from "styled-components";

import Cover from "../components/cover";
import Navbar from "../components/nav";
import Experience from "../components/expsection";

const PageWrapper = styled("div")`
  width: 100%;
  height: 100vh;
`;

const Fade = styled("div")`
  height: 10vh;
  width: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  position: relative;
`;

const MainWrapper = styled("div")`
  position: relative;
  bottom: 10vh;
  padding-bottom: 10vh;
`;

export default class LandingPage extends React.Component<
  {},
  { scrolled: boolean }
> {
  constructor(props) {
    super(props);
    this.scrollEvent = this.scrollEvent.bind(this);
  }

  scrollEvent() {
    window.scrollY > 60
      ? this.setState({ scrolled: true })
      : this.setState({ scrolled: false });
  }

  componentWillMount() {
    this.setState({
      scrolled: false,
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEvent);
  }

  render() {
    return (
      <>
        <PageWrapper>
          <Navbar scrolled={this.state.scrolled} />
          <Cover />
          <MainWrapper>
            <Fade />
            <Experience />
          </MainWrapper>
        </PageWrapper>
      </>
    );
  }
}

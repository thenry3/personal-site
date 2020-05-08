import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import Cover from "../components/cover";
import Navbar from "../components/nav";
import Experience from "../components/expsection";
import Projects from "../components/projsection";
import Videos from "../components/vidsection";

const PageWrapper = styled("div")`
  width: 100%;
  height: 100vh;
`;

const AdjElem = styled(Element)`
  position: relative;
  bottom: 60px;
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
          <AdjElem name="exp" />
          <Experience />
          <AdjElem name="proj" />
          <Projects />
          <AdjElem name="vids" />
          <Videos />
        </PageWrapper>
      </>
    );
  }
}

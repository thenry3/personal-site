import React from "react";
import styled from "styled-components";
import { Element, animateScroll } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";

import Cover from "../components/cover";
import Navbar from "../components/nav";
import Experience from "../components/expsection";
import Projects from "../components/projsection";
import Videos from "../components/vidsection";
import Friends from "../components/friendsection";

const PageWrapper = styled("div")`
  width: 100%;
  height: 100vh;
`;

const AdjElem = styled(Element)`
  position: relative;
  bottom: 60px;
`;

const Arrow = styled(FiArrowUp)`
  color: #7b7097;
  width: 80%;
  height: 80%;
  border-radius: 50%;
`;

const GoUp = styled("div")`
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.6) 2px 2px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  border-radius: 50%;
  background: white;
  z-index: 100;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 501px) {
    bottom: 45px;
    right: 45px;
  }
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
    window.scrollY > 50
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
          <GoUp onClick={animateScroll.scrollToTop}>
            <Arrow />
          </GoUp>
          <Cover />
          <AdjElem name="exp" />
          <Experience />
          <AdjElem name="proj" />
          <Projects />
          <AdjElem name="vids" />
          <Videos />
          <AdjElem name="frendz" />
          <Friends />
        </PageWrapper>
      </>
    );
  }
}

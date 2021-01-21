import React from "react";
import styled from "styled-components";
import { Link, animateScroll } from "react-scroll";

const NavWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  position: fixed;
  text-align: right;
  justify-content: center;
  height: 100%;
  width: 20%;
  z-index: 100;
  @media screen and (max-width: 575px) {
    text-align: center;
    width: 100%;
    flex-direction: row;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
    align-items: center;
    overflow-x: scroll;
  }
`;

const ScrollLink = styled(Link)`
  font-family: monospace;
  margin-bottom: 28px;
  font-size: 17px;
  padding: 8px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #4f38a1;
  }
  @media screen and (max-width: 575px) {
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;

const ExtLink = styled("a")`
  font-family: monospace;
  margin-bottom: 28px;
  font-size: 17px;
  padding: 8px;
  color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #4f38a1;
  }

  @media screen and (max-width: 575px) {
    margin-bottom: 8px;
    margin-top: 8px;
  }
`;

export default function Navigation() {
  return (
    <>
      <NavWrapper>
        <ScrollLink
          smooth={true}
          duration={800}
          onClick={animateScroll.scrollToTop}
        >
          home
        </ScrollLink>
        <ScrollLink to="exps" smooth={true} duration={800}>
          experience
        </ScrollLink>
        <ScrollLink to="projs" smooth={true} duration={800}>
          projects
        </ScrollLink>
        <ScrollLink to="vids" smooth={true} duration={800}>
          videos
        </ScrollLink>
        <ExtLink target="_blank" href="./Henry_Trinh_Resume.pdf">
          resume{"\u2197"}
        </ExtLink>
      </NavWrapper>
    </>
  );
}

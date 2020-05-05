import React from "react";
import styled from "styled-components";
import * as Scroll from "react-scroll";

const NavWrapper = styled("div")`
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 13px;
  padding-bottom: 13px;
  @media only screen and (max-width: 500px) {
    justify-content: center;
  }
`;

const NavItems = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media only screen and (max-width: 500px) {
    margin: 0;
  }
`;

const ScrollLink = styled(Scroll.Link)`
  transition: 0.2s;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px 3px;
  font-size: 14px;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid white;
    cursor: pointer;
  }
`;

const ExtLink = styled("a")`
  color: white;
  text-decoration: none;
  transition: 0.2s;
  margin-left: 12px;
  margin-right: 12px;
  padding: 10px 3px;
  font-size: 14px;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid white;
    cursor: pointer;
  }
`;

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <NavWrapper>
          <NavItems>
            <ScrollLink smooth={true} duration={500}>
              experience
            </ScrollLink>
            <ScrollLink smooth={true} duration={500}>
              projects
            </ScrollLink>
            <ScrollLink smooth={true} duration={500}>
              videos
            </ScrollLink>
            <ExtLink target="_blank" href="./Henry_Trinh_Resume.pdf">
              resume
            </ExtLink>
          </NavItems>
        </NavWrapper>
      </>
    );
  }
}

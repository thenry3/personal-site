import React from "react";
import styled from "styled-components";

import Cover from "../components/cover";
import Navbar from "../components/nav";

const PageWrapper = styled("div")`
  width: 100%;
  height: 100vh;
`;

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <PageWrapper>
          <Navbar></Navbar>
          <Cover></Cover>
        </PageWrapper>
      </>
    );
  }
}

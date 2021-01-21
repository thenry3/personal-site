import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages2/landing";

function App2() {
  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Router>
  );
}

export default App2;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/landing";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <LandingPage />
      </Route>
    </Router>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import App2 from "./App2";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App2 />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

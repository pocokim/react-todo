import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import App from "./App";
import { Normalize } from 'styled-normalize';

// import { hot } from "react-hot-loader/root";

const Root = () => (
  <>
    <Normalize />
    <App />
  </>
);

ReactDOM.render(<Root/>, document.querySelector("#root"));

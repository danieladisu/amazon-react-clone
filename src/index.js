/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import App from "./App";
// import Header1 from "./Components/JS/Header1";
import StateProvider from "./Components/JS/StateProvider";
import reducer, { initialState } from "./Components/JS/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>{" "}
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./components/Home";

const App = () => (
  <>
    <Home/>
  </>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App/>);

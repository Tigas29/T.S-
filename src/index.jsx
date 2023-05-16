import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import { Router } from "./router";
import Loading from "./components/loading";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
    {/* <Loading /> */}
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
import "./style.css";
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp />
    {/* <FirstApp title="Título Teste" /> */}
    <CounterApp valor={15} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "I am a h1 tag"),
    React.createElement("h2", { key: 2 }, "I am a h2 tag"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
console.log(parent);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parent);

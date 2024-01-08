import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// app level component
const AppComponent = () => {
  return (
    <div className="app">
      {<Header />}
      {<Body />}
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<AppComponent />);

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);
console.log(heading);

// with JSX (javascript extended syntax)
const jsxHeading = <h1 id="heading">Hello World from React using JSX</h1>;
console.log(jsxHeading);
console.log(heading == jsxHeading);

// React functional components
const TitleComponent = () => <h1>Title using functional component</h1>;
const FunctionalComponent = () => {
  return (
    <div id="container">
      {<TitleComponent />}
      <h1>Hello from functional component</h1>
    </div>
  );
};
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<FunctionalComponent />);

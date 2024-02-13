import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * React.createElement() takes 3 parameters {type, props, children}
 * ReactDOM is used to manipulate the data
 * By using the root element everything will be rendered onto the screen.
 * React.createElement(object) ---> It will create an object, while rendering it turns to an HTML
  const heading = <h1>This is an React element</h1>;
 * 
 * React Component name should be in "PascalCase" & other utility functions in "camelCase".
 * * 1. class based components --> Old way of writing the code
 * 2. Functional Components  --> New way of writing the code(Recommended to use)
 */

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "I'm an h1 tag")
//   )
// );

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); //This is the way to render the functional component

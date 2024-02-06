const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I'm an h1 tag")
  )
);
//It takes 3 parameters {type, props, children}
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//By using this root element everything will be rendered onto the screen.
root.render(heading);
/**
 * React.createElement(object) ---> It will create an object, while rendering it turns to an HTML
 */

# React Projects

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- Parcel has File watching algorithm
- Caching - Faster builds
- It will minify the code for production build
- Bundling - Bundle all the files into a single file
- Image optimization
- Code Splitting
- Differential Bundling - Support older browsers
- Error Handling
- Tree shaking - remove unused code

# Babel

- Babel is typically used as a build tool, which means that it is integrated into your build process. When you run your build process, Babel will transpile your JavaScript code, based on the browserslist configuration.
- Which means Babel uses the browserslist configuration to transpile modern JavaScript code into code that can run in older browsers, making it easier to write modern code while still supporting older browsers.

# Two types of import/export

-Default import/export
export default ComponentName
import Component from "path"
Note: We cannot export more than one using default

-Named import/export
export const Component
import {Component} from "path"
Note: We can export as many by using Named export

# useState Hook

- Whenever a state variable updates, react triggers a reconciliation cycle(re-renders the component)
- Any Hook can be placed at the top in the function component body only not outside the function
- Don't Place Hooks in any conditional statements

# useEffect Hook

- useEffect will be called on Initial render
- If no dependency array, then useEffect is called on Every render of that component
- If dependency array is Empty[], then useEffect is called on Initial render(Just Once)
- If we pass any dependency [button], then useEffect is called when we click on this button

# 2 types of Routing in web apps

- Client Side Routing
- Server Side Routing

- createBrowserRouter
- RouterProvider
- Outlet is used to display the child routes
- link is used to route to a page like anchor tag & using link it will not reload the page
- useParams() is used to read the passing parameters & render the data into ui.
- searchParams()

# Class Based Components

- By using render method, the UI will be displayed.
- We need to use this keyword in class based Components, by using "this" we can access the data anywhere in the Component.
- Initially, "Constructor" is called First after that "render" will be called then after "ComponentDidMount" will be called. Here, the Render Phase takes place & renders Very fastly.
- componentDidMount() is used to call the Api's , Here the commit Phase takes Some time & DOM will be Updated in Single Batch.

# Optimizing the code

- Code Splitting
- Chunking
- Dynamic import / exports
- Lazy Loading(On Demand loading) by Suspense Component
  By using lazy loading, Our Component will be load When we want to use only, By this we can increase our App Performance & it can improve the initial loading time of the application.
- lazy() is used to dynamically import components only when they’re needed.
- Please note that you should not commit your .env file to version control (e.g., Git) to keep sensitive information secure. You can include it in your .gitignore file to ensure it's not accidentally committed.

# Designing Our App

- CSS / SCSS is not recommended way to Style your application.
- Styled Components is the recommended to Style your component
- One more Way to design your Component is Material UI & Ant Design(Recommended), Boot Strap, Tailwind, Chakra UI etc., These have pre-built Components

# Context API

- It is used for avoiding props drilling.
- We can create the Context by "createContext" & use it by "useContext" & to use in class based Components, we can access it by <ComponentName.consumer>
- 1. Create and export it with export const MyContext = createContext(defaultValue).
- 2. Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
- 3. Wrap children into <MyContext.Provider value={...}> to provide it from a parent.

# Redux

- Redux Works in Data layer of our Application.
- Redux is an external library which is not pre-built in React.
- Redux is mainly used for Large Scale Applications and helps us to easily debug using redux Devtools
- Redux works based on IMMER.js

- Steps:
- 1. Create a Separate folder named 'redux' & create sub-folders for store & reducers.
- 2. Create a store.js & configure the store with reducers.
- 3. Create different Slices with 'createSlice' and add the reducer(like cart) with different actions(like add, delete, edit) and export the reducer and actions.
- 4. Provide the store in the layout Component & bind the 'Outlet' in the 'Provider' Component.
- 5. From the target Component 'dispatch' the created actions with the 'payload'.
- 6. By Using useSelector() hook, we can subscribe to the store which will read & update the state .

---

# 1. What is JSX..?

- JSX is a Javascript extension Which is used in React to easily write HTML & javascript together. which looks like XML syntax
  Eg: const el = <h1>This is JSX</h1>

- But the browser does not understand the JSX because it's not valid javascript code. So to convert it to browser understandable JavaScript code, we use a tool like "Babel" which is a JavaScript compiler/transpiler.

# 2. what is React.createElement() ..?

- createElement is a fundamental method of React JS. The main use of React.createElement is the Creation of a React component. It takes 3 parameters {type, props, children}

- React.createElement("h1", { id: "heading" }, "I'm an h1 tag")

# 3. What is Component..?

- Component is an individual reusable pieces of code

# 4. Can we pass data from child to Parent in React..?

- Yes, we can by using Callback functions, by creating a Callback func in Parent Component & passing the callback func to the child as a prop from the parent Component.
- This callback Func will retrieve the data from the child Component.
- And the child Component calls the parent Callback function using props & passes the data to the parent Component.

# 5. What is lifting the state up in react..?

- Lifting the state up in react is a technique where we move the state from a lower level Component to higher level Component, So it can be shared between multiple child Components.
- Which makes us very easier to manage and avoids duplicating state across Components.
- It is Very useful for avoiding prop drilling, Centralising state management, Code Reusability.
- How to Lift State Up in React: 1. Using Callbacks 2. Using Context 3. Using Redux

# 6. What are Pure Components..?

- React Pure Components are the Components that do not re-render when the value of the state & props has been updated with the same value.
- Pure Components are primarly used for "Performance Optimization" by minimizing unnecessary renders through automatic prop Comparsion.
- ReactJS has provided us with a Pure Component. If we extend a class with Pure Component, there is no need for the shouldComponentUpdate() lifecycle method.
  ReactJS Pure Component are Class Components which compares the current state and props with new props and states to decide whether the React component should re-render itself or not.
- React Functional Components are not pure Components (stateless) because they lack states.

- Syntax: class Inventory extends React.PureComponent{
  render(){
  return(<h1>This is a Pure Component</h1>)
  }
  }

# 7. What is State in React..?

- State is a built-in React object that is used to contain data or information about the Component.
- A Component's state can change over time, whenever the state changes, then the Component re-renders.

# 8. What is useRef...?

- useRef is a hook that allows to directly create a mutable reference to the DOM element in the functional Component.
- Unlike useState, if we change a value in useRef it will not re-render the webpage.
- t's commonly used for accessing and managing DOM elements directly, storing persistent values, or working with values that should not trigger a re-render.

# 9. What are props..?

- Props are sending the information through like attributes
- Props in react are immutable.

# 10. What are hooks & what is useState() hook..?

- Hooks were new addition in React 16.8 in 2019
- useState is a Hook that lets us add state variable to the Component
- useState returns an "array" with exactly two values. one is initial state & other is a function.
- Syntax: const [state, setState] = useState(0); Here state = 0, "setState" is a function which set the value.

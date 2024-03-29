import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import LogIn from "./components/LogIn";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const Cart = React.lazy(() => import("./components/Cart")); //Cart by lazy Loading
// const LogIn = React.lazy(() => import("./components/LogIn"));

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  const [userName, setUserName] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  if (onlineStatus === false)
    return (
      <div>
        <h1>You're offline </h1>
      </div>
    );

  return (
    <div className="app">
      <Provider store={appStore}>
        <UserContext.Provider value={{ userName, setUserName, setShowProfile }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      /**Child Routes */
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); //This is the way to render the functional component

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

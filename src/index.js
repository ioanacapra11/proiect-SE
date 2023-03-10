import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FirstPage } from "./components/firstPage/FirstPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SecondPage } from "./components/secondPage/SecondPage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/filter",
    element: <SecondPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

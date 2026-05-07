import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
);

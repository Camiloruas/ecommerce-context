import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/context";
ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
);

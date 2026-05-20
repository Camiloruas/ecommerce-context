import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./App";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/context";
import { Toaster } from "react-hot-toast";

// Ponto de entrada da aplicação.
// Aqui montamos a árvore principal do React dentro da div #app do index.html.
ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    {/*
      O provider do carrinho envolve toda a aplicação,
      permitindo que qualquer componente acesse os dados do carrinho via Context API.
    */}
    <CartProvider>
      <Toaster position="top-center" reverseOrder={false} />

      {/* Responsável por renderizar as rotas definidas em App.tsx */}
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
);

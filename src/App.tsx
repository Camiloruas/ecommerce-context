import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Cart } from "./pages/cart";
import { ProductDetail } from "./pages/productDetail";

// Estrutura central de rotas da aplicação.
// Usamos createBrowserRouter para navegação por URL no navegador.
const router = createBrowserRouter([
  {
    // Layout comum entre páginas (ex.: Header fixo).
    element: <Layout />,
    children: [
      {
        // Rota inicial: lista de produtos.
        path: "/",
        element: <Home />,
      },
      {
        // Rota do carrinho.
        path: "/cart",
        element: <Cart />,
      },
      {
        // Rota para a descrição detalhada do produto
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export { router };

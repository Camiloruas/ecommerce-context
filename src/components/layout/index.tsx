import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";

// Layout base: aparece em todas as rotas filhas.
// O Header fica fixo no topo e o Outlet troca o conteúdo conforme a rota atual.
export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { Header } from "../header";

// Layout base: aparece em todas as rotas filhas.
// O Header fica fixo no topo e o Outlet troca o conteúdo conforme a rota atual.
export function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}

import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../../contexts/context";
import { useContext } from "react";

export function Header() {
  // Lê do contexto quantos tipos de produtos existem no carrinho.
  const { cartAmount } = useContext(CartContext);

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-slate-50/85 border-b border-slate-200/80">
      <nav className="w-full flex max-w-7xl h-16 items-center justify-between px-5 mx-auto">
        {/* Link para a página inicial (catálogo de produtos). */}
        <Link
          to="/"
          className="font-black text-2xl tracking-normal text-slate-900 hover:text-sky-700 transition-colors"
        >
          Lume Store
        </Link>

        {/* Link para o carrinho com badge de quantidade. */}
        <Link
          to="cart"
          className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow hover:bg-sky-50 transition"
        >
          <FiShoppingCart size={20} color="#0f172a" />
          {cartAmount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-sky-600 rounded-full min-w-5 h-5 px-1 flex items-center justify-center text-white text-[10px] font-bold">
              {cartAmount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

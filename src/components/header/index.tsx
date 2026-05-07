import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
  return (
    <header className="w-full bg-slate-200">
      <nav className="w-full flex max-w-7xl h-14 items-center justify-between px-5 mx-auto">
        <Link to="/" className="font-bold text-2xl">
          Dev Shopping
        </Link>

        <Link to="cart" className="relative inline-flex">
          <FiShoppingCart size={24} color="#121212" />
          <span className="absolute -top-3 -right-3 px-2 bg-sky-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-[10px]">
            2
          </span>
        </Link>
      </nav>
    </header>
  );
}

import { useContext } from "react";
import { CartContext } from "../../contexts/context";
import { Link } from "react-router-dom";

export function Cart() {
  // Dados e ações vindos do contexto global do carrinho.
  const { cart, addItemCart, removeItemCart, total, cartAmount } =
    useContext(CartContext);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">
        Pagina Carrinho de Compras
      </h1>

      {/* Estado de carrinho vazio: mostra mensagem e atalho para voltar ao catálogo. */}
      {cart.length <= 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium"> Ops seu carrinho está vazio </p>
          <Link
            className="bg-slate-500 my-3 p-1 px-3 text-white rounded-2xl"
            to="/"
          >
            Acessar Produtos
          </Link>
        </div>
      )}

      {/* Lista cada item do carrinho com ações de aumentar/diminuir quantidade. */}
      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-gray-300 "
        >
          <img className="w-28" src={item.cover} alt={item.title} />

          <strong>
            Preço:{" "}
            {item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => removeItemCart(item)}
              className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2 cursor-pointer "
            >
              -
            </button>
            {item.amount}
            <button
              onClick={() => addItemCart(item)}
              className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2 cursor-pointer "
            >
              +
            </button>
          </div>
          <section>
            <strong className="float-right">
              Subtotal:
              {item.total.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </section>
        </section>
      ))}

      {/* Total geral só aparece quando existe ao menos um item no carrinho. */}
      {cart.length !== 0 && <p className="font-bold mt-4"> Total:{total}</p>}
    </div>
  );
}

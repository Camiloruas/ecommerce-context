import { useContext } from "react";
import { CartContext } from "../../contexts/context";
import { Link } from "react-router-dom";

export function Cart() {
  // Dados e ações vindos do contexto global do carrinho.
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="font-black text-3xl md:text-4xl text-slate-900 text-center mb-8">
        Carrinho de Compras
      </h1>

      {/* Estado de carrinho vazio: mostra mensagem e atalho para voltar ao catálogo. */}
      {cart.length <= 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10">
          <p className="font-medium text-slate-700">Ops, seu carrinho está vazio.</p>
          <Link
            className="bg-sky-600 hover:bg-sky-700 mt-5 px-4 py-2 text-white rounded-lg transition"
            to="/"
          >
            Acessar Produtos
          </Link>
        </div>
      )}

      {/* Lista cada item do carrinho com ações de aumentar/diminuir quantidade. */}
      {cart.length > 0 && (
        <section className="space-y-4">
          {cart.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                    <img className="max-w-full max-h-full object-contain" src={item.cover} alt={item.title} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-slate-800">{item.title}</h2>
                    <p className="text-slate-600 text-sm">
                      {item.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}{" "}
                      por unidade
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => removeItemCart(item)}
                    className="h-9 w-9 rounded-lg bg-slate-700 hover:bg-slate-800 text-white font-bold flex items-center justify-center cursor-pointer transition"
                  >
                    -
                  </button>
                  <span className="font-semibold text-slate-800 min-w-6 text-center">{item.amount}</span>
                  <button
                    onClick={() => addItemCart(item)}
                    className="h-9 w-9 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold flex items-center justify-center cursor-pointer transition"
                  >
                    +
                  </button>
                </div>

                <strong className="text-slate-800 text-right">
                  Subtotal:{" "}
                  {item.total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Total geral só aparece quando existe ao menos um item no carrinho. */}
      {cart.length !== 0 && (
        <div className="mt-8 rounded-2xl bg-slate-900 text-white p-5 flex items-center justify-between">
          <span className="text-slate-200">Total do pedido</span>
          <strong className="text-2xl">{total}</strong>
        </div>
      )}
    </main>
  );
}

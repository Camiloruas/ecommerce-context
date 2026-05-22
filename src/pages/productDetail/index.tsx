import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api, endpoints } from "../../services/api";
import type { ProductProps } from "../home";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/context";
import toast from "react-hot-toast";

export function ProductDetail() {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const { addItemCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    async function getProducts() {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get(`${endpoints.products}/${id}`);
        setProduct(response.data ?? null);
      } catch {
        setError("Falha ao carregar produto. Verifique sua conexão.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, [id]);

  if (loading) {
    return (
      <main className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-slate-800">Carregando produto...</h1>
      </main>
    );
  }

  if (error) {
    return (
      <main className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-red-600">{error}</h1>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="w-full max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-slate-800">Produto não encontrado.</h1>
      </main>
    );
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-6 text-sm font-semibold text-sky-700 hover:text-sky-900 transition"
      >
        Voltar para produtos
      </Link>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl border border-slate-200 bg-white p-5 md:p-8 shadow-sm">
        <div className="h-56 md:h-80 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
          <img
            className="max-w-full max-h-52 md:max-h-64 object-contain"
            src={product.cover}
            alt={product.title}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-black text-slate-900">{product.title}</h1>
          <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>
          <strong className="mt-6 text-3xl text-emerald-700">
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>

          <button
            onClick={() => {
              addItemCart(product);
              toast.success("Produto adicionado no carrinho");
              navigate("/cart");
            }}
            className="mt-6 h-11 px-5 w-full md:w-fit rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold flex items-center justify-center gap-2 cursor-pointer transition"
          >
            <BsCartPlus size={18} />
            Adicionar e ir para carrinho
          </button>

          <strong className="mt-4 text-sm text-slate-500 font-medium">
            Entrega rápida para todo o Brasil
          </strong>
        </div>
      </section>
    </main>
  );
}

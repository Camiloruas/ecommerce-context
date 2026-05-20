import { api } from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/context";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// Tipagem do produto vindo da API.
export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  // Função do contexto para adicionar produto ao carrinho.
  const { addItemCart } = useContext(CartContext);

  // Estado local com a lista de produtos exibida na tela.
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    // Busca produtos uma única vez quando a Home carrega.
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();
  }, []);

  // Encapsula a ação de clique para facilitar leitura do JSX.
  function handleAddCarItem(product: ProductProps) {
    toast.success("Produto Adicionado no Carrinho");
    addItemCart(product);
  }

  return (
    <div className="pb-12">
      <main className="w-full max-w-7xl px-4 mx-auto mt-8">
        <h1 className="font-black text-3xl md:text-4xl mb-2 text-center text-slate-900">
          Produtos em alta
        </h1>
        <p className="text-center text-slate-600 mb-8">
          Escolha seus favoritos e adicione ao carrinho com um clique.
        </p>

        {/* Grade de cards de produtos. */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <section
              key={product.id}
              className="w-full rounded-2xl border border-slate-200 bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition p-3"
            >
              <Link to={`/product/${product.id}`}>
                <div className="w-full h-44 bg-slate-50 rounded-xl mb-3 p-3 border border-slate-100">
                  <img
                    className="max-w-full max-h-full object-contain"
                    src={product.cover}
                    alt={product.title}
                  />
                </div>
                <p className="font-semibold mt-1 mb-2 text-slate-800 min-h-12">
                  {product.title}
                </p>
              </Link>
              <div className="flex gap-3 items-center justify-between">
                <strong className="text-slate-700">
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="cursor-pointer h-9 w-9 rounded-full bg-sky-600 text-white flex items-center justify-center hover:bg-sky-700 transition"
                  onClick={() => handleAddCarItem(product)}
                  aria-label="Adicionar ao carrinho"
                >
                  <BsCartPlus size={18} />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

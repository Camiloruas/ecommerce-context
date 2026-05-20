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
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mt-4 pt-4">
        <h1 className="font-bold text-2xl mb-4 text-center">
          -- Produtos em alta --
        </h1>

        {/* Grade de cards de produtos. */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <Link to={`/product/${product.id}`}>
                <div className="w-full h-40 bg-white rounded-lg mb-2 p-2">
                  <img
                    className="max-w-full max-h-full object-contain"
                    src={product.cover}
                    alt={product.title}
                  />
                </div>
                <p className="font-medium mt-1 mb-2">{product.title}</p>
              </Link>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90">
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="cursor-pointer"
                  onClick={() => handleAddCarItem(product)}
                >
                  <BsCartPlus size={20} color="#121212" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}
export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddCarItem(produtc: ProductProps) {
    console.log(produtc);
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto mt-4 pt-4">
        <h1 className="font-bold text-2xl mb-4 text-center">
          -- Produtos em alta --
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((produtc) => (
            <section key={produtc.id} className="w-full">
              <div className="w-full h-40 bg-white rounded-lg mb-2 p-2">
                <img
                  className="max-w-full max-h-full object-contain"
                  src={produtc.cover}
                  alt={produtc.title}
                />
              </div>
              <p className="font-medium mt-1 mb-2">{produtc.title}</p>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90">
                  {produtc.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="cursor-pointer"
                  onClick={() => handleAddCarItem(produtc)}
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

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import type { ProductProps } from "../home";
import { BsCartPlus } from "react-icons/bs";
import { CartContext } from "../../contexts/context";

export function ProductDetail() {
  // Estado do produto selecionado. Começa como null até a API responder.
  const [product, setProduct] = useState<ProductProps | null>(null);
  // Lê o parâmetro dinâmico da rota: /product/:id
  const { id } = useParams();
  const { addItemCart } = useContext(CartContext);
  useEffect(() => {
    // Evita buscar na API se o id não existir.
    if (!id) return;

    // Busca os dados do produto específico pelo id.
    async function getProducts() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    // Executa a busca quando o componente carrega ou quando o id muda.
    getProducts();
  }, [id]);

  // Estado de carregamento simples enquanto o produto ainda não foi definido.
  if (!product) {
    return <h1>Carregando produto...</h1>;
  }

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Exemplo inicial exibindo o título do produto retornado pela API. */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-56 md:h-72 flex items-center justify-center">
          <img
            className="max-w-full max-h-52 md:max-h-64 object-contain"
            src={product.cover}
            alt={product.title}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-medium">{product.title}</h1>
          <p>{product.description}</p>
          <strong className="flex gap-2 items-center mb-6">
            Preço:{" "}
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
            <BsCartPlus
              onClick={() => addItemCart(product)}
              className="cursor-pointer"
            />
          </strong>
        </div>
      </section>
    </main>
  );
}

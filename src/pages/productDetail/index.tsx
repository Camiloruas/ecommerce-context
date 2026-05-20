import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export function ProductDetail() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }
    getProducts();
  }, [id]);

  return (
    <div>
      <h1>Produto detalhado {product} </h1>
    </div>
  );
}

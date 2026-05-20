import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { ProductProps } from "../pages/home";

// Contrato do contexto: define tudo que outros componentes podem consumir.
interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

// Estrutura de cada item dentro do carrinho.
interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

// Cria o contexto global do carrinho.
export const CartContext = createContext({} as CartContextData);

// Provider: componente que guarda estado e funções do carrinho.
function CartProvider({ children }: CartProviderProps) {
  // Lista de itens no carrinho.
  const [cart, setCart] = useState<CartProps[]>([]);
  // Valor total já formatado em moeda (ex.: R$ 99,90).
  const [total, setTotal] = useState("");

  function addItemCart(newItem: ProductProps) {
    // Procura se o produto já existe no carrinho.

    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      // Se já existe, apenas incrementa quantidade e recalcula subtotal do item.
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      // Atualiza estado e total geral do carrinho.
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    // Se não existe, cria novo item com quantidade inicial 1.
    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    // Adiciona item novo ao carrinho e recalcula total.
    setCart((product) => [...product, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(product: CartProps) {
    // Localiza o item a ser reduzido/removido.
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      // Se a quantidade for maior que 1, reduz apenas uma unidade.
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount - 1;
      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      // Atualiza estado e total geral.
      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    // Se só existe 1 unidade, remove o item completo do carrinho.
    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: CartProps[]) {
    // Soma o subtotal de todos os itens.
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.total;
    }, 0);

    // Formata para moeda brasileira e salva no estado.
    const resultFormated = result.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    setTotal(resultFormated);
  }

  return (
    // Disponibiliza estado e funções para toda árvore de componentes filha.
    <CartContext.Provider
      value={{
        cart,
        // Quantidade de tipos de itens no carrinho (não soma unidades).
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { ProductProps } from "../pages/home";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
}

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

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addItemCart(newItem: ProductProps) {
    //Adiciona no carrinho

    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      /* Sen entrou aqui apenas somamos mais um na quantidade  e calculamos o total desse carrinho  */
      let cartList = cart;
      cartList[indexItem].amount = cartList[indexItem].amount + 1;
      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((product) => [...product, data]);
  }

  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

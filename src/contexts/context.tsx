import type { ReactNode } from "react";
import { createContext, useState } from "react";
import { ProductProps } from "../pages/home";


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

function addItemCart(newItem:ProductProps) {
  //Adiciona no carrinho

  
}


  return (
    <CartContext.Provider value={{ cart, cartAmount: cart.length }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

import { Children, createContext, ReactNode, useState } from "react";

interface CartContextData {
  cart: CartProps[];
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

function CarProvider({ Children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  return (
    <CartContext.Provider value={{ cart }}>{Children}</CartContext.Provider>
  );
}

export default CarProvider;

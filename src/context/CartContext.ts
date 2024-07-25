import { createContext } from "react";

export interface CartItem {
  id: number;
  img: string; // Imagen del producto
  title: string;
  price: number;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addItem: (item: CartItem, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  isInCart: (id: number) => boolean;
  totalQuantity: number;
  total: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

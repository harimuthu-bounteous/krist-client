import { Cart } from "@/types/Cart";
import { Product } from "@/types/Product";
import { create } from "zustand";

interface CartState {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  addToCart: (item: Cart) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  setCart: (cartArray) => set(() => ({ cart: cartArray })),
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) =>
          cartItem.ProductId === item.ProductId &&
          cartItem.Color === item.Color &&
          cartItem.Size === item.Size
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.ProductId === item.ProductId &&
            cartItem.Color === item.Color &&
            cartItem.Size === item.Size
              ? { ...cartItem, quantity: cartItem.Quantity + item.Quantity }
              : cartItem
          ),
        };
      } else {
        return {
          cart: [...state.cart, item],
        };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.ProductId !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.ProductId === productId ? { ...item, quantity } : item
      ),
    })),

  totalPrice: () =>
    get().cart.reduce((total, item) => total + item.Price * item.Quantity, 0),
}));

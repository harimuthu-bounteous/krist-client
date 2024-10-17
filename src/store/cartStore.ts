import { Product } from "@/types/Product";
import { create } from "zustand";

interface CartItem {
  productId: string;
  product: Product;
  color: string;
  size: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.color === item.color &&
          cartItem.size === item.size
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.productId === item.productId &&
            cartItem.color === item.color &&
            cartItem.size === item.size
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
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
      cart: state.cart.filter((item) => item.productId !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    })),

  totalPrice: () =>
    get().cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    ),
}));

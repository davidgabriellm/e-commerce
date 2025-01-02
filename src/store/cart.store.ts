import { create } from "zustand";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CartState {
  cart: CartItem[];
  totalValue: number;
  totalQuantity: number;
  setTotalValue: (value: number) => void;
  increaseItemQuantity: (id: number, quantity: number) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  totalValue: 0,
  totalQuantity: 0,
  setTotalValue: (value) => set((state) => ({ ...state, totalValue: value })),
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  increaseItemQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) => ({
        ...item,
        quantity: item.id === id ? item.quantity + quantity : item.quantity,
      })),
    })),
}));

export default useCartStore;

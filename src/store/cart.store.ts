import { create } from 'zustand';

interface cartItem {
  id: string | number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
}

interface cartStore {
  cart: cartItem[];
  addToCart: (item: cartItem) => void;
  removeItemToCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalPrice: () => number;
}

const useCartStore = create<cartStore>((set, get)=> ({
  cart: [],
  addToCart: item =>
    set(state => {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        return {
          cart: state.cart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }

      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeItemToCart: (id: string) =>
    set(state => ({
      ...state,
      cart: state.cart.filter(item => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set(state => ({
      cart: state.cart.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item,
      ),
    })),

    getTotalPrice: (): number => {
        const state = get(); 
        return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
}));

export default useCartStore;

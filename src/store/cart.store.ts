import { create } from "zustand";

interface cartItem{
    id: string | number;
    title: string;
    thumbnail: string;
    price: number;
}


interface cartStore{
    cart: cartItem[];
    addToCart: (item: cartItem) => void;
    removeItemToCart: (id: string) => void;
}

const useCartStore = create<cartStore>((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({...state, cart: [...state.cart, item]})),
    removeItemToCart: (id: string) => set((state) => ({...state, cart: state.cart.filter((item) => item.id!== id)})),
}))

export default useCartStore;
import { create } from "zustand";

interface cartOpen {
    isOpen: boolean;
}

interface cartShoppingStore {
    cartOpen: cartOpen;
    toggleCart: () => void;
}

const useCartShoppingStore = create<cartShoppingStore>((set) => ({
    cartOpen: { isOpen: false} ,
    toggleCart: () => set((state) => ({ cartOpen: { isOpen: !state.cartOpen.isOpen } })),
}));

export default useCartShoppingStore;
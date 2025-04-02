import { create } from "zustand";
interface CartState {
    selectedItem: string[];
    cartItemNum: number,
    cartItems: any
}

interface AppState {
    cart: CartState;
    setSelectedItem: (selectedItems: string[]) => void;
    toggleSelectItem: (id: string) => void;
    toggleSelectAll: (allIds: string[]) => void;
    setCartItemNum: (num: number) =>void;
    setCartItems: (carts: any) => void;
}

interface CartItem {
    id: string;
    name: string;
    image_thumbs: { [key: string]: string };
    image: string;
    color_mapping: { [key: string]: string };
    quantity: number;
    price: number;
}

const useCartStore = create<AppState>((set) => ({
    cart: {
        selectedItem: [],
        cartItemNum: 0,
        cartItems: [],
    },
    setCartItems : (carts) => {
        set((state) => ({
            cart: {...state.cart, cartItems: carts}
        })) 
    },

    setSelectedItem: (selectedItems) =>
        set((state) => ({
            cart: { ...state.cart, selectedItem: selectedItems },
        })),
    setCartItemNum: (num: number) =>
        set((state) => ({
            cart: { ...state.cart, cartItemNum: num },
        })),

    toggleSelectItem: (id) =>
        set((state) => {
            const selected = state.cart.selectedItem;
            return {
                cart: {
                    ...state.cart,
                    selectedItem: selected.includes(id)
                        ? selected.filter((itemId) => itemId !== id) 
                        : [...selected, id], 
                },
            };
        }),

    toggleSelectAll: (allIds) =>
        set((state) => ({
            cart: {
                ...state.cart,
                selectedItem: state.cart.selectedItem.length === allIds.length ? [] : allIds,
            },
        })),
}));
export default useCartStore;

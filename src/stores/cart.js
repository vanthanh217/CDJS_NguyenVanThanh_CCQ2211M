import { create } from 'zustand';

const loadCartFromLocalStorage = () => {
    try {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage', error);
        return [];
    }
};

const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage', error);
    }
};

const totalPrice = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const useStore = create((set) => ({
    cart: loadCartFromLocalStorage(),
    totalPrice: totalPrice(loadCartFromLocalStorage()),
    isOpenCartBar: false,
    toggleStatusCartBar: () =>
        set((state) => ({ isOpenCartBar: !state.isOpenCartBar })),
    addToCart: ({ productId, price, quantity }) =>
        set((state) => {
            const existingProduct = state.cart.find(
                (item) => item.productId === productId,
            );
            let newCart;
            if (existingProduct) {
                newCart = [...state.cart].map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item,
                );
            } else {
                newCart = [...state.cart, { productId, price, quantity }];
            }
            saveCartToLocalStorage(newCart);
            return { cart: newCart, totalPrice: totalPrice(newCart) };
        }),
    updateQuantity: (productId, quantity) =>
        set((state) => {
            let newCart;
            if (quantity < 1) {
                newCart = [...state.cart].filter(
                    (item) => item.productId !== productId,
                );
            } else {
                newCart = [...state.cart].map((item) =>
                    item.productId === productId
                        ? { ...item, quantity: quantity }
                        : item,
                );
            }
            saveCartToLocalStorage(newCart);
            return { cart: newCart, totalPrice: totalPrice(newCart) };
        }),
    removeCartItem: (productId) =>
        set((state) => {
            const newCart = [...state.cart].filter(
                (item) => item.productId !== productId,
            );
            saveCartToLocalStorage(newCart);
            return { cart: newCart, totalPrice: totalPrice(newCart) };
        }),
    resetCart: () =>
        set(() => {
            const emptyCart = [];
            saveCartToLocalStorage(emptyCart);
            return { cart: emptyCart, totalPrice: 0 };
        }),
}));

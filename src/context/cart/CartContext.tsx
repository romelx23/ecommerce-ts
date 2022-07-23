import { createContext } from 'react';
import { ProductoCarrito } from '../../interfaces/product';

interface ContextProps{
        cart: ProductoCarrito[];
        addToCart: (product: ProductoCarrito) => void;
        removeFromCart: (id: string) => void;
        updateCart: (id: string, product: ProductoCarrito) => void;
        clearCart: () => void;
        handleMore:(id:string)=>void;
        handleRemove:(id:string)=>void;
        saveOrderLocalStorage: (producto: ProductoCarrito) => void;
}

export const CartContext=createContext({} as ContextProps)
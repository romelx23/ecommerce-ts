import { createContext } from 'react';

interface ContextProps{
        sidemenuOpen:boolean;
}

export const CartContext=createContext({} as ContextProps)
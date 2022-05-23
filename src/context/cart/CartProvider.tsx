import { FC, useReducer } from 'react'
import { CartContext, CartReducer } from '.'
export interface Props{
    children: React.ReactNode;
}

export interface CartState {
  sidemenuOpen: boolean
}

export const Cart_INITIAL_STATE: CartState = {
  sidemenuOpen: false
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, Cart_INITIAL_STATE)
  
  return (
    <CartContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

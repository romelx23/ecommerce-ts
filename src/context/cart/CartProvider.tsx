import { FC, useReducer } from "react";
import { CartContext, CartReducer } from ".";
import { ProductoCarrito } from "../../interfaces/product";
export interface Props {
  children: React.ReactNode;
}

export interface CartState {
  cart: ProductoCarrito[];
}

export const Cart_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, Cart_INITIAL_STATE);

  const addToCart = (product: ProductoCarrito) => {
    if (state.cart.find((item) => item._id === product._id)) {
      updateCart(product._id, product);
      return;
    }
    dispatch({
      type: "[Cart] - Add to cart",
      payload: {
        product,
      },
    });
  };

  const saveOrderLocalStorage = (producto: ProductoCarrito) => {
    const cart = [...state.cart, producto];
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (id: string) => {
    dispatch({
      type: "[Cart] - Remove from cart",
      payload: {
        id,
      },
    });
  };
  const updateCart = (id: string, product: ProductoCarrito) => {
    dispatch({
      type: "[Cart] - Update from cart",
      payload: {
        id,
        product,
      },
    });
  };
  const clearCart = () => {
    dispatch({
      type: "[Cart] - Clear cart",
    });
  };
  const handleMore = (id: string) => {
    dispatch({
      type: "[Cart] - Add Quantity cart",
      payload: {
        id,
      },
    });
  };
  const handleRemove = (id: string) => {
    dispatch({
      type: "[Cart] - Remove Quantity cart",
      payload: {
        id,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateCart,
        clearCart,
        handleMore,
        handleRemove,
        saveOrderLocalStorage
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

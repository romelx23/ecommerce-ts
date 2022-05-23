import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { UIContext } from "../../context/ui";
import { ProductCart } from "./ProductCart";
import { formatPrice } from '../../helpers/format';

export const Carrito = () => {
  const { toggleCart, ToggleCart } = useContext(UIContext);
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total=cart.reduce((total,product)=>total+product.precio*product.cantidad,0);
    setTotal(total);
  }, [cart])
  

  return (
    <div
      className={`fixed w-full top-0 left-0 z-30 ${
        ToggleCart ? "block" : "hidden"
      }`}
    >
      <div
        onClick={() => toggleCart(!ToggleCart)}
        className="w-full min-h-screen h-auto bg-[#00001099]"
      ></div>
      <div className="absolute top-0 right-0 w-72 min-h-screen flex flex-col bg-white p-2 space-y-3">
        <h1>Carrito</h1>
        {
          cart.map((producto) => (
            <ProductCart key={producto._id} producto={producto} />
          ))
        }
        <div className="flex-1 flex flex-col justify-end">
          <h1>Total: {formatPrice(total)}</h1>
          <button className="bg-gray-400 py-2 
          rounded-lg">Comprar</button>
          <Link to="/home/pagos" className="my-2 hover:text-blue-600">
            ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

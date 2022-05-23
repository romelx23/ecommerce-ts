import React, { FC, useContext } from 'react'
import { ProductoCarrito } from '../../interfaces/product'
import { formatPrice } from '../../helpers/format';
import { Badge } from '../ui';
import { CartContext } from '../../context/cart/CartContext';
interface Props{
    producto:ProductoCarrito
}

export const ProductCart:FC<Props> = ({producto}) => {
    const {nombre, precio, _id, cantidad,img} = producto;
    const {removeFromCart}=useContext(CartContext);
  return (
    <div className="product-cart">
    <img
      src={img}
      alt={nombre}
      className="w-12 h-12 object-cover"
    />
    <Badge
        content={cantidad}
        className="bg-blue-700 text-white left-12"
    />
    <div className="">
      <p className="text-base font-semibold">{nombre}</p>
      <p className="text-sm">mediano</p>
    </div>
    <p>{formatPrice(precio*cantidad)}</p>
    <button
        onClick={()=>removeFromCart(_id)}
        className="btn-remove"
    >
        <i className="fas fa-times"></i>
    </button>
  </div>
  )
}

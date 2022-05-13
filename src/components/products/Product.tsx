import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { ProductI } from '../../interfaces/product';
  interface Props {
    product: ProductI;
  }

export const Product:FC<Props> = ({product}) => {
  const {name, price, description,image} = product;
  return (
    <Link to={`/home/123`} style={{textDecoration:'none',color:"#000000"}}>
    <div className='card__product p-5'>
      <img src={image} alt="producto" className='w-60 h-52 rounded-md' style={{width:''}} />
      <div className="w-full text-left">
      <h1 className='font-bold text-xl'>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      </div>
    </div>
    </Link>
  )
}

import React, { FC } from 'react'
import { products } from '../../data/products'
import { Product } from './Product'
interface Props{
  title?: string
}

export const ListProducts:FC<Props> = ({title}) => {
  return (
    <div className='w-full'>
      <h1 className='text-2xl font-bold text-black text-left mb-3'>{title?title:'Nuevos Productos'}</h1>
      <div className='grid grid-cols-simple gap-4 place-items-center'>
        {
            products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                />
            ))
        }
    </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { TableProducts } from '../../components/Admin'
import { LayoutProfile } from '../../components/layout'
import { useProducts } from '../../hooks';

export const ProductPage = () => {
  const { products } = useProducts();
  return (
    <LayoutProfile>
      <div className="min-h-[85vh]">
        <TableProducts products={products}/>
      </div>
    </LayoutProfile>
  )
}

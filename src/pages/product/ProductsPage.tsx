import React from 'react'
import { LayoutProducts } from '../../components/layout/LayoutProducts'
import { ListProducts } from '../../components/products'
import { Banner } from '../../components/ui'
import { useProducts } from '../../hooks'

export const ProductsPage = () => {
  const { products } = useProducts();
  return (
    <LayoutProducts>
      <Banner title='Abarrotes' description='20% de descuento en abarrotes en la tienda don pepito'/>
        <ListProducts 
        title='Nuevos Productos' 
          productsProps={products}
        />
    </LayoutProducts>
  )
}

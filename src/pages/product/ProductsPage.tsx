import React from 'react'
import { LayoutProducts } from '../../components/layout/LayoutProducts'
import { ListProducts } from '../../components/products'
import { Banner } from '../../components/ui'

export const ProductsPage = () => {
  return (
    <LayoutProducts>
      <Banner title='Abarrotes' description='20% de descuento en abarrotes en la tienda don pepito'/>
        <ListProducts/>
        <ListProducts title='Nuevos Productos'/>
    </LayoutProducts>
  )
}

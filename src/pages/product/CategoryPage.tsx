import React from 'react'
import { useParams } from 'react-router-dom'
import { ListProducts } from '../../components/products'
import { LayoutProducts } from '../../components/layout/LayoutProducts';
import { Banner } from '../../components/ui';

export const CategoryPage = () => {
    // get the category from react-router-dom
    const category = useParams().category
  return (
    <LayoutProducts>
      <Banner
        title={`Oferta del día`}
        description={`10% de descuento en ${category} en la tienda don pepito`}
      />
        <ListProducts
            title= {`Productos de la categoria: ${category}`}
        />
    </LayoutProducts>
  )
}

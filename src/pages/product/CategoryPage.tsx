import React from 'react'
import { useParams } from 'react-router-dom'
import { ListProducts } from '../../components/products'
import { LayoutProducts } from '../../components/layout/LayoutProducts';

export const CategoryPage = () => {
    // get the category from react-router-dom
    const category = useParams().category
  return (
    <LayoutProducts>
        <ListProducts
            title= {`Productos de la categoria: ${category}`}
        />
    </LayoutProducts>
  )
}

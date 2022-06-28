import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LayoutProducts } from '../../components/layout'
import { ListProducts } from '../../components/products';
import { fetchSintoken } from '../../helpers';
import { Producto, ProductoBodega } from '../../interfaces';

export const MarketDetailPage = () => {
    const [products, setProducts] = useState<Producto[]>([]);
    const {id}=useParams();
    const getProductsByMarket=async()=>{
        const resp=await fetchSintoken(`api/bodega/productos/${id}`,{},'GET');
        const data:ProductoBodega=await resp?.json();
        const {productos}=data;
        setProducts(productos)
        console.log(data);
    }

    useEffect(() => {
        getProductsByMarket();
    }, [])
    
  return (
    <LayoutProducts>
        <ListProducts
        title='Productos Bodega'
        productsProps={products}
        />
    </LayoutProducts>
  )
}

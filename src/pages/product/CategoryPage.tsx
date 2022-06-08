import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ListProducts } from '../../components/products'
import { LayoutProducts } from '../../components/layout/LayoutProducts';
import { Banner } from '../../components/ui';
import { fetchSintoken } from '../../helpers';
import { Producto, ProductsI } from '../../interfaces/product';
const routesName=[
  {
    name: "Golosinas",
    path: "/categoria/golosinas",
  },
  {
    name: "Verduras",
    path: "/categoria/verduras",
  },
  {
    name: "Bebidas",
    path: "/categoria/bebidas",
  },
  {
    name: "Lejías",
    path: "/categoria/lejías",
  },
  {
    name: "Limpieza",
    path: "/categoria/limpieza",
  },
  {
    name: "Escobas",
    path: "/categoria/escobas",
  },
  {
    name: "Papeles",
    path: "/categoria/papeles",
  },
  {
    name: "Menestras",
    path: "/categoria/menestra",
  },
  {
    name: "Shampoos",
    path: "/categoria/Shampoo",
  },
  {
    name: "Cereales",
    path: "/categoria/cereales",
  },
  {
    name: "Frutas",
    path: "/categoria/frutas",
  },
]

export const CategoryPage = () => {
    // get the category from react-router-dom
    const category = useParams().category || "";
    const {pathname}=useLocation();
    const [title, setTitle] = useState("");
    const [products, setProducts] = useState<Producto[]>([]);

    const handleProductsCategory = async() => {
      const response = await fetchSintoken(`api/productos/categoria/${category.toUpperCase()}`,{},"GET");
      const data:ProductsI = await response!.json()
      // console.log(data.productos);
      setProducts(data.productos);
      // setTitle(data.category.nombre)
      // return data.products
    }
  
    useEffect(() => {
      if(routesName)
      routesName.map((item)=>{
        if(pathname.includes(item.path)){
          setTitle(item.name);
        }
      })
    }, [pathname]);
    useEffect(() => {
      handleProductsCategory();
    }, [category]);
  return (
    <LayoutProducts>
      <Banner
        title={`Oferta del día`}
        description={`10% de descuento en ${title} en la tienda don pepito`}
      />
        <ListProducts
            productsProps={products}
            title= {`Productos de la categoria: ${title}`}
        />
    </LayoutProducts>
  )
}

import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ListProducts } from '../../components/products'
import { LayoutProducts } from '../../components/layout/LayoutProducts';
import { Banner } from '../../components/ui';
const routesName=[
  {
    name: "Alimentos del día",
    path: "/categoria/diario",
  },
  {
    name: "Ofertas Especiales",
    path: "/categoria/ofertas",
  },
  {
    name: "Abarrotes",
    path: "/categoria/abarrotes",
  },
  {
    name: "Frutas y Verduras",
    path: "/categoria/frutas-y-verduras",
  },
  {
    name: "Limpieza",
    path: "/categoria/limpieza",
  },
]

export const CategoryPage = () => {
    // get the category from react-router-dom
    const category = useParams().category
    const {pathname}=useLocation();
    const [title, setTitle] = useState("");
  
    useEffect(() => {
      if(routesName)
      routesName.map((item)=>{
        if(pathname.includes(item.path)){
          setTitle(item.name);
        }
      })
    }, [pathname]);
  return (
    <LayoutProducts>
      <Banner
        title={`Oferta del día`}
        description={`10% de descuento en ${title} en la tienda don pepito`}
      />
        <ListProducts
            title= {`Productos de la categoria: ${title}`}
        />
    </LayoutProducts>
  )
}

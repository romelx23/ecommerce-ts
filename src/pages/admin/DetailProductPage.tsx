import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LayoutProfile } from '../../components/layout'
import { Producto, ProductoId } from '../../interfaces';

export const DetailProductPage = () => {
  // Actualizar el producto
  const { id } = useParams();
  const [producto, setProducto] = useState<Producto>({} as Producto);
  const getProductId = async () => {
     try{
       // const product = `https://rest-server-cafe-romel.herokuapp.com/api/productos/${id}`;
      const product = `https://node-restserver-cascaron.herokuapp.com/api/productos/${id}`;
      const resp = await fetch(product);
      const { producto }: ProductoId = await resp.json();
      setProducto(producto);
     }catch(error){
        console.log(error);
      }
   };

 useEffect(() => {
     getProductId();
   }, []);
    
  return (
    <LayoutProfile>
        <div className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <h1 className="text-left mx-4 font-semibold">Editar Producto "{producto.nombre}"</h1>
            <div className='text-left mx-4'>
              <label htmlFor="nombre">Nombre del Producto</label>
              <input type="text" className="w-full border-2 border-gray-300 px-2 py-1" id="nombre" placeholder='Ingrese el producto'/>
            </div>
            <div className='text-left mx-4'>
              <label htmlFor="nombre">Precio del Producto</label>
              <input type="number" min={0} className="w-full border-2 border-gray-300 px-2 py-1" id="nombre" placeholder='Ingrese el precio del producto'/>
            </div>
            <div className='text-left mx-4'>
              <label htmlFor="nombre">Descripción del Producto</label>
              <textarea className="w-full border-2 border-gray-300 px-2 py-1" id="nombre" placeholder='Ingrese la descripción del producto' />
            </div>
          <div className='text-left mx-4'>
              <label htmlFor="nombre">Categoría del Producto</label>
              {/* <select className='w-full border-2 border-gray-300 px-2 py-1'>
                <option value="1">Categoria 1</option>
                <option value="2">Categoria 2</option>
              </select> */}
              <input type="text" className="w-full border-2 border-gray-300 px-2 py-1" id="nombre" placeholder='Ingrese una categoría'/>
            </div>
          </div>
          <div className="w-full">
            <img src={producto.img?producto.img:"https://chely.pe/wp-content/uploads/2019/01/Coca-cola-500-original.jpg"} alt="producto" />
          </div>
      </div>
    </LayoutProfile>
  )
}

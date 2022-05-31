import React from "react";
import { LayoutProfile } from "../../components/layout";

export const AddProductPage = () => {
  return (
    <LayoutProfile>
      <div className="min-h-[85vh] grid grid-cols-1 md:grid-cols-2">
        <div className="px-4">
          <h1 className="text-left font-semibold">Agregar Producto</h1>
          <form className="w-full">
            <div className="text-left">
              <label htmlFor="nombre">Nombre del Producto</label>
              <input
                type="text"
                className="w-full border-2 border-gray-300 px-2 py-1"
                id="nombre"
                placeholder="Ingrese el producto"
              />
            </div>
            <div className="text-left">
              <label htmlFor="nombre">Precio del Producto</label>
              <input
                type="number"
                min={0}
                className="w-full border-2 border-gray-300 px-2 py-1"
                id="nombre"
                placeholder="Ingrese el precio del producto"
              />
            </div>
            <div className="text-left">
              <label htmlFor="nombre">Descripción del Producto</label>
              <textarea
                className="w-full border-2 border-gray-300 px-2 py-1"
                id="nombre"
                placeholder="Ingrese la descripción del producto"
              />
            </div>
            <div className="text-left">
              <label htmlFor="nombre">Categoría del Producto</label>
              {/* <select className='w-full border-2 border-gray-300 px-2 py-1'>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
          </select> */}
              <input
                type="text"
                className="w-full border-2 border-gray-300 px-2 py-1"
                id="nombre"
                placeholder="Ingrese una categoría"
              />
            </div>
            <button className="w-full btn my-2 bg-blue-500 text-white hover:bg-blue-700">
              Agregar Producto
            </button>
          </form>
        </div>
        <div className="w-full">
          <img
            src="https://chely.pe/wp-content/uploads/2019/01/Coca-cola-500-original.jpg"
            alt="producto"
          />
        </div>
      </div>
    </LayoutProfile>
  );
};

import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Producto } from "../../interfaces";
interface Props {
  products: Producto[];
}

export const TableProducts: FC<Props> = ({ products }) => {
  const handlePrint = () => {
    window.print();
  };
  // Agregar Funcion Eliminar producto
  return (
    <div className="w-full">
      <div className="flex justify-between mx-6">
        <h1 className="text-left mb-2 text-xl font-bold">
            Gestión Productos
        </h1>
        <div className="flex justify-center items-center gap-2">
            <h1 className="font-semibold">Agregar Producto</h1>
            <Link to="/admin/product/add" className="btn border-green-500 text-green-500 hover:bg-green-700">
                <i className="fas fa-plus"></i>
            </Link>
        </div>
      </div>
      <div className="py-2 overflow-x-auto px-6 pr-10 ">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-900 shadow-dashboard px-8 pt-3 rounded-lg min-h-min print:bg-black print:px-0 print:pl-6 print:break-before-avoid-page">
          <table className="min-w-full print:overflow-hidden">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Ingredientes
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Imagen
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Cantidad
                </th>
                {
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-white">
                    <button
                      onClick={handlePrint}
                      className="btn border-cyan-500 text-cyan-500 hover:bg-cyan-700 print:hidden"
                    >
                      Imprimir Productos
                    </button>
                  </th>
                }
              </tr>
            </thead>
            <tbody className="">
              {products.map((product,i) => (
                <tr className="font-semibold text-lg" key={product._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                    <div className="flex items-center">
                      <div>
                        <div className=" leading-5 text-white">{i+1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className=" leading-5 text-white text-left">{product.nombre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {product.precio}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {product.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    <img
                      src={product.img?product.img:"https://pbs.twimg.com/media/FTd2PibXoAEGOjL?format=png&name=small"}
                      className="w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                    <div className="flex justify-center gap-2 items-center">

                      <Link to={`/admin/product/${product._id}`} className="btn border-blue-500 text-blue-500 hover:bg-blue-700">
                        <i className="fas fa-edit"></i>
                      </Link>

                      <button className="btn hover:bg-red-700 border-red-500 text-red-500">
                      <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

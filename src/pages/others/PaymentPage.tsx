import React, { useContext } from "react";
import { LayoutProducts } from "../../components/layout/LayoutProducts";
import { CartContext } from "../../context/cart";
import { formatPrice } from "../../helpers/format";

export const PaymentPage = () => {
  const { cart } = useContext(CartContext);
  const handlePrint = () => {
    // imprime el contenido del div
    window.print();
  };
  return (
    <LayoutProducts>
      <h1 className="py-2 text-xl font-bold">Pagos</h1>
      <h1 className="text-left mb-2 text-xl font-bold ml-6">
        Compras Realizadas
      </h1>
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
                  Descripción
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  Imagen
                </th>
                {
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-white">
                    <button
                      onClick={handlePrint}
                      className="btn border-cyan-500 text-cyan-500 hover:bg-cyan-700 print:hidden"
                    >
                      Imprimir Boleta
                    </button>
                  </th>
                }
              </tr>
            </thead>
            <tbody className="">
              {cart.map((producto, i) => (
                <tr className="font-semibold text-lg" key={producto._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                    <div className="flex items-center">
                      <div>
                        <div className=" leading-5 text-white">{i + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-left">
                    <div className=" leading-5 text-white">
                      {producto.nombre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5 text-left">
                    {formatPrice(producto.precio * producto.cantidad)}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5 text-left">
                    {producto.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    <img
                      src={producto.img}
                      alt={producto.nombre}
                      className="w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                    <div className="flex justify-center gap-2 items-center">
                      <button className="btn border-blue-500 text-blue-500 hover:bg-blue-700">
                        <i className="fas fa-minus"></i>
                      </button>
                      <h1 className="text-white">{producto.cantidad}</h1>
                      <button className="btn border-blue-500 text-blue-500 hover:bg-blue-700">
                        <i className="fas fa-plus"></i>
                      </button>

                      <button className="btn hover:bg-red-700 border-red-500 text-red-500">
                        <i className="fas fa-backspace"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full my-2">
          <h1>Comuniquese con el bodeguero</h1>
          <p>Número de Teléfono: 593486364</p>
        </div>
      </div>
    </LayoutProducts>
  );
};

import React from "react";
import { LayoutProducts } from "../../components/layout/LayoutProducts";

export const PaymentPage = () => {
    const handlePrint = () => {
        // imprime el contenido del div
        window.print();
      };
  return (
    <LayoutProducts>
      <h1 className="py-2 text-xl font-bold">Pagos</h1>
      <div className="py-2 overflow-x-auto px-6 pr-10 ">
        <h1 className="text-left mb-2 text-xl font-bold">Compras Realizadas</h1>
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
                <tr className="font-semibold text-lg" key={1}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                    <div className="flex items-center">
                      <div>
                        <div className=" leading-5 text-white">1</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className=" leading-5 text-white">producto</div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    S/.80
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    producto
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    <img
                      src="https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/281342430_4110845899040701_3159781186097599122_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=730e14&_nc_eui2=AeEtWzA5XKF8oOb_d21MVhLjnS7LjxuuSxOdLsuPG65LE2Acz3JP16673gfdtJHp75eaEV9VKNCbZtXzhj8iuV2W&_nc_ohc=d6dvNnKA7VsAX9mMkoH&_nc_ht=scontent.flim17-1.fna&oh=00_AT8ip7dDE4zdCxxF-HYZR4VGSLW43Xwip1X0X0jeoMb7EQ&oe=628750EF"
                      alt="coffe"
                      className="w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                    <div className="flex justify-center gap-2 items-center">
                      <button className="btn border-blue-500 text-blue-500 hover:bg-blue-700">
                        <i className="fas fa-minus"></i>
                      </button>
                      <h1 className="text-white">20</h1>
                      <button className="btn border-blue-500 text-blue-500 hover:bg-blue-700">
                        <i className="fas fa-plus"></i>
                      </button>

                      <button className="btn hover:bg-red-700 border-red-500 text-red-500">
                        <i className="fas fa-backspace"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </LayoutProducts>
  );
};

import React, { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { fetchContoken } from "../../helpers";
import { Producto } from "../../interfaces";
interface Props {
  products: Producto[];
}

export const TableProducts: FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [productos, setProductos] = useState(products);
  const [search, setSearch] = useState("");
  const {user}=useContext(AuthContext);
  const handlePrint = () => {
    window.print();
  };
  // Agregar Funcion Eliminar producto
  const handleDelete = async (id: string) => {
    try {
      const resp = await fetchContoken(`api/productos/${id}`, {}, "DELETE");
      const product = await resp!.json();
      const productDel: Producto[] = productos.filter(
        (producto) => producto._id !== id
      );
      setProductos(productDel);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setProductos(filteredProducts);
    // console.log(productos);
  }, [products, currentPage, search]);
  const filteredProducts = () => {
    if (search.length === 0) {
      return products.slice(currentPage, currentPage + 5);
    }
    const filtered = products.filter((producto) =>
      producto.nombre.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.slice(currentPage, currentPage + 5);
  };
  const nextPage = () => {
    if (
      products.filter((producto) =>
        producto.nombre.toLowerCase().includes(search.toLowerCase())
      ).length >
      currentPage + 5
    ) {
      setCurrentPage(currentPage + 5);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 5);
      console.log("prevPage");
    }
  };
  const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentPage(0);
    setSearch(value);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col  mx-6">
        <div className="flex justify-between">
        <h1 className="text-left mb-2 text-xl font-bold">Gestión Productos</h1>
        <h1 className="text-left mb-2 text-xl font-bold">Total de Productos: {products.length} </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex justify-center items-center gap-2 flex-1">
            <h1 className="font-semibold">Buscar Producto:</h1>
            <input
              className="flex-1 mx-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={searchProduct}
            />
          </div>
          <div className="flex mt-3 md:mt-0 items-center gap-2 md:justify-center">
            <h1 className="font-semibold">Agregar Producto</h1>
            <Link
              to={(user.rol==="ADMIN_ROLE")?"/admin/product/add":"/gestion/product/add"}
              className="btn border-green-500 text-green-500 hover:bg-green-700"
            >
              <i className="fas fa-plus"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-2 overflow-x-auto px-6 pr-10 ">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-900 shadow-dashboard px-8 pt-3 rounded-lg min-h-[55vh] print:bg-black print:px-0 print:pl-6 print:break-before-avoid-page">
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
              {productos.map((product, i) => (
                <tr className="font-semibold text-lg" key={product._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                    <div className="flex items-center">
                      <div>
                        <div className=" leading-5 text-white">
                          {i + currentPage + 1}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className=" leading-5 text-white text-left">
                      {product.nombre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {product.precio}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {product.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    <img
                      src={
                        product.img
                          ? product.img
                          : "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
                      }
                      className="w-12 h-12 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                    <div className="flex justify-center gap-2 items-center">
                      <Link
                        to={user.rol==="ADMIN_ROLE"?`${`/admin/product/${product._id}`}`:`${`/gestion/product/${product._id}`}`}
                        className="btn border-blue-500 text-blue-500 hover:bg-blue-700"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn hover:bg-red-700 border-red-500 text-red-500"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {
                productos.length <= 0 && (
                  <tr className="font-semibold text-lg columns-4">
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                   <p className="text-white"> No hay productos con ese nombre</p>
                  </td>
                </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <nav aria-label="flex">
          <ul className="inline-flex -space-x-px">
            <li onClick={prevPage}>
              <a
                href="#"
                className={`py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                ${currentPage>0 && 'disabled:bg-gray-300' }
                `}
              >
                Atrás
              </a>
            </li>
            <li onClick={nextPage}>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Adelante
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

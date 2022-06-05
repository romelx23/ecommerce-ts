import React, { useEffect, useState } from 'react'
import { LayoutProfile } from '../../components/layout'
import { fetchContoken } from '../../helpers'

export const UserPage = () => {

    const [users, setUsers] = useState([])

  useEffect(() => {
    
    getUsers()

  }, [])
  
  const getUsers = async () => {
    try {
      const resp = await fetchContoken(`api/usuarios?desde=0&limit=10`, {},'GET');
      const users = await resp!.json();
      setUsers(users)
      console.log(users)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LayoutProfile>
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
                    {/* <button
                      onClick={handlePrint}
                      className="btn border-cyan-500 text-cyan-500 hover:bg-cyan-700 print:hidden"
                    >
                      Imprimir Productos
                    </button> */}
                  </th>
                }
              </tr>
            </thead>
            {/* <tbody className="">
              {users.map((user, i) => (
                <tr className="font-semibold text-lg" key={user._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                    <div className="flex items-center">
                      <div>
                        <div className=" leading-5 text-white">{i + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className=" leading-5 text-white text-left">
                      {user.nombre}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {user.precio}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    {user.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500  leading-5">
                    <img
                      src={
                        user.img
                          ? user.img
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
                        to={`/admin/product/${product._id}`}
                        className="btn border-blue-500 text-blue-500 hover:bg-blue-700"
                      >
                        <i className="fas fa-edit"></i>
                      </Link>

                      <button onClick={()=>handleDelete(product._id)} 
                      className="btn hover:bg-red-700 border-red-500 text-red-500">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
    </LayoutProfile>
  )
}

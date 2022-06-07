import React, { useEffect, useState } from "react";
import { LayoutProfile } from "../../components/layout";
import { SelectRole } from "../../components/ui";
import { fetchContoken, fetchSintoken } from "../../helpers";
import { Role, RoleResponse, Usuario, UsuariosResponse } from "../../interfaces";

export const UserPage = () => {
  const [user, setUser] = useState<Usuario[]>([]);

  const handleUsers = async () => {
    const resp = await fetchSintoken(
      `api/usuarios?desde=0&limit=20`,
      {},
      "GET"
    );
    const data: UsuariosResponse = await resp!.json();
    // console.log(resp);
    setUser(data.usuario);
    console.log(data);
  };

  const handleDelete = async (id: string) => {
    const resp = await fetchContoken(`api/usuarios/${id}`, {}, "DELETE");
    const data: UsuariosResponse = await resp!.json();
    console.log(data);
    handleUsers();
  };

  useEffect(() => {
    handleUsers();
  }, []);
  return (
    <LayoutProfile>
      <div className="min-h-[85vh] flex flex-col gap-5">
        <div className="w-full">
          <div className="flex justify-between mx-6">
            <h1 className="text-left mb-2 text-xl font-bold">
              Tabla Usuarios
            </h1>
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
                      Correo
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Telefono
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Rol
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Imagen
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Cambiar Rol
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {user.map((usuario, i) => (
                    <tr className="font-semibold text-lg" key={usuario.uid}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                        <div className="flex items-center">
                          <div>
                            <div className=" leading-5 text-white">{i+1}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className=" leading-5 text-white text-left">
                          {usuario.nombre.toLocaleLowerCase()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                        {usuario.correo}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                        {usuario.telefono===0?"aún no tiene teléfono":usuario.telefono}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                        {usuario.estado?"Activo":"Inactivo"}
                        </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                        {usuario.rol?usuario.rol:"aún no tiene rol"}
                        </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                        <img
                          src={usuario.img?usuario.img:"https://jsl-online.com/wp-content/uploads/2017/01/placeholder-user.png"}
                          alt="imagen"
                          title={usuario.nombre}
                          className="w-12 h-12"
                        />
                        </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                        <SelectRole usuario={usuario} handleUsers={handleUsers} />
                        </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => {handleDelete(usuario.uid)}}
                            className="btn hover:bg-red-700 border-red-500 text-red-500"
                          >
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
      </div>
    </LayoutProfile>
  );
};

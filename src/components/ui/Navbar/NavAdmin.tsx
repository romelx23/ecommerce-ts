import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { ButtonToggle } from "../Button/ButtonToggle";

export const NavAdmin = () => {
  const {user,logOut}=useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="p-4 w-full flex justify-between print:hidden">
      <div className="flex items-center space-x-2">
        <ButtonToggle />
        <h1 className="font-bold text-2xl">Overview</h1>
      </div>
      <div
        className="flex justify-center items-center space-x-2"
        style={{ minWidth: "48px" }}
      >
        <p className="font-semibold hidden sm:block">{user.correo?user.correo:"admin@gmail.com"}</p>
        <div className="relative">
          <img
            src={user.img?user.img:"https://cdn.motor1.com/images/mgl/Oov6qy/s3/uif.jpg"}
            alt="avatar"
            className="border-2 border-gray-300 rounded-full h-12 w-12 object-cover nav-admin hover:cursor-pointer"
            style={{ width: "48px", height: "48px" }}
            onClick={() => setToggle(!toggle)}
          />
          {
            toggle && (
              <div className="menu-admin">
            <button
            onClick={logOut}
             className="text-sm bg-slate-600 hover:bg-slate-400 w-full text-white flex justify-center items-center font-semibold ">
              Cerrar Sesión
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
            )
          }
        </div>
      </div>
    </nav>
  );
};

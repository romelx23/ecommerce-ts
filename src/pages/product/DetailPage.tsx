import React from "react";
import { LayoutProducts } from "../../components/layout/LayoutProducts";

export const DetailPage = () => {
  return (
    <LayoutProducts>
      <div className="py-3 flex flex-col lg:flex-row  min-h-[600px]">
        <div className="flex justify-center items-center w-full  lg:w-1/2 min-h-full bg-[#23263b]">
          <img
            src="https://plazavea.vteximg.com.br/arquivos/ids/1962885-450-450/20235718.jpg?v=637599230835400000"
            alt="producto"
            placeholder="producto"
          />
        </div>
        <div className="flex flex-col items-start px-3 text-left">
          <h1 className="font-semibold text-xl">Primor</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rerum
            odio dolores eligendi tempora cumque.
          </p>
          <h2>raiting</h2>
          <div className="my-2 py-1 px-2 bg-[#3f52e8] text-white rounded-lg">
            Popular
          </div>
          <h2 className="text-red-700 font-bold text-xl">S/.15.00</h2>
          <div className="w-full flex flex-wrap gap-2">
            <button className="py-1 px-4 border border-gray-500 rounded-md hover:bg-slate-100 transition">
              chico
            </button>
            <button className="py-1 px-4 border border-gray-500 rounded-md hover:bg-slate-100 transition">
              mediano
            </button>
            <button className="py-1 px-4 border border-gray-500 rounded-md hover:bg-slate-100 transition">
              grande
            </button>
          </div>
          <button className="my-2 w-full bg-gray-300 rounded-md py-2 flex justify-center space-x-2 focus:opacity-80 hover:bg-slate-400 hover:text-white transition">
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p className="font-semibold">Agregar al Carrito</p>
          </button>
        </div>
      </div>
    </LayoutProducts>
  );
};

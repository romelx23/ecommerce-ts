import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UIContext } from "../../context/ui";

export const Carrito = () => {
  const { toggleCart, ToggleCart } = useContext(UIContext);
  return (
    <div className={`absolute w-full top-0 left-0 z-30 ${ToggleCart?'block':'hidden'}`}>
      <div onClick={()=>toggleCart(!ToggleCart)} className="w-full min-h-screen h-auto bg-[#00001099]">
      </div>
        <div className="absolute top-0 right-0 w-72 min-h-screen flex flex-col bg-white p-2 space-y-3">
          <h1>Carrito</h1>
          <div className="w-full flex justify-between items-center px-2">
            <img src="https://pbs.twimg.com/media/FTB2NqpaMAAA2Cv?format=jpg&name=small" alt="producto" className="w-12 h-12 object-cover"/>
            <div className="">
            <p className="text-base font-semibold">Aceite Primor</p>
            <p className="text-sm">mediano</p>
            </div>
            <p>S/.20.30</p>
          </div>
          <div className="w-full flex justify-between items-center px-2">
            <img src="https://pbs.twimg.com/media/FTB2NqpaMAAA2Cv?format=jpg&name=small" alt="producto" className="w-12 h-12 object-cover"/>
            <div className="">
            <p className="text-base font-semibold">Aceite Primor</p>
            <p className="text-sm">mediano</p>
            </div>
            <p>S/.20.30</p>
          </div>
          <div className="w-full flex justify-between items-center px-2">
            <img src="https://pbs.twimg.com/media/FTB2NqpaMAAA2Cv?format=jpg&name=small" alt="producto" className="w-12 h-12 object-cover"/>
            <div className="">
            <p className="text-base font-semibold">Aceite Primor</p>
            <p className="text-sm">mediano</p>
            </div>
            <p>S/.20.30</p>
          </div>
          <div className="w-full flex justify-between items-center px-2">
            <img src="https://pbs.twimg.com/media/FTB2NqpaMAAA2Cv?format=jpg&name=small" alt="producto" className="w-12 h-12 object-cover"/>
            <div className="">
            <p className="text-base font-semibold">Aceite Primor</p>
            <p className="text-sm">mediano</p>
            </div>
            <p>S/.20.30</p>
          </div>
          <div className="flex-1 flex flex-col justify-end">
              <button className="bg-gray-400 py-2 rounded-lg">Comprar</button>
              <Link to="/home/pagos" className="my-2 hover:text-blue-600">ver detalle</Link>
          </div>
        </div>
    </div>
  );
};

import React from "react";
import { ButtonToggle } from "../Button/ButtonToggle";

export const NavAdmin = () => {
  return (
    <nav className="p-4 w-full flex justify-between print:hidden overflow-hidden">
      <div className="flex items-center space-x-2">
        <ButtonToggle/>
        <h1 className="font-bold text-2xl">Overview</h1>
      </div>
      <div className="flex justify-center items-center space-x-2" style={{minWidth:'48px'}}>
        <p className="font-semibold hidden sm:block">admin@gmail.com</p>
        <img
          src="https://cdn.motor1.com/images/mgl/Oov6qy/s3/uif.jpg"
          alt="avatar"
          className="border-2 border-gray-300 rounded-full h-12 w-12 object-cover"
          style={{width: "48px",height: "48px"}}
        />
      </div>
    </nav>
  );
};

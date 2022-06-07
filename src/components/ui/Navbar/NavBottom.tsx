import React from "react";
import { Link } from "react-router-dom";

export const NavBottom = () => {
  return (
    <div className="flex gap-3 relative">
      <Link
        to="/home/filter"
        className="link-category text-sm md:text-base"
        style={{ color: "#000", textDecoration: "none" }}
      >
        Categoría de Productos
      </Link>
      <div className="">
        <div className="flex flex-col md:flex-row absolute md:relative bg-white h-10 md:h-auto overflow-hidden px-2 pb-2 md:pb-0 hover:h-auto transition">
          <h1 className="p-2 md:hidden mb-1 text-sm md:text-base">Ver Categorías</h1>
          <Link
            to="/home/categoria/diario"
            className="link-category"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Alimentos del Día
          </Link>
          <Link
            to="/home/categoria/ofertas"
            className="link-category"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Ofertas Especiales
          </Link>
          <Link
            to="/home/categoria/abarrotes"
            className="link-category"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Abarrotes
          </Link>
          <Link
            to="/home/categoria/frutas-y-verduras"
            className="link-category"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Frutas y Verduras
          </Link>
          <Link
            to="/home/categoria/limpieza"
            className="link-category"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Limpieza
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const NavBottom = () => {
  return (
    <div className="flex gap-3">
      <Link
        to="/home/filter"
        className="p-2 hover:bg-gray-200 transition rounded-lg"
        style={{ color: "#000", textDecoration: "none" }}
      >
        Categoría de Productos
      </Link>
      <Link
        to="/home/category/diario"
        className="p-2 hover:bg-gray-200 transition rounded-lg"
        style={{ color: "#000", textDecoration: "none" }}
      >
        Alimentos del Día
      </Link>
      <Link
        to="/home/category/ofertas"
        className="p-2 hover:bg-gray-200 transition rounded-lg"
        style={{ color: "#000", textDecoration: "none" }}
      >
        Ofertas Especiales
      </Link>
      <Link
        to="/home/category/abarrotes"
        className="p-2 hover:bg-gray-200 transition rounded-lg"
        style={{ color: "#000", textDecoration: "none" }}
      >
        Abarrotes
      </Link>
      <Link
        to="/home/category/frutas-y-verduras"
        className="p-2 hover:bg-gray-200 transition rounded-lg"
        style={{ color: "#000", textDecoration: "none" }}
      >
        Frutas y Verduras
      </Link>
      <Link
        to="/home/category/limpieza"
        className="p-2 hover:bg-gray-200 transition rounded-lg"
        style={{ color: "#000", textDecoration: "none" }}
      >
        Limpieza
      </Link>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../helpers/products";
import { Categoria } from "../../../interfaces";

export const NavBottom = () => {
  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        setCategories(res.categorias);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex gap-3 relative">
      <Link
        to="/home/filter"
        className="link-category text-sm md:text-base "
      >
        Categoría de Productos
      </Link>
      <div className="">
        <div className="navbottom-cateogries">
          <h1 className="p-2 md:hidden mb-1 text-sm md:text-base">
            Ver Categorías
          </h1>
          {categories.map((category) => (
            <Link
              key={category._id}
              title={category.nombre}
              to={`/home/categoria/${category.nombre.toLocaleLowerCase()}`}
              className="link-category"
            >
              {category.nombre}
            </Link>
          ))}
          {/* <Link
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
          </Link> */}
        </div>
      </div>
    </div>
  );
};

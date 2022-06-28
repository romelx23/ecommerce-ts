import React, { FC, useContext, useEffect, useState } from "react";
import { products } from "../../data/products";
import { Product } from "./Product";
import { Producto, ProductsI } from "../../interfaces/product";
import { FavoriteContext } from "../../context/favorite/FavoriteContext";
import { useProducts } from "../../hooks";
interface Props {
  title?: string;
  productsProps: Producto[];
}

export const ListProducts: FC<Props> = ({ title, productsProps }) => {
  const { getProducts } = useContext(FavoriteContext);
  const { products } = useProducts();
  useEffect(() => {
    getProducts(products);
  }, [products]);

  return (
    <div className="w-full pt-2">
      <h1 className="text-2xl font-bold text-black text-left mb-3 ml-3">
        {title ? title : "Nuevos Productos"}
      </h1>
      <div className="grid grid-cols-simple gap-4 place-items-center ">
        {productsProps
          ? productsProps.map((product) => (
              <Product key={product._id} product={product} />
            ))
          : products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        {
          productsProps.length<0&&
          <div className="flex flex-col items-center opacity-60">
            <h1 className="font-extralight">
              No Has Añadido Productos al Carrito
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        }
      </div>
    </div>
  );
};

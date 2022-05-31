import React, { FC, useContext, useEffect, useState } from "react";
import { products } from "../../data/products";
import { Product } from "./Product";
import { Producto, ProductsI } from "../../interfaces/product";
import { FavoriteContext } from "../../context/favorite/FavoriteContext";
import { useProducts } from "../../hooks";
interface Props {
  title?: string;
  productsProps?: Producto[];
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
      </div>
    </div>
  );
};

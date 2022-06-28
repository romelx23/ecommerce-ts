import { useEffect, useState } from "react";
import { Producto, ProductsI } from "../interfaces/product";
import { baseUrl } from "../utils";

export const useProducts = () => {
  const url =`${baseUrl}/api/productos?limite=5`;
  // const url =`https://bodegass.herokuapp.com/api/productos?limite=5`;
    // "https://node-restserver-cascaron.herokuapp.com/api/productos?limite=30";
  const [products, setProducts] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const { productos }: ProductsI = await response.json();
    // console.log(productos);
    setProducts(productos);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [])
  return {
    products,
    loading,
    fetchData,
  }
};

import { useEffect, useState } from "react";
import { Producto, ProductsI } from "../interfaces/product";

export const useProducts = () => {
  const baseUrl =
    "https://node-restserver-cascaron.herokuapp.com/api/productos?limite=30";
  // const baseUrl='https://rest-server-cafe-romel.herokuapp.com/api/productos?limite=25'
  const [products, setProducts] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(baseUrl);
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

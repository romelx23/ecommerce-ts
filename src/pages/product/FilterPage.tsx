import React, { useContext, useEffect, useState } from "react";
import { LayoutProducts } from "../../components/layout/LayoutProducts";
import { ListProducts } from "../../components/products/ListProducts";
import {
  Accordion,
  FilterBrand,
  FilterCategory,
  FilterPrice,
} from "../../components/ui";
import { ProductContext } from "../../context/product";
import { useProducts } from "../../hooks";

export const FilterPage = () => {
  const { productFilter, productsFilter, clearFilter } =
    useContext(ProductContext);
  // hook para obtener los productos
  const { products } = useProducts();
  // estado para controlar los productos si se filtran o no
  const [productos, setProductos] = useState(products);
  // efecto para controlar los productos si se filtran o no

  const cleanFilter = () => {
    setProductos(products);
    clearFilter();
  };

  useEffect(() => {
    setProductos(products);
  }, [products]);

  useEffect(() => {
    setProductos(productsFilter);
  }, [productsFilter]);

  return (
    <LayoutProducts>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full min-h-full p-2 sm:w-96">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Filtros</h1>
              <button 
              onClick={cleanFilter}
              className="text-base font-semibold
              btn hover:bg-blue-600">
                Limpiar Filtros
                <i className="fas fa-filter"></i>
              </button>
            </div>
            <FilterCategory />
            <FilterBrand />
            <FilterPrice />
            {/* <Accordion title="Tamaño" active={active}>
              <h1>Chico</h1>
              <h1>Mediano</h1>
              <h1>Grande</h1>
            </Accordion> */}
          </div>
          <button
            onClick={() => {
              productFilter(products);
            }}
            className="btn w-full btn-add"
          >
            <h2>Filtrar Productos</h2>
          </button>
        </div>
        <ListProducts title="Productos filtrados" productsProps={productos} />
      </div>
    </LayoutProducts>
  );
};

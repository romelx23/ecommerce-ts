import React, { useState } from "react";
import { LayoutProducts } from "../../components/layout/LayoutProducts";
import { ListProducts } from "../../components/products/ListProducts";
import { Accordion } from "../../components/ui";

export const FilterPage = () => {
  const [active, setActive] = useState(false);
  return (
    <LayoutProducts>
      <div className="flex">
        <div className="w-96 min-h-full  p-2">
          <div className="flex flex-col">
            <div className="flex rounded-md bg-blue-100 p-2 justify-between mt-4 mb-1 hover:bg-blue-300 transition">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>
                </svg>
                <p>Filtros</p>
              </div>
              <button
                onClick={() => setActive(!active)}
                className="flex items-center hover:cursor-pointer"
              >
                {active ? "Expandir Todo" : "Retraer Todo"}
                {active ? (
                  <h1 className="px-2 font-semibold text-xl">+</h1>
                ) : (
                  <h1 className="px-2 font-semibold text-xl">-</h1>
                )}
              </button>
            </div>
            <Accordion title="Categorías" active={active}>
              <h1>Abarrotes</h1>
              <h1>Verduras</h1>
              <h1>Legumbres</h1>
              <h1>Aceites</h1>
            </Accordion>
            <Accordion title="Marcas" active={active}>
              <h1>Ace</h1>
              <h1>Sapolio</h1>
              <h1>Magi</h1>
              <h1>Alacena</h1>
            </Accordion>
            <Accordion title="Precios" active={active}>
              <h1>Ace</h1>
              <h1>Sapolio</h1>
            </Accordion>
            <Accordion title="Tamaño" active={active}>
              <h1>Chico</h1>
              <h1>Mediano</h1>
              <h1>Grande</h1>
            </Accordion>
          </div>
        </div>
        <ListProducts title="Productos filtrados" />
      </div>
    </LayoutProducts>
  );
};

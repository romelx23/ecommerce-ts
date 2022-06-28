import React from "react";
import { Link } from "react-router-dom";
import { LayoutProfile } from "../../components/layout";

export const MarketPage = () => {
  return (
    <LayoutProfile>
      <div className="min-h-[85vh] flex justify-around flex-wrap gap-2">
        <Link to="/gestion/bodega/agregar" className="card-admin">
          <h1>Agregar Bodega</h1>
          <img src="https://cdn-icons.flaticon.com/png/512/4148/premium/4148509.png?token=exp=1656386480~hmac=033c78a33f91a78ea99da4164176ff66" alt="market" className="w-12 h-12" />
        </Link>
        <Link to="/gestion/bodega/actualizar" className="card-admin">
          <h1>Editar Bodega</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/2920/2920100.png" alt="market" className="w-12 h-12" />
        </Link>
      </div>
    </LayoutProfile>
  );
};

import React, { useContext, useEffect } from 'react'
import { TableProducts } from '../../components/Admin'
import { LayoutProfile } from '../../components/layout'
import { AuthContext } from '../../context/auth';
import { useProducts } from '../../hooks';

export const ProductPage = () => {
  const {user}=useContext(AuthContext);
  const { productsMarket,products } = useProducts();
  const productsByRole = user.rol === 'ADMIN_ROLE' ? products : productsMarket;
  return (
    <LayoutProfile>
      <div className="min-h-[85vh]">
        <TableProducts products={productsByRole}/>
      </div>
    </LayoutProfile>
  )
}

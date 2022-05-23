import React, { FC, useContext, useEffect } from "react";
import { Carrito } from "../products";
import { Footer } from "../ui";
import { ButtonTop } from "../ui/Button/ButtonTop";
import { Header } from "../ui/Header/Header";
import { FavoriteContext } from '../../context/favorite/FavoriteContext';
interface Props {
  children: React.ReactNode;
}

export const LayoutProducts: FC<Props> = ({ children }) => {
  const {getFavorites}=useContext(FavoriteContext);
  useEffect(()=>{
    getFavorites();
  },[]);
  return (
    <div className="animation min-h-screen flex flex-col justify-between">
      <div className="p-4 w-full">
      <Carrito/>
        <Header />
        {children}
      </div>
      <ButtonTop/>
      <Footer />
    </div>
  );
};

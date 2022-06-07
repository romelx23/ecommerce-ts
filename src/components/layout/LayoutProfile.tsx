import React, { FC, useContext } from "react";
import { ButtonWhatsApp, Drawer, FooterAdmin, NavAdmin } from "../ui";
import { UIContext } from '../../context/ui/UIContext';
interface Props {
  children: React.ReactNode;
}

export const LayoutProfile: FC<Props> = ({ children }) => {
  const {ToggleMenu}=useContext(UIContext);
  return (
    <div className="min-h-screen flex bg-[#f4f5fc] overflow-hidden">
        <Drawer/>
      <div className={`flex flex-col justify-between ${ToggleMenu?'w-layout':'w-full'} print:w-full`}>
        <NavAdmin />
        {children}
        <FooterAdmin />
      </div>
      <ButtonWhatsApp/>
    </div>
  );
};

import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from '../pages/others/NotFound';
import { 
  ProductsPage,
  ProductPage,
  DetailPage,
  LoginPage,
  RegisterPage,
  SalesPage,
  AdminPage,
  ProfilePage,
  UpadateProfilePage,
  ConfigurePage,

} from "../pages";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="">
        <Routes>
          {/* Products Page */}
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/home/:id" element={<DetailPage />} />
          {/* Auth Page */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          {/* Sales Page */}
          <Route path="/sales" element={<SalesPage />} />
          {/* Admin Page */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/product" element={<ProductPage />} />
          {/* User Page */}
          <Route path="/user" element={<ProfilePage />} />
          <Route path="/user/update/:id" element={<UpadateProfilePage />} />
          <Route path="/user/configure" element={<ConfigurePage />} />

          <Route path="/" element={<ProductsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

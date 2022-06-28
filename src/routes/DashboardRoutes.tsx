import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/others/NotFound";
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
  CategoryPage,
  FilterPage,
  DashBoardPage,
  FaqPage,
  PaymentPage,
  SearchPage,
  FavoritePage,
  DetailProductPage,
  AddProductPage,
  DetailUserPage,
  UserPage,
  CategoryAdminPage,
  OrderPage,
  OrderManagementPage,
  MarketAddPage,
  MarketPage,
  MarketDetailPage
} from "../pages";
import { AuthContext } from "../context/auth";
export const DashboardRoutes = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="">
        <Routes>
          {/* Products Page */}
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/home/:id" element={<DetailPage />} />
          <Route path="/home/categoria/:category" element={<CategoryPage />} />
          <Route path="/home/filter" element={<FilterPage />} />
          <Route path="/home/pagos" element={<PaymentPage />} />
          <Route path="/home/favoritos" element={<FavoritePage />} />
          <Route path="/home/buscar" element={<SearchPage />} />
          <Route path="/bodega/:id" element={<MarketDetailPage />} />
          {/* Auth Page */}
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          {/* Sales Page */}
          <Route path="/sales" element={<SalesPage />} />
          {/* Admin Page */}
          {user && user.rol === "ADMIN_ROLE" && (
            <>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/products" element={<ProductPage />} />
              <Route
                path="/admin/product/:id"
                element={<DetailProductPage />}
              />
              <Route path="/admin/product/add" element={<AddProductPage />} />
              <Route path="/admin/user" element={<UserPage />} />
              <Route path="/admin/user/detail" element={<DetailUserPage />} />
              <Route path="/admin/category" element={<CategoryAdminPage />} />
            </>
          )}
          {
            user && user.rol === "BODEGUERO_ROLE" && (
              <>
                <Route path="/gestion/products" element={<ProductPage />} />
              <Route
                path="/gestion/product/:id"
                element={<DetailProductPage />}
              />
              <Route path="/gestion/product/add" element={<AddProductPage />} />
              <Route path="/gestion/category" element={<CategoryAdminPage />} />
              <Route path="/gestion/bodega" element={<MarketPage />} />
              <Route path="/gestion/bodega/agregar" element={<MarketAddPage />} />
              <Route path="/gestion/bodega/actualizar" element={<MarketAddPage />} />
              <Route path="/gestion/pedidos" element={<OrderManagementPage />} />
              </>
            )
          }
          {/* User Page */}
          <Route path="/user/profile" element={<ProfilePage />} />
          <Route path="/user/profile/edit/:id" element={<UpadateProfilePage />} />
          <Route path="/user/configure" element={<ConfigurePage />} />
          <Route path="/user/dashboard" element={<DashBoardPage />} />
          <Route path="/user/orders" element={<OrderPage />} />
          {/* Other Page */}
          <Route path="/home/faq" element={<FaqPage />} />

          <Route path="/" element={<ProductsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

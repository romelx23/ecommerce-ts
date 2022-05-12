import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages";
import { RegisterPage } from '../pages/auth/RegisterPage';

export const DashboardPrivate = () => {
  return (
    <>
      <div className="">
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
};

// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { AuthContext } from "../context/auth";
// import { login } from "../actions/auth";
// import { StartloadPost } from "../actions/post";
import { DashboardPrivate } from "./DashboardPrivate";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user,startCheking,checking } = useContext(AuthContext);

  // const dispatch = useDispatch();

  // const [checking, setChecking] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    startCheking();
    console.log("startCheking");
    // localStorage.setItem("uid", "123");
  }, [user.nombre]);
  

  if(checking){
      return(
          <h1 className="bg-blue-600 
          text-white
           font-bold
            text-3xl
            h-screen
            ">
              Espere....
              </h1>
      )
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/auth/*" element={
            <PublicRoute>
              <DashboardPrivate/>
            </PublicRoute>
          }/>
          <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes/>
            </PrivateRoute>
          } />
      </Routes>
    </BrowserRouter>
  );
};

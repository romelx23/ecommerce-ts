// import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { BrowserRouter, Routes,Route } from "react-router-dom";
// import { login } from "../actions/auth";
// import { StartloadPost } from "../actions/post";
import { DashboardPrivate } from "./DashboardPrivate";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  // const { user } = useContext(AuthContext);

  // const dispatch = useDispatch();

  const [checking, setChecking] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //     const auth = getAuth();
  //     const unSubscribe=onAuthStateChanged(auth,(user)=>{
  //         if(user?.uid){
  //             dispatch(login(user.uid,user.displayName,user.photoURL));
  //             setIsLoggedIn(true);
  //             dispatch(StartloadPost());

  //         }else{
  //             setIsLoggedIn(false);
  //         }

  //         setChecking(false);
  //     });
  // }, [dispatch,setChecking,setIsLoggedIn])
  useEffect(() => {
    localStorage.setItem("uid", "123");
  }, []);
  

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

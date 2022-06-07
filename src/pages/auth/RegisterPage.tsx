import React from "react";
import { FormRegister, NavbarAuth } from "../../components/ui";
import { validateForm } from "../../helpers";
import { useForm } from "../../hooks";
// import { useDispatch } from "react-redux";
// import { authRegister } from "../actions/auth";


export const RegisterPage = () => {
  return (
    <div className="w-full h-screen p-3">
      <NavbarAuth />
      <div className="flex justify-center items-center">
        <FormRegister/>
      </div>
    </div>
  );
};
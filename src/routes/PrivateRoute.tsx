import React, { FC, ReactElement } from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router";

interface Props{
    children: ReactElement<any, any> | null;
}


export const PrivateRoute:FC<Props> = ({children}) => {
    const uid=localStorage.getItem('uid');
    // const {uid} = useSelector(state=>state.auth);
    // console.log(uid);
    return uid
    ? children
    :<Navigate to="/auth/login"/>
};

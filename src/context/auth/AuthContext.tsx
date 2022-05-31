import { createContext } from 'react';
import { User, LoginI } from '../../interfaces/user';

interface ContextProps{
    checking:boolean;
    user:User;
    startLogin: (email:string,password:string)=>void;
    startCheking:()=>void;
    logOut:()=>void;
}

export const AuthContext=createContext({} as ContextProps)
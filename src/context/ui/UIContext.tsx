import { createContext } from 'react';

interface ContextProps{
        ToggleMenu:boolean;
        toggleMenu:(value:boolean)=>void;
        ToggleCart:boolean;
        toggleCart:(value:boolean)=>void;
}

export const UIContext=createContext({} as ContextProps)
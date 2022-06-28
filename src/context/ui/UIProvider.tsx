import { FC, useReducer } from 'react'
import { UIContext, UIReducer } from './'
interface Props {
    children: React.ReactNode
}

export interface UIState {
  ToggleMenu: boolean;
  ToggleCart: boolean;
  ToggleModal:boolean;
}

export const UI_INITIAL_STATE: UIState = {
  ToggleMenu: true,
  ToggleCart:false,
  ToggleModal:false,
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)
  const toggleMenu=(value:boolean)=>{
    dispatch({type:'[UI] - Toggle Sidebar',payload:value})
  }
  const toggleCart=(value:boolean)=>{
    dispatch({type:'[UI] - Toggle Cart',payload:value})
  }
  const toggleModal=(value:boolean)=>{
    dispatch({type:'[UI] - Toggle Modal',payload:value})
  }
  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleMenu,
        toggleCart,
        toggleModal
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

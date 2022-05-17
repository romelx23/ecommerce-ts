import { FC, useReducer } from 'react'
import { UIContext, UIReducer } from './'
interface Props {
    children: React.ReactNode
}

export interface UIState {
  ToggleMenu: boolean
}

export const UI_INITIAL_STATE: UIState = {
  ToggleMenu: true
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)
  const toggleMenu=(value:boolean)=>{
    dispatch({type:'[UI] - Toggle Sidebar',payload:value})
  }
  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleMenu

      }}
    >
      {children}
    </UIContext.Provider>
  );
};

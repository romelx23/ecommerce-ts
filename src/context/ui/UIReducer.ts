import { UIState } from './UIProvider';

type UIActionType = 
| {type:'[UI] - Toggle Sidebar', payload:boolean}

export const UIReducer = (state:UIState,action:UIActionType):UIState => { 
    switch (action.type) {
        case '[UI] - Toggle Sidebar':
            return {
                ...state,
                ToggleMenu: action.payload
            };
    
        default:
            return state;
    }
 }
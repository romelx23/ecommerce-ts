import { UIState } from './UIProvider';

type UIActionType = 
| {type:'[UI] - Toggle Sidebar', payload:boolean}
| {type:'[UI] - Toggle Cart', payload:boolean}
| {type:'[UI] - Toggle Modal', payload:boolean}

export const UIReducer = (state:UIState,action:UIActionType):UIState => { 
    switch (action.type) {
        case '[UI] - Toggle Sidebar':
            return {
                ...state,
                ToggleMenu: action.payload
            };
        case '[UI] - Toggle Cart':
            return {
                ...state,
                ToggleCart: action.payload
            };
        case '[UI] - Toggle Modal':
            return {
                ...state,
                ToggleModal: action.payload
            };
    
        default:
            return state;
    }
 }
import { CartState } from './CartProvider';

type CartActionType = 
| {type:'[Cart] - Add to cart', payload: {}}

export const CartReducer = (state:CartState,action:CartActionType):CartState => { 
    switch (action.type) {
        case '[Cart] - Add to cart':
            return {
                ...state,
            };
    
        default:
            return state;
    }
 }
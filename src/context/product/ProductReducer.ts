import { ProductForm } from '../../interfaces';
import { ProductState } from './ProductProvider';

type ProductActionType = 
| {type:'[Product] - Add Product', payload:{product:ProductForm}}
| {type:'[Product] - Upload Product Image', payload:{product:ProductForm}}

export const ProductReducer = (state:ProductState,action:ProductActionType):ProductState => { 
    switch (action.type) {
        case '[Product] - Add Product':
            return {
                ...state,
                product: action.payload.product
            };
        case '[Product] - Upload Product Image':
            return {
                ...state,
                product: action.payload.product
            };
    
        default:
            return state;
    }
 }
import { CategoryForm, ProductForm } from '../../interfaces';
import { ProductState } from './ProductProvider';

type ProductActionType = 
| {type:'[Product] - Add Product', payload:{product:ProductForm}}
| {type:'[Product] - Upload Product Image', payload:{product:ProductForm}}
| {type:'[Product] - Load Product', payload:{products:[]}}
| {type:'[Category] - Add Category', payload:{category:CategoryForm}}
| {type:'[Category] - Load Category', payload:{categories:[]}}

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
        case '[Category] - Add Category':
            return {
                ...state,
                category: action.payload.category
            };
        case '[Category] - Load Category':
            return {
                ...state,
                categories: action.payload.categories
            };
        case '[Product] - Load Product':
            return {
                ...state,
                products: action.payload.products
            };
    
        default:
            return state;
    }
 }
import { CategoriaGeneralI } from '../interfaces';
import { fetchSintoken } from './';

export const getCategories= async ()=>{
    const resp=await fetchSintoken('api/categorias',{},);
    const data:CategoriaGeneralI=await resp!.json();
    return data;
}
import { createContext } from "react";
import { ProductForm,CategoryForm } from "../../interfaces";

interface ContextProps {
  product: ProductForm;
  category:CategoryForm
  addProduct: (product: ProductForm) => void;
  startUploading: (file: File) => void;
}

export const ProductContext = createContext({} as ContextProps);

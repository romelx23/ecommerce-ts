import { createContext } from "react";
import { ProductForm } from "../../interfaces";

interface ContextProps {
  product: ProductForm;
  addProduct: (product: ProductForm) => void;
  startUploading: (file: File) => void;
}

export const ProductContext = createContext({} as ContextProps);

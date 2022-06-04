import { FC, useReducer } from "react";
import Swal from "sweetalert2";
import { ProductContext, ProductReducer } from ".";
import { fileUpload } from "../../helpers/fileUpload";
import { ProductForm } from "../../interfaces";
export interface ProductContextProps {
  children: React.ReactNode;
}

export interface ProductState {
  product: ProductForm;
}

export const Product_INITIAL_STATE: ProductState = {
  product: {
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  },
};

export const ProductProvider: FC<ProductContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, Product_INITIAL_STATE);
  const addProduct = (product: ProductForm) => {
    dispatch({
      type: "[Product] - Add Product",
      payload: {
        product,
      },
    });
  };
  const startUploading = async (file: File) => {
    const url: string = await fileUpload(file);
    Swal.fire({
        title:'Uploading...',
        text:'Please wait',
        allowOutsideClick:false,
        showLoaderOnConfirm:true,
        didOpen:()=>{
            Swal.showLoading();
        }
    })
    dispatch({
      type: "[Product] - Upload Product Image",
      payload: {
        product: {
          ...state.product,
          image: url,
        },
      },
    });
    console.log(url);
    Swal.close();
  };
  return (
    <ProductContext.Provider
      value={{
        ...state,
        addProduct,
        startUploading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

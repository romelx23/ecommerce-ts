import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  useFormik,
} from "formik";
import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/product";
import { getCategories } from "../../helpers";
import { fetchContoken } from "../../helpers/fetch";
import { fileUpload } from "../../helpers/fileUpload";
import { useUpload } from "../../hooks";
import { ProductoResponseError } from "../../interfaces";
import { CategoriaI } from "../../interfaces/category";
import { Producto } from "../../interfaces/product";
import * as Yup from "yup";

interface FormValues {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

interface Props {
  producto?: Producto;
}

export const FormProducts: FC<Props> = ({ producto }) => {
  const [category, setCategory] = useState<CategoriaI[]>([]);
  const [url, setUrl] = useState("");
  const { startUploading, product } = useContext(ProductContext);
  const navigate = useNavigate();
  const {
    errors,
    values,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setValues,
  } = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      category: "",
      image: "",
    },
    // validationSchema: Yup.object({
    //   name: Yup.string()
    //     .max(15, "Máximo de 20 caracteres")
    //     .required("El nombre es requerido"),
    //   price: Yup.number()
    //     .typeError("El precio debe ser un número")
    //     .required("El precio es requerido"),
    //   description: Yup.string()
    //   .max(50, "Máximo de 50 caracteres")
    //   .required("El nombre es requerido"),
    //   category: Yup.string()
    //   .required("La categoría es requerida"),
    //   image: Yup.string()
    //   .required("La imagen es requerida"),
    // }),
    validate: (values: FormValues) => {
      let errors: FormikErrors<FormValues> = {};
      if (!values.name) {
        errors.name = "El nombre es requerido";
      }
      if (!values.price) {
        errors.price = "El precio es requerida";
      }
      if (!values.description) {
        errors.description = "La descripción es requerida";
      }
      if (!values.category) {
        errors.category = "La categoría es requerida";
      }

      return errors;
    },
    onSubmit: () => {
      if (producto?.nombre) {
        updateProduct();
      } else {
        AddProduct();
      }
    },
  });

  const AddProduct = async () => {
    console.log(errors, "errors");
    console.log(values, "values");
    if (Object.keys(errors).length === 0) {
      const resp = await fetchContoken(
        "api/productos",
        {
          nombre: values.name,
          precio: values.price,
          descripcion: values.description,
          img: url,
          categoria: values.category,
          idProducto: 1,
          mac: "esta es la mac",
          activo: true,
        },
        "POST"
      );
      const data: ProductoResponseError = await resp!.json();
      console.log(data, "data upload");
      navigate("/admin/products");
    }
  };

  const updateProduct = async () => {
    console.log(errors, "errors");
    if (Object.keys(errors).length === 0) {
      const resp = await fetchContoken(
        `api/productos/${producto!._id}`,
        {
          nombre: values.name,
          precio: values.price,
          descripcion: values.description,
          img: url,
          categoria: values.category,
          idProducto: 1,
          mac: "esta es la mac",
          activo: true,
        },
        "PUT"
      );
      const data: ProductoResponseError = await resp!.json();
      console.log(data, "data upload");
      navigate("/admin/products");
    }
  };

  const handleCategory = async () => {
    const category = await getCategories();
    setCategory(category.categorias);
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    console.log(e.target.files);
    if (file) {
      // console.log('file',file);
      const resp: string = await fileUpload(file);
      // console.log(resp, "resp");
      // startUploading(file);
      console.log(resp);
      setUrl(resp);
    }
  };

  useEffect(() => {
    if (producto?.nombre) {
      setValues({
        name: producto?.nombre ? producto.nombre : "",
        price: producto?.precio ? `${producto?.precio}` : "",
        description: producto?.descripcion ? producto?.descripcion : "",
        category: producto?.categoria.nombre ? producto?.categoria.nombre : "",
        image: producto?.img ? producto?.img : "",
      });
      setUrl(producto?.img ? producto?.img : "");
    }
    console.log(producto, "producto");
    handleCategory();
  }, [producto]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full min-h-[85vh] grid grid-cols-1 md:grid-cols-2"
      >
        <div className="px-4">
          {producto?.nombre ? (
            <h1 className="text-left font-semibold">Editar Producto</h1>
          ) : (
            <h1 className="text-left font-semibold">Agregar Producto</h1>
          )}
          <div className="text-left">
            <label htmlFor="name">Nombre del Producto</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ingrese el producto"
            />
            {touched.name && errors.name && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.name}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="price">Precio del Producto</label>
            <input
              type="number"
              name="price"
              min={0}
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              id="price"
              placeholder="Ingrese el precio del producto"
            />
            {touched.price && errors.price && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.price}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="description">Descripción del Producto</label>
            <textarea
              className="w-full border-2 border-gray-300 px-2 py-1"
              id="description"
              name="description"
              placeholder="Ingrese la descripción del producto"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.description && errors.description && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.description}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="nombre">Categoría del Producto</label>
            {/* obetener las categorías */}
            <select
              name="category"
              id="category"
              value={values.category}
              onBlur={handleBlur}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-2 py-1"
            >
              {category.map((item: CategoriaI) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.nombre}
                  </option>
                );
              })}
            </select>
            {touched.category && errors.category && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.category}
              </p>
            )}
          </div>
          {producto?.nombre ? (
            <button
              type="submit"
              className="w-full btn my-2 bg-purple-500 text-white hover:bg-purple-700"
            >
              Editar Producto
            </button>
          ) : (
            <button
              type="submit"
              className="w-full btn my-2 bg-blue-500 text-white hover:bg-blue-700"
            >
              Agregar Producto
            </button>
          )}
        </div>
        <div className="w-full flex flex-col">
          <input
            type="file"
            name="image"
            className="w-full border-2 border-gray-300 px-2 py-1 object-cover"
            id="image"
            placeholder="Ingrese la descripción del producto"
            onChange={handleImage}
            onBlur={handleBlur}
          />
          <img
            src={
              url
                ? url
                : "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
            }
            alt="producto"
          />
        </div>
      </form>
    </>
  );
};

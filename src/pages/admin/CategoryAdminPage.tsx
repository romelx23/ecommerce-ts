import { FormikErrors, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { LayoutProfile } from "../../components/layout";
import { fetchContoken, fetchSintoken } from "../../helpers";
import { CategoryI, CategoryResponse } from "../../interfaces";
import { getCategories } from "../../helpers/products";
import Swal from "sweetalert2";
interface FormValues {
  name: string;
  status: boolean;
}

export const CategoryAdminPage = () => {
  const [categories, setCategories] = useState<CategoryI[]>([]);
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
      status: true,
    },
    validate: (values: FormValues) => {
      let errors: FormikErrors<FormValues> = {};
      if (!values.name) {
        errors.name = "El Categoría es requerida";
      }
      if (values.name.length < 3 || values.name.length > 20) {
        errors.name = "La Categoría debe tener entre 3 y 20 caracteres";
      }
      if (!values.status) {
        errors.status = "El estado es requerido";
      }

      return errors;
    },
    onSubmit: () => {
      submitCategory();
    },
  });
  // console.log(values,"values");
  const submitCategory = async () => {
    try {
      const resp = await fetchContoken(
        `api/categorias`,
        {
          nombre: values.name,
        },
        "POST"
      );
      setValues({
        name: "",
        status: true,
      });
      handleCateogries();
      Swal.fire({
        title: "Categoría creada",
        text: "La categoría se ha creado correctamente",
        icon: "success",
        confirmButtonText: "Ok",
      });
      const data: CategoryI = await resp!.json();

    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se ha podido crear la categoría",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.log(error);
    }
  };
  const handleCateogries = async () => {
    const resp = await fetchSintoken(`api/categorias?desde=0&limit=10`, {}, "GET");
    const data: CategoryResponse = await resp!.json();
    setCategories(data.categorias);
  };
  const handleDelete=async(id:string)=>{
    const resp=await fetchContoken(`api/categorias/${id}`,{},'DELETE')
    const data=await resp!.json()
    Swal.fire({
      title: "Eliminado",
      text: "La categoría se ha eliminado correctamente",
      icon: "success",
      confirmButtonText: "Ok",
    });
    handleCateogries()
  }
  const handleUpdate=async(id:string)=>{
    const resp=await fetchContoken(`api/categorias/${id}`,{
      nombre:values.name,
      estado:values.status
    },'PUT')
    const data=await resp!.json()
    Swal.fire({
      title: "Actualizado",
      text: "La categoría se ha actualizado correctamente",
      icon: "success",
      confirmButtonText: "Ok",
    });
    handleCateogries()
  }

  useEffect(() => {
    handleCateogries();
    // console.log(categories, "categories");
  }, [handleSubmit]);

  return (
    <LayoutProfile>
      <div className="min-h-[85vh] flex flex-col gap-5 md:gap-0 md:grid md:grid-cols-2">
        <form onSubmit={handleSubmit}>
          <div className="px-4">
            <h1 className="text-left mb-2 text-xl font-bold">
              Agregar Categoría
            </h1>
            <div className="text-left mb-2">
              <label htmlFor="name" className="mb-2">
                Nombre de la Categoría
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border-2 border-gray-300 px-2 py-1"
                placeholder="Ingrese el nombre de la categoría"
              />
            </div>
            {touched.name && errors.name && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.name}
              </p>
            )}
            <div className="text-left">
              <label
                htmlFor="status"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={`${values.status}`}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="status"
                  id="status"
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Estado
                </span>
              </label>
            </div>
            {touched.status && errors.status && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.status}
              </p>
            )}
            <button
              type="submit"
              className="w-full btn my-2 bg-blue-500 text-white hover:bg-blue-700"
            >
              Agregar Categoría
            </button>
          </div>
        </form>
        <div className="w-full">
          <div className="flex justify-between mx-6">
            <h1 className="text-left mb-2 text-xl font-bold">
              Tabla Categorías
            </h1>
          </div>
          <div className="py-2 overflow-x-auto px-6 pr-10 ">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-gray-900 shadow-dashboard px-8 pt-3 rounded-lg min-h-min print:bg-black print:px-0 print:pl-6 print:break-before-avoid-page">
              <table className="min-w-full print:overflow-hidden">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Nombre
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {categories.map((category, i) => (
                    <tr className="font-semibold text-lg" key={category._id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 print:border-none">
                        <div className="flex items-center">
                          <div>
                            <div className=" leading-5 text-white">{i + 1}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div className=" leading-5 text-white text-left">
                          {category.nombre.toLocaleLowerCase()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b text-white border-gray-500 leading-5 text-left">
                        activado
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 space-x-2 print:hidden">
                        <div className="flex gap-2 items-center">
                          <button
                            onClick={() => {}}
                            className="btn border-blue-500 text-blue-500 hover:bg-blue-700"
                          >
                            <i className="fas fa-edit"></i>
                          </button>

                          <button
                            onClick={() => {handleDelete(category._id)}}
                            className="btn hover:bg-red-700 border-red-500 text-red-500"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px">
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </LayoutProfile>
  );
};

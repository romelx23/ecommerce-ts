import { useFormik } from "formik";
import React from "react";
import { LayoutProfile } from "../../components/layout";
import { MarketShema } from "../../helpers";
import { MarketForm } from "../../interfaces/market";

export const MarketPage = () => {
  const {
    errors,
    values,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setValues,
  } = useFormik<MarketForm>({
    initialValues: {
      name: "",
      description: "",
      address: "",
      phone: "",
      email: "",
      owner: "",
      schedule: "",
      category: "",
      social: "",
      socialMedia: [],
      image: "",
    },
    validationSchema:MarketShema,
    onSubmit: () => {
      console.log(values,"values");
    },
  });
  console.log(values,"values");
  const addSoialMedia = () => {
    if (values.socialMedia.length < 5) {
      console.log(values.social);
      const { social } = values;
      setValues({
        ...values,
        socialMedia: [...values.socialMedia, { name: social, url: "" }],
      });
    }
  };
  const removeSocialMedia = (index: number) => {
    setValues({
      ...values,
      socialMedia: values.socialMedia.filter((_, i) => i !== index),
    });
  };
  return (
    <LayoutProfile>
      <form
        onSubmit={handleSubmit}
        className="min-h-[85vh]
            grid grid-cols-1 gap-2
            md:grid-cols-2
            md:gap-4
            pb-3
            "
      >
        <div className="px-4">
          <h1 className="text-left font-semibold">Agregar Bodega</h1>
          <div className="text-left">
            <label htmlFor="name">Nombre de la Bodega</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ej. Bodega de Don Carlos"
            />
            {touched.name && errors.name && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.name}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="description">Descripción de la bodega</label>
            <input
              type="text"
              name="description"
              id="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ej. La bodega de la ciudad"
            />
            {touched.description && errors.description && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.description}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="owner">Propietario de la bodega</label>
            <input
              type="text"
              name="owner"
              id="owner"
              value={values.owner}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ej. Carlos Ivan"
            />
            {touched.owner && errors.owner && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.owner}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="phone">Telefono de la bodega</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ej. +51912345678"
            />
            {touched.phone && errors.phone && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.phone}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="address">Ubicación de la bodega</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ingrese el nombre de la bodega"
            />
            {touched.address && errors.address && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.address}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="email">Email de la bodega</label>
            <input
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ingrese el nombre de la bodega"
            />
            {touched.email && errors.email && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.email}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="category">Categoria de la bodega</label>
            <input
              type="text"
              name="category"
              id="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ej. Abarrotes"
            />
            {touched.category && errors.category && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.category}
              </p>
            )}
          </div>
          <div className="text-left">
            <label htmlFor="schedule">Horario de la bodega</label>
            <input
              type="text"
              name="schedule"
              id="schedule"
              value={values.schedule}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Harario de la bodega"
            />
            {touched.schedule && errors.schedule && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.schedule}
              </p>
            )}
          </div>
          <div className="text-left">
            {/* dinamic input for add social media */}
            <label htmlFor="social">Redes Sociales</label>
            <div className="w-full flex">
              <select
                name="social"
                id="social"
                value={values.social}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border-2 border-gray-300 px-2 py-1"
              >
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
                <option value="youtube">Youtube</option>
              </select>
              <button
                onClick={addSoialMedia}
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                +
              </button>
            </div>
            <div className="flex flex-col">
              {values.socialMedia &&
                values.socialMedia.map((socialMedia, index) => (
                  <div key={index} className="flex flex-col">
                    <label htmlFor={`socialMedia-${index}`} className="w-full">
                      {socialMedia.name}
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name={`socialMedia.${index}.${socialMedia.name}`}
                        id={`socialMedia.${index}.${socialMedia.name}`}
                        value={socialMedia.url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full border-2 border-gray-300 px-2 py-1"
                        placeholder={`Ingrese su ${socialMedia.name}`}
                      />
                      <button
                        onClick={() => removeSocialMedia(index)}
                        className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        -
                      </button>
                    </div>
                    {/* {touched.socialMedia![`${index.toString}.name`] && errors.socialMedia.${index}.name && (
                      <p className="text-red-600 text-left max-w-md w-full">
                        {errors.socialMedia.${index}.name}
                      </p>
                    )} */}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="text-left">
            <label htmlFor="image">Ingrese el logo de la empresas</label>
            <input
              type="text"
              name="image"
              id="image"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border-2 border-gray-300 px-2 py-1"
              placeholder="Ingrese el logo de la empresa"
            />
            {touched.image && errors.image && (
              <p className="text-red-600 text-left max-w-md w-full">
                {errors.image}
              </p>
            )}
          </div>
          <div className="my-2">
              <img 
                src={values.image? values.image : "https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png"}
                alt="imagen"
                title="imagen"
                className="max-w-md max-h-48 mx-auto object-cover"
              />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Guardar
          </button>
        </div>
      </form>
    </LayoutProfile>
  );
};

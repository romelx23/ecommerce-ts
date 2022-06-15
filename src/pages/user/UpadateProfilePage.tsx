import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutProfile } from "../../components/layout";
import { AuthContext } from "../../context/auth";
import { EditProfileSchema, fetchContoken, fetchSintoken } from "../../helpers";
export const UpadateProfilePage = () => {
  const navigate= useNavigate();
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
      cellphone: "",
      address: "",
      img: "",
    },
    validationSchema: EditProfileSchema,
    onSubmit: (values) => {
      handleUpdate();
    },
  });
  const {user,updateUser}=useContext(AuthContext);
  // console.log(errors, "errors");
  const handleUpdate=async()=>{
    try {
      const resp=await fetchSintoken(`api/usuarios/${user.uid}`,{
        nombre:values.name,
        telefono:values.cellphone,
        direccion:values.address,
        img:values.img,
        rol:user.rol,
        correo:user.correo,
      },"PUT");
      const data=await resp!.json();
      console.log(data);
      setValues({
        name: "",
        cellphone: "",
        address: "",
        img: "",
      });
      updateUser({
        ...user,
        nombre:values.name,
        telefono:values.cellphone,
        direccion:values.address,
        img:values.img,
      });
      navigate("/user/profile");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setValues({
      name: user.nombre,
      cellphone: user.telefono,
      address: user.direccion || "",
      img: user.img,
    });
  }, [])
  

  return (
    <LayoutProfile>
      <div className="w-full min-h-[85vh] flex flex-col gap-2 px-6">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-left font-semibold">Editar Perfil</h1>
            <div className="text-left">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border-2 border-gray-300 px-2 py-1"
                placeholder="Ingrese el nombre"
              />
              {touched.name && errors.name && (
                <p className="text-red-600 text-left max-w-md w-full">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="text-left">
              <label htmlFor="cellphone">Celular</label>
              <input
                type="text"
                name="cellphone"
                id="cellphone"
                value={values.cellphone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border-2 border-gray-300 px-2 py-1"
                placeholder="Ingrese el celular"
              />
              {touched.cellphone && errors.cellphone && (
                <p className="text-red-600 text-left max-w-md w-full">
                  {errors.cellphone}
                </p>
              )}
            </div>
            <div className="text-left">
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border-2 border-gray-300 px-2 py-1"
                placeholder="Ingrese la dirección"
              />
              {touched.address && errors.address && (
                <p className="text-red-600 text-left max-w-md w-full">
                  {errors.address}
                </p>
              )}
            </div>
            <div className="text-left">
              <label htmlFor="img">Imagen</label>
              <input
                type="text"
                name="img"
                id="img"
                value={values.img}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border-2 border-gray-300 px-2 py-1"
                placeholder="Ingrese la imagen"
              />
              {touched.img && errors.img && (
                <p className="text-red-600 text-left max-w-md w-full">
                  {errors.img}
                </p>
              )}
            </div>
          </div>
          <div className="my-2">
              <img 
                src={values.img? values.img : "https://aztecsolar.com/wp-content/uploads/2020/05/placeholder-user.jpg"}
                alt="imagen"
                title="imagen"
                className="max-w-md max-h-48 mx-auto object-cover"
              />
          </div>
          <button 
            type="submit"
          className="btn-update my-2 w-full">Editar Perfil</button>
        </form>
      </div>
    </LayoutProfile>
  );
};

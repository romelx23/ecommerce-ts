import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Nombre Muy corto")
      .required("El nombre es requerido"),
    password: Yup.string()
      .min(6, "Mínimo de caractéres")
      .required("La contraseña es requerida"),
    password2: Yup.string()
      .min(4, "Too Short!")
      .required("La contraseña es requerida"),
    email: Yup.string()
      .email("Email no válido")
      .required("El email es requerido"),
  });

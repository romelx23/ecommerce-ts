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

  export const EditProfileSchema = Yup.object().shape({
    name: Yup.string()
        .required('El nombre es requerido'),
    img: Yup.mixed()
        .required('El archivo es requerido'),
    cellphone: Yup.string()
        .required('El celular es requerido')
        .matches(/^[0-9]{9}$/, 'El celular debe tener 9 dígitos'),
    address: Yup.string()
        .required('La dirección es requerida'),
    lng: Yup.number()
        .required('La longitud es requerida'),
    lat: Yup.number()
        .required('La latitud es requerida')
  }
  );

  export const MarketShema = Yup.object().shape({
    name: Yup.string()
        .required('El nombre es requerido'),
    image: Yup.mixed()
        .required('El archivo es requerido'),
    description: Yup.string()
        .required('La descripción es requerida'),
    address: Yup.string() 
        .required('La dirección es requerida'),
    phone: Yup.string()
        .required('El celular es requerido')
        .matches(/^[0-9]{9}$/, 'El celular debe tener 9 dígitos'),
    email: Yup.string()
        .email('Email no válido')
        .required('El email es requerido'),
    h_start: Yup.string()
        .required('La hora de inicio es requerida'),
    h_end: Yup.string()
        .required('La hora de cierre es requerida'),
    longitude: Yup.string()
        .required('La longitud es requerida'),
    latitude: Yup.string()
        .required('La latitud es requerida'),
    owner: Yup.string()
        .required('El dueño es requerido'),
    // lat: Yup.number()
    //     .required('La latitud es requerida'),
    // lng: Yup.number() 
    //     .required('La longitud es requerida'),
  }
  );

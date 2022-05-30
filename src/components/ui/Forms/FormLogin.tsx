import * as Yup from "yup";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;

  return (
    <div className="w-full flex justify-center">
      <Form className="flex flex-col gap-2 w-full items-center ">
        <h1>{message}</h1>
        <Field
          type="email"
          name="email"
          placeholder="Ingrese su email"
          className="max-w-md w-full p-3 border-2 shadow-md rounded-3xl"
        />
        {touched.email && errors.email && (
          <p className="text-red-600 text-left max-w-md w-full">{errors.email}</p>
        )}

        <Field
          type="password"
          name="password"
          placeholder="Ingrese su password"
          className="max-w-md w-full p-3 border-2 shadow-md rounded-3xl"
        />
        {touched.password && errors.password && (
          <p className="text-red-600 text-left max-w-md w-full">{errors.password}</p>
        )}

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          Submit
        </button>
        <button onClick={() => {}} className="btn-submit">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
          Iniciar sesión con Google
        </button>
        {
            isSubmitting && (
                <p className="text-green-600 text-center max-w-md w-full">Formulario enviado correctamente</p>
            )
        }
      </Form>
    </div>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

export const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!values.email.includes("@")) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "La contraseña es requerida";
    }

    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
    console.log(values);
  },
})(InnerForm);
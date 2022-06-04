import { MyForm, NavbarAuth } from "../../components/ui";
// import { login, LoginWithGoogle } from "../actions/auth";

export const LoginPage = () => {
  // const dispatch = useDispatch();
  const handleLogin = () => {
    // dispatch(login('1412125','romel','htpp://google.com'))
    // dispatch(LoginWithGoogle())
    // console.log('hola');
  };
  const handleGoogleLogin = () => {
    // dispatch(LoginWithGoogle())
  };
  return (
    <div className="w-full h-screen bg-white p-3">
      <NavbarAuth />
      <div className="lg:grid lg:grid-cols-2 lg:h-[90vh] flex flex-col items-center">
        <h3 className="lg:text-left lg:text-5xl mt-10 mb-5 text-blue-600 font-semibold text-lg ">
          Bienvenido a tú comunidad profesional
        </h3>
        <img
          className="lg:rounded-t object-cover h-96 w-96 rounded-full lg:m-auto mb-5"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/06/linkedin-rebrand-760x400.png"
          alt="linkedin"
        />
        <div className="col-start-2 flex w-full">
          <MyForm message="Incio de Serión" />
        </div>
      </div>
    </div>
  );
};

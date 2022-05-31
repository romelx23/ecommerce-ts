import { FC, useReducer } from "react";
import Swal from "sweetalert2";
import { AuthContext, AuthReducer } from ".";
import { fetchContoken, fetchSintoken } from "../../helpers";
import { User, UserBody } from "../../interfaces";

interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthState {
  checking: boolean;
  user: User;
}

export const Auth_INITIAL_STATE: AuthState = {
  checking: true,
  user: {} as User,
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);

  const startLogin = async (email: string, password: string) => {
    const resp = await fetchSintoken(
      "api/auth/login",
      { correo:email, password },
      "POST"
    );
    const body:UserBody = await resp.json();
    console.log(body);
    if (body.token) {
      const {token,usuario} = body;
      localStorage.setItem("token", body.token);
      dispatch({
        type: "[Auth] - Login",
        payload: {
          user:usuario,
        },
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };

    // const startRegister = async (
    //     name: string,
    //     email: string,
    //     password: string
    // ) => {
    //     const resp = await fetchSintoken(
    //         "api/auth/register",
    //         { name, email, password },
    //         "POST"
    //     );
    //     const body = await resp.json();
    //     console.log(body);
    //     if (body.ok) {
    //         localStorage.setItem("token", body.token);
    //         dispatch({
    //             type: "[Auth] - Register",
    //             payload: {
    //                 user:{
    //                     name,
    //                     email,
    //                     password
                        
    //             }
    //         },
    //         });
    //     } else {
    //         Swal.fire("Error", body.msg, "error");
    //     }
    // }

 const startCheking=async()=>{
            // checkingStart();
            const resp=await fetchContoken('api/auth');
            const body:UserBody =await resp.json();
            // console.log(body)
            if(body.token){
              console.log(body,"body");
                const {token,usuario} = body;
                localStorage.setItem('token',body.token);
                dispatch({
                    type: "[Auth] - Login",
                    payload: {
                      user:usuario,
                    },
                });
                checkingFinish();
            }
            else{
                checkingFinish();
            }
    }

    const checkingStart=()=>(
        dispatch({
            type: "[Auth] - Checking",
            payload: {checking:true},
        })
    )
    const checkingFinish=()=>(
        dispatch({
            type: "[Auth] - Checking",
            payload: {checking:false},
        })
    )
    const logOut=()=>{
        localStorage.removeItem('token');
        dispatch({
            type: "[Auth] - Logout",
        })
    }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        startLogin,
        startCheking,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

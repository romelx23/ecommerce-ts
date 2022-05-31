import { AuthState } from './AuthProvider';
import { User } from '../../interfaces/user';

type AuthActionType = 
| {type:'[Auth] - Login',payload:{user:User}}
| {type:'[Auth] - Logout'}
| {type:'[Auth] - Checking',payload:{checking:boolean}}

export const AuthReducer = (state:AuthState,action:AuthActionType):AuthState => { 
    switch (action.type) {
        case '[Auth] - Login':
            return {
                ...state,
                user:{
                    ...action.payload.user
                }
            }
        // case "[Auth] - Register":
        //     return {
        //         ...state,
        //         register:{
        //             ...action.payload.register
        //         }
        //     }
        case "[Auth] - Logout":
            return {
                ...state,
                user:{} as User,
                checking:false
            }
        case "[Auth] - Checking":
            return {
                ...state,
                checking:action.payload.checking,
            }
        
    
        default:
            return state;
    }
 }
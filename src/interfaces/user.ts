export interface LoginI{
    name:string;
    token:string;
}
export interface UserBody{
    correo:string,
    msg:string,
    token:string,
    usuario:User
}
export interface User {
    correo: string;
    nombre: string;
    estado: boolean;
    img: string;
    rol: string;
    uid: string;
}
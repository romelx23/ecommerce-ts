import { Producto } from "./product";

export interface OrderResponse {
    success: boolean;
    data:    Order[];
}

export interface Order {
    _id:     string;
    nombre:  string;
    importe: number;
    fecha:   string;
    usuario: string;
    bodega:  string;
}

// detalle pedido

export interface PedidoResponse {
    success:       boolean;
    detallePedido: DetallePedido[];
}

export interface DetallePedido {
    _id:      string;
    pedido:   string;
    total:    number;
    precio:   number;
    cantidad: number;
    producto: Producto;
}

// export interface Producto {
//     estado:      boolean;
//     precio:      number;
//     disponible:  boolean | null;
//     stock:       number;
//     _id:         string;
//     nombre:      string;
//     descripcion: string;
//     img:         string;
//     categoria:   string;
//     idProducto:  string;
//     usuario:     string;
//     __v:         number;
//     telefono?:   number;
// }

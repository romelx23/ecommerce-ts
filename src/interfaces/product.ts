// dev
export interface ProductI {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

// prod
export interface ProductsI {
  total: number;
  productos: Producto[];
}

export interface Producto {
  precio: number;
  disponible: boolean;
  _id: string;
  nombre: string;
  descripcion?: string;
  usuario: Categoria;
  categoria: Categoria;
  img?: string;
}
export interface ProductoCarrito {
  precio: number;
  disponible: boolean;
  _id: string;
  nombre: string;
  descripcion?: string;
  usuario: Categoria;
  categoria: Categoria;
  img?: string;
  cantidad: number;
}

export interface ProductoId {
  producto: Producto;
}

export interface Categoria {
  _id: string;
  nombre: string;
}

export interface ProductoResponse {
  activo: boolean;
  categoria: string;
  descripcion: string;
  disponible: boolean;
  idProducto: string;
  img: string;
  mac: string;
  nombre: string;
  precio: number;
  usuario: string;
  _id: string;
}

export interface ProductoResponseError {
  error: ProductError[];
}

export interface ProductError {
  location: string;
  value: string;
  msg: string;
  param: string;
}

export interface ProductForm {
  name: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

// Category

export interface CategoryForm{
  name:string;
}

export interface CategoryI {
  nombre: string;
  _id: string;
  usuario: string;
}

export interface CategoryResponse {
  categorias: CategoryI[];
  total: number;
}
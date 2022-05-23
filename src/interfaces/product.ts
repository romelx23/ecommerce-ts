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
  total:     number;
  productos: Producto[];
}

export interface Producto {
  precio:       number;
  disponible:   boolean;
  _id:          string;
  nombre:       string;
  descripcion?: string;
  usuario:      Categoria;
  categoria:    Categoria;
  img?:         string;
}

export interface ProductoId {
  producto:Producto
}

export interface Categoria {
  _id:    string;
  nombre: string;
}
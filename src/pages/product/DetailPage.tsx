import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LayoutProducts } from "../../components/layout/LayoutProducts";
import { Star, Toast, Zoom } from "../../components/ui";
import { CartContext } from "../../context/cart";
import { formatPrice } from "../../helpers";
import {
  ProductoId,
  Producto,
  ProductoCarrito,
} from "../../interfaces/product";
import { baseUrl } from "../../utils";

export const DetailPage = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState<Producto>({} as Producto);
  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const addQuantity = () => {
    setCantidad(cantidad + 1);
  };
  const removeQuantity = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const addToCartHandler = (producto: Producto) => {
    setShowToast(true);
    const productoCarrito: ProductoCarrito = {
      ...producto,
      cantidad,
    };
    addToCart(productoCarrito);
  };

  const getProductId = async () => {
    try {
      const product = `${baseUrl}/api/productos/${id}`;
    // const product = `https://node-restserver-cascaron.herokuapp.com/api/productos/${id}`;
    const resp = await fetch(product);
    const { producto }: ProductoId = await resp.json();
    setProducto(producto);
    // console.log(producto);
    } catch (error) {
      console.log(error);
    }
  };

  const zoomArea = React.useRef<HTMLDivElement>(null);
  const zoomImg = React.useRef<HTMLImageElement>(null);
  const zoomAreaMove = (e: any) => {
    if (zoomArea.current) {
      let x = e.clientX - zoomArea.current.offsetLeft;
      let y = e.clientY - zoomArea.current.offsetTop;
      let mWidth = zoomArea.current.offsetWidth;
      let mHeight = zoomArea.current.offsetHeight;
      let clientX = (x / mWidth) * 200;
      let clientY = (y / mHeight) * 200;
      if (zoomImg.current) {
        zoomImg.current.style.transform = `translate(-${clientX}px, -${clientY}px) scale(1.3)`;
      }
    }
  };
  const zoomAreaOut = () => {
    if (zoomImg.current) {
      zoomImg.current.style.transform = `translate(0px, 0px) scale(1)`;
    }
  };

  useEffect(() => {
    getProductId();
  }, []);

  return (
    <LayoutProducts>
      <div className="py-3 flex flex-col lg:flex-row  min-h-[600px]">
        <div
          className="flex justify-center items-center w-full lg:w-1/2 min-h-full bg-[#23263b] overflow-hidden relative"
          ref={zoomArea}
          onMouseMove={(e) => zoomAreaMove(e)}
          onMouseLeave={() => zoomAreaOut()}
        >
          <Zoom />
          <img
            src={
              producto.img
                ? producto.img
                : "https://plazavea.vteximg.com.br/arquivos/ids/1962885-450-450/20235718.jpg?v=637599230835400000"
            }
            alt="producto"
            placeholder="producto"
            loading="lazy"
            className="object-cover w-2/3 h-full"
            ref={zoomImg}
            width={300}
            height={300}
          />
        </div>
        <div className="flex-1 flex flex-col items-start px-3 text-left">
          <h1 className="font-semibold text-xl">{producto.nombre}</h1>
          <p>
            {producto.descripcion ? producto.descripcion : "no hay descripcion"}
          </p>
          {/* <h2>raiting</h2> */}
          <Star start={4.5} />
          <div className="my-2 py-1 px-2 bg-[#3f52e8] text-white rounded-lg">
            Popular
          </div>
          <h2 className="text-red-700 font-bold text-xl">
            {formatPrice(producto.precio)}
          </h2>
          <div className="w-full flex flex-wrap gap-2 my-2">
            <button
              onClick={() => removeQuantity()}
              className="btn hover:text-black"
            >
              -
            </button>
            <input
              type="number"
              className="text-center"
              value={cantidad}
              min={1}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
            <button
              onClick={() => addQuantity()}
              className="btn hover:text-black"
            >
              +
            </button>
          </div>
          <div className="w-full flex flex-wrap gap-2">
            <button className="py-1 px-4 border border-gray-500 rounded-md hover:bg-slate-100 transition">
              chico
            </button>
            <button className="py-1 px-4 border border-gray-500 rounded-md hover:bg-slate-100 transition">
              mediano
            </button>
            <button className="py-1 px-4 border border-gray-500 rounded-md hover:bg-slate-100 transition">
              grande
            </button>
          </div>
          <button
            onClick={() => addToCartHandler(producto)}
            className="my-2 w-full bg-gray-300 rounded-md py-2 flex justify-center space-x-2 focus:opacity-80 hover:bg-slate-400 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <p className="font-semibold">Agregar al Carrito</p>
          </button>
        </div>
      </div>
        <Toast
          show={showToast}
          onClose={(show:boolean) => setShowToast(show)}
          message="Se agrego al carrito"
          icon="fas fa-info-circle"
          positionY="bottom-3"
        />
    </LayoutProducts>
  );
};

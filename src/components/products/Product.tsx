import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProductI, Producto } from "../../interfaces/product";
import { formatPrice } from "../../helpers/format";
import { FavoriteContext } from "../../context/favorite";
import { AuthContext } from "../../context/auth";
interface Props {
  // product: ProductI;
  product: Producto;
}

export const Product: FC<Props> = ({ product }) => {
  const { nombre, precio, descripcion, img, _id } = product;
  const { addFavorite, favorites, products } = useContext(FavoriteContext);
  const [favorite, setFavorite] = useState(false);
  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();
  const path = `/${pathname.split("/")[1]}/${pathname.split("/")[2]}/${
    pathname.split("/")[3]
  }`;
  // console.log(path);
  const toggleFavorite = () => {
    // si esta incluido en los favoritos pintar el icono de favorito
    setFavorite(!favorite);
    addFavorite(_id);
  };
  useEffect(() => {
    if (favorites.includes(_id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, []);

  return (
    <div className="btn-product relative" title={nombre}>
      {user.rol == "BODEGUERO_ROLE" &&
      path === "/gestion/pedidos/actualizar" ? (
        <input
          type="checkbox"
          className="checkbox"
          id={_id}
          onChange={()=>{}}
        />
      ) : (
        <button onClick={toggleFavorite} className="btn-favorite">
          {favorite ? (
            <i className="fas fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </button>
      )}
      <label htmlFor={_id} className="btn-select-label">
      <Link
        to={`/home/${_id}`}
        className={`card__product w-[260px] ${
          user.rol == "BODEGUERO_ROLE" && path === "/gestion/pedidos/actualizar"
            ? "sm:w-[260px] pointer-events-none"
            : "sm:w-[332px] "
        } p-5 py-8`}
      >
        <img
          src={
            img
              ? img
              : "https://www.giulianisgrupo.com/wp-content/uploads/2018/05/nodisponible.png"
          }
          alt="producto"
          className="img-product"
          style={{ width: "" }}
        />
        <div className="w-full text-left pt-2">
          <h1 className="font-bold text-xl">{nombre}</h1>
          <p>{descripcion}</p>
          <p>{formatPrice(precio)}</p>
        </div>
      </Link>
      </label>
    </div>
  );
};

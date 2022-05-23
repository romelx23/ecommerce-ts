import React, { FC, useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductI, Producto } from '../../interfaces/product';
import { formatPrice } from '../../helpers/format';
import { FavoriteContext } from "../../context/favorite";
interface Props {
  // product: ProductI;
  product: Producto;
}

export const Product: FC<Props> = ({ product }) => {
  const { nombre, precio, descripcion, img, _id } = product;
  const {addFavorite,favorites,products}=useContext(FavoriteContext);
  const [favorite, setFavorite] = useState(false);
  const toggleFavorite=()=>{
    // si esta incluido en los favoritos pintar el icono de favorito
    setFavorite(!favorite);
    addFavorite(_id);
  }
  useEffect(() => {
    if(favorites.includes(_id)){
      setFavorite(true);
    }else{
      setFavorite(false);
    }
  }, [])
  

  return (
    <div className="btn-product relative" title={nombre}>
      <button onClick={toggleFavorite} className="btn-favorite">
        {favorite ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </button>
      <Link to={`/home/${_id}`} className="card__product p-5 py-8">
        <img
          src={img}
          alt="producto"
          className="w-60 h-52 rounded-md object-cover"
          style={{ width: "" }}
        />
        <div className="w-full text-left pt-2">
          <h1 className="font-bold text-xl">{nombre}</h1>
          <p>{descripcion}</p>
          <p>{formatPrice(precio)}</p>
        </div>
      </Link>
    </div>
  );
};

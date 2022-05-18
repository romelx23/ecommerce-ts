import React, { FC, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductI } from "../../interfaces/product";
interface Props {
  product: ProductI;
}

export const Product: FC<Props> = ({ product }) => {
  const { name, price, description, image } = product;
  const [favorite, setFavorite] = useState(false);
  const card = useRef<HTMLButtonElement>(null);
  return (
    <div className="btn-product relative">
      <button onClick={() => setFavorite(!favorite)} className="btn-favorite">
        {favorite ? (
          <i className="fas fa-heart"></i>
        ) : (
          <i className="far fa-heart"></i>
        )}
      </button>
      <Link to={`/home/${product.id}`} className="card__product p-5 py-8">
        <img
          src={image}
          alt="producto"
          className="w-60 h-52 rounded-md"
          style={{ width: "" }}
        />
        <div className="w-full text-left pt-2">
          <h1 className="font-bold text-xl">{name}</h1>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </Link>
    </div>
  );
};

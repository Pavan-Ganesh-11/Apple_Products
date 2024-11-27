import React, { useContext } from "react";
import "./FavoriteItem.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import { MdOutlineFavorite } from "react-icons/md";

const FavoriteItem = (props) => {
  const { favoriteDetails } = props;
  
  const { id, imageUrl, model, specifications, price, rating } =
    favoriteDetails;

  const value = useContext(CartContext);
  const { removeFavoriteItem } = value;

  const onDeletefavoriteItem = () => {
    removeFavoriteItem(id);
  };

  return (
    <li className="favorite-item">
      <img className="favorite-product-image" src={imageUrl} alt={model} />
      <div className="favorite-item-details-container">
        <div className="favorite-product-title-brand-container">
          <p className="favorite-product-title">{model}</p>
          <p className="favorite-product-brand">by Apple</p>
        </div>
        {/* <div className="favorite-quantity-container">
          <button
            type="button"
            className="quantity-controller-button"
            onClick={onDecreaseQuantity}
          >
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="favorite-quantity">{quantity}</p>
          <button
            type="button"
            className="quantity-controller-button"
            onClick={onIncreaseQuantity}
          >
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div> */}
        <div className="total-price-delete-container">
          {/* <p className="favorite-total-price">Rs {price * quantity}/-</p> */}
          <button
            className="remove-button"
            type="button"
            onClick={onDeletefavoriteItem}
          >
            Remove
          </button>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDeletefavoriteItem}
      >
        <MdOutlineFavorite size={33} title="Favorited" color="red" />
      </button>
    </li>
  );
};

export default FavoriteItem;

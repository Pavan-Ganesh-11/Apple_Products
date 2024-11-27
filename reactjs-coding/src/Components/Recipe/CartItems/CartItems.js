import React, { useContext, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import "./CartItems.css";
import FavContext from "../context/FavContext";

const FavoriteItem = (props) => {
  const { cartItemDetails } = props;
  console.log(cartItemDetails);
  const {
    id,
    recipeName,
    recipeDesc,
    quantity,
    recipePrice,
    ingredients,
    recipeImageUrl,
  } = cartItemDetails;

  console.log(recipeName, id);

  //   const { id, title, imageUrl, brand, price, quantity } = cartItemDetails[0];

  const value = useContext(FavContext);
  const {
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = value;

  const onDeleteCartItem = () => {
    removeCartItem(id);
  };

  const onIncreaseQuantity = () => {
    incrementCartItemQuantity(id);
  };

  const onDecreaseQuantity = () => {
    decrementCartItemQuantity(id);
  };

  return (
    <li className="favorite-item">
      <img
        className="favorite-product-image"
        src={recipeImageUrl}
        alt={recipeName}
      />
      <div className="favorite-item-details-container">
        <div className="favorite-product-title-brand-container">
          <p className="favorite-product-title">{recipeName}</p>
        </div>
        <div className="favorite-quantity-container">
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
        </div>
        <div className="total-price-delete-container">
          <p className="favorite-total-price">Rs {recipePrice * quantity}/-</p>
          <button
            className="remove-button"
            type="button"
            onClick={onDeleteCartItem}
          >
            Remove
          </button>
        </div>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDeleteCartItem}
      >
        <AiFillCloseCircle color="#616E7C" size={20} />
      </button>
    </li>
  );
};

export default FavoriteItem;

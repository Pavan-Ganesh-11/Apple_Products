import React, { useContext, useEffect, useState } from "react";
import "./CartItem.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import CartContext from "../Context/CartContext";
import axios from "axios";

const CartItem = (props) => {
  const { cartItemDetails } = props;

  const { id, imageUrl, model, quantity, price } = cartItemDetails;

  const value = useContext(CartContext);

  const [cartList, setCartList] = useState([]);

  // const value = useContext(CartContext);
  // const { cartList } = value;

  useEffect(() => {
    getCartListItems();
  }, [cartList]);

  const getCartListItems = async () => {
    const url = "http://localhost:3000/cartList";
    const response = await axios.get(url);
    if (response.status === 200) {
      setCartList(response.data);
    }
  };

  const {
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    removeCartItem,
  } = value;

  const onIncreaseQuantity = () => {
    incrementCartItemQuantity(id);
  };

  const onDecreaseQuantity = () => {
    decrementCartItemQuantity(id);
  };

  const onDeleteCartItem = () => {
    removeCartItem(id);
  };

  return (
    <li className="cart-item">
      <img className="cart-product-image" src={imageUrl} alt={model} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{model}</p>
          <p className="cart-product-brand">by Apple</p>
        </div>
        <div className="cart-quantity-container">
          <button
            type="button"
            className="quantity-controller-button"
            onClick={onDecreaseQuantity}
          >
            <BsDashSquare color="lightgray" size={12} />
          </button>
          <p className="cart-quantity">{quantity}</p>
          <button
            type="button"
            className="quantity-controller-button"
            onClick={onIncreaseQuantity}
          >
            <BsPlusSquare color="lightgray" size={12} />
          </button>
        </div>
        <div className="total-price-delete-container">
          <p className="cart-total-price">Rs {price * quantity}/-</p>
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
        <AiFillCloseCircle color="lightgray" size={20} />
      </button>
    </li>
  );
};

export default CartItem;

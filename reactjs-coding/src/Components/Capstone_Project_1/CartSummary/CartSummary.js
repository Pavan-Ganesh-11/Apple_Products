import React, { useEffect, useState } from "react";
import "./CartSummary.css";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const CartSummary = () => {
  const navigate = useNavigate();

  const [cartList, setCartList] = useState([]);

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

  // const value = useContext(CartContext);
  // const { cartList } = value;

  var prices = 0;

  cartList.map(
    (eachItem) => (prices += eachItem.quantity * parseInt(eachItem.price))
  );

  const cartItemsCount = cartList.length;

  return (
    <div className="cart-summary-container">
      <div className="cart-summary">
        <div classname="order-details-container">
          <h1 className="order-total-heading">
            Order Total:
            <span className="cost-of-items">Rs {prices}/-</span>
          </h1>
        </div>
        <p className="items-in-cart">{cartItemsCount} Items in cart</p>
        <NavLink to="/cart/payment-gateway" className="text-decoration-none">
          <button type="button" className="checkout-btn btn btn-primary">
            Checkout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartSummary;

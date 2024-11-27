import React from "react";
import "./EmptyCart.css";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="cart empty"
        className="empty-cart-img"
      />
      <h1 className="empty-card-heading">Your Cart is Empty</h1>
      <NavLink to="/recipes" className="text-decoration-none text-white">
        <button type="button" className="empty-card-btn btn btn-primary">
          Shop Now
        </button>
      </NavLink>
    </div>
  );
};

export default EmptyCart;

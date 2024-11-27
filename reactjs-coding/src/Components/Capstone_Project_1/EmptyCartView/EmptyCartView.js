import React from "react";
import "./EmptyCartView.css";

import { NavLink } from "react-router-dom";

const EmptyCartView = () => {
  return (
    <div className="empty-cart-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        className="cart-empty-image"
        alt="cart empty"
      />
      <h1 className="cart-empty-heading">Your Cart Is Empty</h1>
      <NavLink to="/products">
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </NavLink>
    </div>
  );
};

export default EmptyCartView;

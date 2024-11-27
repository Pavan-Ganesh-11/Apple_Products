import React from "react";
import "./EmptyFavoritesView.css";

import { NavLink } from "react-router-dom";

const EmptyFavoritesView = () => {
  return (
    <div className="empty-favorites-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        className="favorites-empty-image"
        alt="favorites empty"
      />
      <h1 className="favorites-empty-heading">Your Favorites Is Empty</h1>
      {/* <NavLink to="/products">
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </NavLink> */}
      <p className="favorites-empty-desc">Try to Add your Favorite Products</p>
    </div>
  );
};

export default EmptyFavoritesView;

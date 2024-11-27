import React, { useContext, useEffect } from "react";
import "./Favorites.css";
import EmptyFavoritesView from "../EmptyFavoritesView/EmptyFavoritesView";
import Header from "../Header/Header";

import FavoriteListView from "../FavoriteListView/FavoriteListView";
import CartContext from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const navigate = useNavigate();

  const value = useContext(CartContext);
  const { favoriteList, removeAllFavoriteItem } = value;

  const isLoggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    if (isLoggedIn === null) {
      navigate("/products")
    }
  }, [])

  const onClickRemoveAll = () => {
    removeAllFavoriteItem();
  };

  return (
    <>
      <Header />
      {favoriteList.length === 0 ? (
        <EmptyFavoritesView />
      ) : (
        <div className="favorites-container">
          <div className="favorites-content-container">
            <h1 className="favorites-heading">Favorites</h1>
            <button
              type="button"
              className="remove-all-btn"
              onClick={onClickRemoveAll}
            >
              Remove All
            </button>
            <FavoriteListView />
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;

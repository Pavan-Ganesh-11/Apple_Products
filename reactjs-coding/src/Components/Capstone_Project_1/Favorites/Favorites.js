import React, { useContext, useEffect, useState } from "react";
import "./Favorites.css";
import EmptyFavoritesView from "../EmptyFavoritesView/EmptyFavoritesView";
import Header from "../Header/Header";

import FavoriteListView from "../FavoriteListView/FavoriteListView";
import CartContext from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Favorites = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const value = useContext(CartContext);
  const { removeAllFavoriteItem } = value;

  const isLoggedIn = localStorage.getItem("loggedIn");

  const loggedinValue = localStorage.getItem("userDetails");

  let emailValue;

  if (isLoggedIn) {
    emailValue = JSON.parse(loggedinValue).email.toLowerCase();
  }

  useEffect(() => {
    if (isLoggedIn === null) {
      navigate("/products");
    }
    getLoginData();
  }, []);

  useEffect(() => {
    getFavoriteListItem();
  }, [favoriteList]);

  const getLoginData = async () => {
    const url = `http://localhost:3000/login?username=${emailValue}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      const user = response.data[0].username;
      setUsername(user);
    }
  };

  const getFavoriteListItem = async () => {
    const url = `http://localhost:3000/favoriteList?username=${username}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      setFavoriteList(response.data);
    }
  };

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

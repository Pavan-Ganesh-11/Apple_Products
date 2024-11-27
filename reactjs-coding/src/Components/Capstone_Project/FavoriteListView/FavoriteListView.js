import React, { useContext } from "react";
import "./FavoriteListView.css";

import FavoriteItem from "../FavoriteItem/FavoriteItem";
import CartContext from "../Context/CartContext";

// const favoriteList = [
//   {
//     title: "Product 1",
//     brand: "Brand Name",
//     id: 1001,
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg",
//     price: 760,
//     quantity: 5,
//   },
//   {
//     title: "Product 2",
//     brand: "Brand Name",
//     id: 1002,
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg",
//     price: 760,
//     quantity: 2,
//   },
// ];

const FavoriteListView = () => {
  const value = useContext(CartContext);
  const { favoriteList } = value;

  return (
    <ul className="favorite-list-container">
      {favoriteList.map((eachItem) => (
        <FavoriteItem favoriteDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  );
};

export default FavoriteListView;

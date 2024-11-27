import React, { useContext, useEffect } from "react";
import "./CartListView.css";
import CartItems from "../CartItems/CartItems";
import FavContext from "../context/FavContext";

// const cartList = [
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

const CartListView = () => {
  const value = useContext(FavContext);
  const { cartList } = value;

  return (
    <ul className="cart-item-details-container">
      {cartList.map((eachItem) => (
        <CartItems cartItemDetails={eachItem} />
      ))}
    </ul>
  );
};

export default CartListView;

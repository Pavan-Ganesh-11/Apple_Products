import React, { useContext } from "react";
import Header from "../Header/Header";
import "./Cart.css";
import CartListView from "../CartListView/CartListView";
import FavContext from "../context/FavContext";
import EmptyCart from "../EmptyCart/EmptyCart";
import CartSummary from "../CartSummary/CartSummary";

const Favorites = () => {
  const value = useContext(FavContext);
  const { cartList, removeAllCartItem } = value;

  const onClickRemoveAllBtn = () => {
    removeAllCartItem();
  };

  return (
    <>
      <Header />
      {cartList.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="favorites-container">
          <div className="favorite-content-container">
            <h1 className="favorite-heading">Favorite</h1>
            <button
              type="button"
              className="remove-all-btn"
              onClick={onClickRemoveAllBtn}
            >
              Remove All
            </button>
            <CartListView />
            <CartSummary />
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;

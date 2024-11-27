import React, { useContext, useEffect } from "react";
import "./Cart.css";
import Header from "../Header/Header";
import EmptyCartView from "../EmptyCartView/EmptyCartView";
import CartListView from "../CartListView/CartListView";
import CartContext from "../Context/CartContext";
import CartSummary from "../CartSummary/CartSummary";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const value = useContext(CartContext);
  const { cartList, removeAllCartItem } = value;

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn === null) {
      navigate("/products");
    }
  }, []);

  const onClickRemoveAll = () => {
    removeAllCartItem();
  };

  return (
    <>
      <Header />
      {cartList.length === 0 ? (
        <EmptyCartView />
      ) : (
        <div className="cart-container">
          <div className="cart-content-container">
            <h1 className="cart-heading">Cart</h1>
            <button
              type="button"
              className="remove-all-btn"
              onClick={onClickRemoveAll}
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

export default Cart;

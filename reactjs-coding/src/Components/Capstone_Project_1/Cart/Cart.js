import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import Header from "../Header/Header";
import EmptyCartView from "../EmptyCartView/EmptyCartView";
import CartListView from "../CartListView/CartListView";
import CartContext from "../Context/CartContext";
import CartSummary from "../CartSummary/CartSummary";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [cartList, setCartList] = useState([]);

  const value = useContext(CartContext);
  const { removeAllCartItem } = value;

  const loggedinValue = localStorage.getItem("userDetails");
  const emailValue = JSON.parse(loggedinValue).email.toLowerCase();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn === null) {
      navigate("/products");
    }

    // postCartListItems();
    getCartListItems();
  }, [cartList]);

  useEffect(() => {
    getLoginData();
  }, []);

  const getLoginData = async () => {
    const loginUrl = `http://localhost:3000/login?email=${emailValue}`;
    const response = await axios.get(loginUrl);
    if (response.status === 200) {
      const user = response.data[0].username;
      setUsername(user);
    }
  };

  const getCartListItems = async () => {
    const url = `http://localhost:3000/cartList?username=${username}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      setCartList(response.data);
    }
  };

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

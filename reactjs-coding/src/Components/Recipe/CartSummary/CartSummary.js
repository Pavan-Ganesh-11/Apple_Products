import React from "react";
import "./CartSummary.css";
import { useContext } from "react";
import FavContext from "../context/FavContext";

const CartSummary = () => {
  const value = useContext(FavContext);
  const { cartList } = value;

  var prices = 0;
  
  cartList.map(
    (eachItem) => (prices += (eachItem.quantity * parseInt(eachItem.recipePrice)))
  );

  const cartItemsCount = cartList.length;

  return (
    <div className="cart-summary-container">
      <div className="cart-summary">
        <div classname="order-details-container">
          <h1 className="order-total-heading">
            Order Total:
            <span className="cost-of-items">Rs {prices}/-</span>
          </h1>
        </div>
        <p className="items-in-cart">{cartItemsCount} Items in cart</p>
        <button type="button" className="checkout-btn btn btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;

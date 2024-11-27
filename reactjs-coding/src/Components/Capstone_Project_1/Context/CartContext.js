import React from "react";

const CartContext = React.createContext({
  loginDetails: [],
  addLoginDetails: () => {},
  cartList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  favoriteList: [],
  addFavoriteItem: () => {},
  removeFavoriteItem: () => {},
});

export default CartContext;

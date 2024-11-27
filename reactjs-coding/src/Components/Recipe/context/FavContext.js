import React from "react";

const FavContext = React.createContext({
  cartList: [],
  addToFavorites: () => {},
  removeFavoriteItem: () => {},
  removeAllFavoriteItems: () => {},
  incrementFavItemQuantity: () => {},
  decrementFavItemQuantity: () => {},
});

export default FavContext;

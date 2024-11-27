import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle, LoadingComponents } from "./StyledComponent";
import { Oval } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductItemDetails from "./Components/Capstone_Project/ProductItemDetails/ProductItemDetails";
import CartContext from "./Components/Capstone_Project/Context/CartContext";
import PaymentGateway from "./Components/Capstone_Project/PaymentGateway/PaymentGateway";
import Shipment from "./Components/Capstone_Project/Shipment/Shipment";
import DeliverTracking from "./Components/Capstone_Project/DeliverTracking/DeliverTracking";
import axios from "axios";

const Login = lazy(() => import("./Components/Capstone_Project/Login/Login"));
const Register = lazy(() =>
  import("./Components/Capstone_Project/Register/Register")
);
const ForgotPassword = lazy(() =>
  import("./Components/Capstone_Project/ForgotPassword/ForgotPassword")
);
const Home = lazy(() => import("./Components/Capstone_Project/Home/Home"));
const AppleItems = lazy(() =>
  import("./Components/Capstone_Project/AppleItems/AppleItems")
);
const Cart = lazy(() => import("./Components/Capstone_Project/Cart/Cart"));
const Favorites = lazy(() =>
  import("./Components/Capstone_Project/Favorites/Favorites")
);
const NotFound = lazy(() =>
  import("./Components/Capstone_Project/NotFound/NotFound")
);

const App = () => {
  const [loginDetails, setLoginDetails] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const addLoginDetails = (loginData) => {
    setLoginDetails(loginData);
  };

  const addCartItem = (product) => {
    const productObject = cartList.find(
      (eachCartItem) => eachCartItem.id === product.id
    );
    if (productObject) {
      setCartList((prev) =>
        prev.map((eachCartItem) => {
          if (eachCartItem.id === productObject.id) {
            return {
              ...eachCartItem,
              quantity: eachCartItem.quantity + 1,
            };
          }
          return eachCartItem;
        })
      );
    } else {
      setCartList([...cartList, product]);
    }
  };

  const removeCartItem = (id) => {
    const filteredList = cartList.filter((each) => each.id !== id);
    setCartList(filteredList);
  };

  const removeAllCartItem = () => {
    setCartList([]);
  };

  const incrementCartItemQuantity = (id) => {
    setCartList(
      cartList.map((eachItem) => {
        if (eachItem.id === id) {
          return { ...eachItem, quantity: eachItem.quantity + 1 };
        }
        return eachItem;
      })
    );
  };

  const decrementCartItemQuantity = (id) => {
    const productObject = cartList.find((each) => each.id === id);
    if (productObject.quantity > 1) {
      setCartList(
        cartList.map((eachItem) => {
          if (eachItem.id === id) {
            return { ...eachItem, quantity: eachItem.quantity - 1 };
          }
          return eachItem;
        })
      );
    } else {
      removeCartItem(id);
    }
  };

  const addFavoriteItem = (product) => {
    const productObject = favoriteList.find((each) => each.id === product.id);
    if (productObject) {
      // toast.warning(`${productObject.name} - Already Added To Favorites`);
    } else {
      setFavoriteList([...favoriteList, product]);
    }
  };

  const removeFavoriteItem = (id) => {
    const productObject = favoriteList.filter((each) => each.id !== id);
    setFavoriteList(productObject);
  };

  const removeAllFavoriteItem = () => {
    setFavoriteList([]);
  };

  // const postCartListItem = async() => {
  //   const url = "http://localhost:3000/cartList";
  //   const response = await axios.post(url, cartList)
  // }

  return (
    <>
      <BrowserRouter>
        <CartContext.Provider
          value={{
            loginDetails,
            addLoginDetails: addLoginDetails,
            cartList,
            addCartItem: addCartItem,
            removeCartItem: removeCartItem,
            removeAllCartItem: removeAllCartItem,
            incrementCartItemQuantity: incrementCartItemQuantity,
            decrementCartItemQuantity: decrementCartItemQuantity,
            favoriteList,
            addFavoriteItem: addFavoriteItem,
            removeFavoriteItem: removeFavoriteItem,
            removeAllFavoriteItem: removeAllFavoriteItem,
          }}
        >
          <GlobalStyle />
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Login />
                </Suspense>
              }
            />
            <Route
              exact
              path="/register"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Register />
                </Suspense>
              }
            />
            <Route
              exact
              path="/forgot-password"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <ForgotPassword />
                </Suspense>
              }
            />
            <Route
              exact
              path="/"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Home />
                </Suspense>
              }
            />
            <Route
              exact
              path="/products"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <AppleItems />
                </Suspense>
              }
            />
            <Route
              exact
              path="/products/:id"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <ProductItemDetails />
                </Suspense>
              }
            />
            <Route
              exact
              path="/favorites"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Favorites />
                </Suspense>
              }
            />
            <Route
              exact
              path="/cart"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Cart />
                </Suspense>
              }
            />
            <Route
              exact
              path="/cart/payment-gateway"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <PaymentGateway />
                </Suspense>
              }
            />
            <Route
              exact
              path="/cart/payment-gateway/shipment-details"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Shipment />
                </Suspense>
              }
            />
            <Route
              exact
              path="/cart/payment-gateway/shipment-details/:id"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <DeliverTracking />
                </Suspense>
              }
            />
            <Route
              exact
              path="*"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <Oval color="#3b82f6" height={35} width={50} />
                    </LoadingComponents>
                  }
                >
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
      <ToastContainer pauseOnHover={false} theme="dark" />
    </>
  );
};

export default App;

import React, { useState, lazy, Suspense } from "react";
import { GlobalStyle, LoadingComponents } from "./StyledComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
// import Home from "./Components/Recipe/Home/Home";
import Recipes from "./Components/Recipe/Recipes/Recipes";
import About from "./Components/Recipe/About/About";
import Register from "./Components/Recipe/Register/Register";
import Login from "./Components/Recipe/Login/Login";
import VegRecipes from "./Components/Recipe/VegRecipes/VegRecipes";
import NonVegRecipes from "./Components/Recipe/NonVegRecipes/NonVegRecipes";
import Staters from "./Components/Recipe/Staters/Staters";
import Desserts from "./Components/Recipe/Desserts/Desserts";
import Snacks from "./Components/Recipe/Snacks/Snacks";
import NotFound from "./Components/Recipe/NotFound/NotFound";
import ForgotPassword from "./Components/Recipe/ForgotPassword/ForgotPassword";
import AllStaterRecipeItems from "./Components/Recipe/AllStaterRecipeItems/AllStaterRecipeItems";
import AllVegRecipeItems from "./Components/Recipe/AllVegRecipeItems/AllVegRecipeItems";
import AllNonVegRecipeItems from "./Components/Recipe/AllNonVegRecipeItems/AllNonVegRecipeItems";
import AllDessertRecipeItems from "./Components/Recipe/AllDessertRecipeItems/AllDessertRecipeItems";
import AllSnacksRecipeItems from "./Components/Recipe/AllSnacksRecipeItems/AllSnacksRecipeItems";
import Cart from "./Components/Recipe/Cart/Cart";
import FavContext from "./Components/Recipe/context/FavContext";

const Home = lazy(() => import("./Components/Recipe/Home/Home"));
// const Recipes = lazy(() => import("./Components/Recipe/Recipes/Recipes"));
// const About = lazy(() => import("./Components/Recipe/About/About"));
// const Register = lazy(() => import("./Components/Recipe/Register/Register"));
// const Login = lazy(() => import("./Components/Recipe/Login/Login"));
// const VegRecipes = lazy(() =>
//   import("./Components/Recipe/VegRecipes/VegRecipes")
// );
// const NonVegRecipes = lazy(() =>
//   import("./Components/Recipe/NonVegRecipes/NonVegRecipes")
// );
// const Staters = lazy(() => import("./Components/Recipe/Staters/Staters"));
// const Desserts = lazy(() => import("./Components/Recipe/Desserts/Desserts"));
// const Snacks = lazy(() => import("./Components/Recipe/Snacks/Snacks"));
// const NotFound = lazy(() => import("./Components/Recipe/NotFound/NotFound"));
// const ForgotPassword = lazy(() =>
//   import("./Components/Recipe/ForgotPassword/ForgotPassword")
// );
// const AllStaterRecipeItems = lazy(() =>
//   import("./Components/Recipe/AllStaterRecipeItems/AllStaterRecipeItems")
// );
// const AllVegRecipeItems = lazy(() =>
//   import("./Components/Recipe/AllVegRecipeItems/AllVegRecipeItems")
// );
// const AllNonVegRecipeItems = lazy(() =>
//   import("./Components/Recipe/AllNonVegRecipeItems/AllNonVegRecipeItems")
// );
// const AllDessertRecipeItems = lazy(() =>
//   import("./Components/Recipe/AllDessertRecipeItems/AllDessertRecipeItems")
// );
// const AllSnacksRecipeItems = lazy(() =>
//   import("./Components/Recipe/AllSnacksRecipeItems/AllSnacksRecipeItems")
// );
// const Cart = lazy(() => import("./Components/Recipe/Cart/Cart"));
// const FavContext = lazy(() => import("./Components/Recipe/context/FavContext"));

const App = () => {
  const [cartList, setCartList] = useState([]);

  const addCartItem = (product) => {
    const productObject = cartList.find((each) => each.id === product.id);
    if (productObject) {
      setCartList(
        cartList.map((eachItem) => {
          if (eachItem.id === product.id) {
            return {
              ...eachItem,
              quantity: eachItem.quantity + product.quantity,
            };
          }
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
    // setQuantity(quantity + 1);
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

  return (
    <>
      <BrowserRouter>
        <FavContext.Provider
          value={{
            cartList,
            addCartItem: addCartItem,
            removeCartItem: removeCartItem,
            removeAllCartItem: removeAllCartItem,
            incrementCartItemQuantity: incrementCartItemQuantity,
            decrementCartItemQuantity: decrementCartItemQuantity,
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
                      <ThreeDots color="#3b82f6" height={50} width={50} />
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
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Register />
                </Suspense>
              }
            />
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route
              exact
              path="/"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Home />
                </Suspense>
              }
            />
            <Route
              exact
              path="/about"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <About />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Recipes />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/staters/:id"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <AllStaterRecipeItems />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/veg_recipes/:id"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <AllVegRecipeItems />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/non_veg_recipes/:id"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <AllNonVegRecipeItems />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/dessert/:id"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <AllDessertRecipeItems />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/snacks/:id"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <AllSnacksRecipeItems />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/staters"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Staters />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/veg_recipes"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <VegRecipes />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/non_veg_recipes"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <NonVegRecipes />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/desserts"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Desserts />
                </Suspense>
              }
            />
            <Route
              exact
              path="/recipes/snacks"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Snacks />
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
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <Cart />
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
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <ForgotPassword />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense
                  fallback={
                    <LoadingComponents>
                      <ThreeDots color="#3b82f6" height={50} width={50} />
                    </LoadingComponents>
                  }
                >
                  <NotFound />
                </Suspense>
              }
            />
            {/* <Redirect to="/not-found" /> */}
          </Routes>
        </FavContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;

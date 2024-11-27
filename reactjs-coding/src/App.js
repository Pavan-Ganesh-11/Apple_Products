// // import React, { useState, lazy, Suspense } from "react";
// // // import Login from "./Components/Capstone_Project/Login/Login";
// // // import Register from "./Components/Capstone_Project/Register/Register";
// // // import Home from "./Components/Capstone_Project/Home/Home";
// // // import NotFound from "./Components/Capstone_Project/NotFound/NotFound";
// // // import {
// // //   BrowserRouter,
// // //   Route,
// // //   Routes,
// // //   Navigate,
// // // } from "react-router-dom";
// // import { GlobalStyle, LoadingComponents } from "./StyledComponent";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import { Oval } from "react-loader-spinner";
// // // import Home from "./Components/Recipe/Home/Home";
// // import Recipes from "./Components/Recipe/Recipes/Recipes";
// // import About from "./Components/Recipe/About/About";
// // import Register from "./Components/Recipe/Register/Register";
// // import Login from "./Components/Recipe/Login/Login";
// // import VegRecipes from "./Components/Recipe/VegRecipes/VegRecipes";
// // import NonVegRecipes from "./Components/Recipe/NonVegRecipes/NonVegRecipes";
// // import Staters from "./Components/Recipe/Staters/Staters";
// // import Desserts from "./Components/Recipe/Desserts/Desserts";
// // import Snacks from "./Components/Recipe/Snacks/Snacks";
// // import NotFound from "./Components/Recipe/NotFound/NotFound";
// // import ForgotPassword from "./Components/Recipe/ForgotPassword/ForgotPassword";
// // import AllStaterRecipeItems from "./Components/Recipe/AllStaterRecipeItems/AllStaterRecipeItems";
// // import AllVegRecipeItems from "./Components/Recipe/AllVegRecipeItems/AllVegRecipeItems";
// // import AllNonVegRecipeItems from "./Components/Recipe/AllNonVegRecipeItems/AllNonVegRecipeItems";
// // import AllDessertRecipeItems from "./Components/Recipe/AllDessertRecipeItems/AllDessertRecipeItems";
// // import AllSnacksRecipeItems from "./Components/Recipe/AllSnacksRecipeItems/AllSnacksRecipeItems";
// // import Cart from "./Components/Recipe/Cart/Cart";
// // import FavContext from "./Components/Recipe/context/FavContext";

// // const Home = lazy(() => import("./Components/Recipe/Home/Home"));
// // // const Recipes = lazy(() => import("./Components/Recipe/Recipes/Recipes"));
// // // const About = lazy(() => import("./Components/Recipe/About/About"));
// // // const Register = lazy(() => import("./Components/Recipe/Register/Register"));
// // // const Login = lazy(() => import("./Components/Recipe/Login/Login"));
// // // const VegRecipes = lazy(() =>
// // //   import("./Components/Recipe/VegRecipes/VegRecipes")
// // // );
// // // const NonVegRecipes = lazy(() => 
// // //   import("./Components/Recipe/NonVegRecipes/NonVegRecipes")
// // // );
// // // const Staters = lazy(() => import("./Components/Recipe/Staters/Staters"));
// // // const Desserts = lazy(() => import("./Components/Recipe/Desserts/Desserts"));
// // // const Snacks = lazy(() => import("./Components/Recipe/Snacks/Snacks"));
// // // const NotFound = lazy(() => import("./Components/Recipe/NotFound/NotFound"));
// // // const ForgotPassword = lazy(() =>
// // //   import("./Components/Recipe/ForgotPassword/ForgotPassword")
// // // );
// // // const AllStaterRecipeItems = lazy(() =>
// // //   import("./Components/Recipe/AllStaterRecipeItems/AllStaterRecipeItems")
// // // );
// // // const AllVegRecipeItems = lazy(() =>
// // //   import("./Components/Recipe/AllVegRecipeItems/AllVegRecipeItems")
// // // );
// // // const AllNonVegRecipeItems = lazy(() =>
// // //   import("./Components/Recipe/AllNonVegRecipeItems/AllNonVegRecipeItems")
// // // );
// // // const AllDessertRecipeItems = lazy(() =>
// // //   import("./Components/Recipe/AllDessertRecipeItems/AllDessertRecipeItems")
// // // );
// // // const AllSnacksRecipeItems = lazy(() =>
// // //   import("./Components/Recipe/AllSnacksRecipeItems/AllSnacksRecipeItems")
// // // );
// // // const Cart = lazy(() => import("./Components/Recipe/Cart/Cart"));
// // // const FavContext = lazy(() => import("./Components/Recipe/context/FavContext"));

// // const App = () => {
// //   const [cartList, setCartList] = useState([]);

// //   const addCartItem = (product) => {
// //     const productObject = cartList.find((each) => each.id === product.id);
// //     if (productObject) {
// //       setCartList(
// //         cartList.map((eachItem) => {
// //           if (eachItem.id === product.id) {
// //             return {
// //               ...eachItem,
// //               quantity: eachItem.quantity + product.quantity,
// //             };
// //           }
// //         })
// //       );
// //     } else {
// //       setCartList([...cartList, product]);
// //     }
// //   };

// //   const removeCartItem = (id) => {
// //     const filteredList = cartList.filter((each) => each.id !== id);
// //     setCartList(filteredList);
// //   };

// //   const removeAllCartItem = () => {
// //     setCartList([]);
// //   };

// //   const incrementCartItemQuantity = (id) => {
// //     // setQuantity(quantity + 1);
// //     setCartList(
// //       cartList.map((eachItem) => {
// //         if (eachItem.id === id) {
// //           return { ...eachItem, quantity: eachItem.quantity + 1 };
// //         }
// //         return eachItem;
// //       })
// //     );
// //   };

// //   const decrementCartItemQuantity = (id) => {
// //     const productObject = cartList.find((each) => each.id === id);
// //     if (productObject.quantity > 1) {
// //       setCartList(
// //         cartList.map((eachItem) => {
// //           if (eachItem.id === id) {
// //             return { ...eachItem, quantity: eachItem.quantity - 1 };
// //           }
// //           return eachItem;
// //         })
// //       );
// //     } else {
// //       removeCartItem(id);
// //     }
// //   };

// //   return (
// //     <>
// //       <BrowserRouter>
// //         <FavContext.Provider
// //           value={{
// //             cartList,
// //             addCartItem: addCartItem,
// //             removeCartItem: removeCartItem,
// //             removeAllCartItem: removeAllCartItem,
// //             incrementCartItemQuantity: incrementCartItemQuantity,
// //             decrementCartItemQuantity: decrementCartItemQuantity,
// //           }}
// //         >
// //           <GlobalStyle />
// //           <Routes>
// //             <Route
// //               exact
// //               path="/login"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Login />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/register"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Register />
// //                 </Suspense>
// //               }
// //             />
// //             {/* <Route exact path="/" element={<Home />} /> */}
// //             <Route
// //               exact
// //               path="/"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Home />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/about"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <About />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Recipes />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/staters/:id"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <AllStaterRecipeItems />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/veg_recipes/:id"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <AllVegRecipeItems />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/non_veg_recipes/:id"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <AllNonVegRecipeItems />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/dessert/:id"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <AllDessertRecipeItems />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/snacks/:id"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <AllSnacksRecipeItems />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/staters"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Staters />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/veg_recipes"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <VegRecipes />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/non_veg_recipes"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <NonVegRecipes />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/desserts"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Desserts />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/recipes/snacks"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Snacks />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/cart"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <Cart />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               exact
// //               path="/forgot-password"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <ForgotPassword />
// //                 </Suspense>
// //               }
// //             />
// //             <Route
// //               path="*"
// //               element={
// //                 <Suspense
// //                   fallback={
// //                     <LoadingComponents>
// //                       <Oval color="#3b82f6" height={35} width={50} />
// //                     </LoadingComponents>
// //                   }
// //                 >
// //                   <NotFound />
// //                 </Suspense>
// //               }
// //             />
// //             {/* <Redirect to="/not-found" /> */}
// //           </Routes>
// //         </FavContext.Provider>
// //       </BrowserRouter>
// //       {/* <BrowserRouter>
// //         <GlobalStyle />
// //         <Routes>
// //           <Route exact path="/login" element={<Login />} />
// //           <Route exact path="/" element={<Home />} />
// //           <Route exact path="/register" element={<Register />} />
// //           <Route exact path="*" element={<NotFound />} />
// //         </Routes>
// //       </BrowserRouter> */}
// //     </>
// //   );
// // };

// // export default App;

import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle, LoadingComponents } from "./StyledComponent";
import { Oval } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductItemDetails from "./Components/Capstone_Project/ProductItemDetails/ProductItemDetails";
import CartContext from "./Components/Capstone_Project/Context/CartContext";
import PaymentGateway from "./Components/Capstone_Project/PaymentCardDetails/PaymentCardDetails";
import Shipment from "./Components/Capstone_Project/Shipment/Shipment";
import DeliverTracking from "./Components/Capstone_Project/DeliverTracking/DeliverTracking";

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

  console.log(loginDetails);

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
    // setCartList(...cartList, product)
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

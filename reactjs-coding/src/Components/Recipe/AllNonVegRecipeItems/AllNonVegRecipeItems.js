import React, { useContext, useEffect, useState } from "react";
import "./AllNonVegRecipeItems.css";
import { useForm } from "react-hook-form";
import { useLocation, useMatch, useParams } from "react-router-dom";
import Header from "../Header/Header";
import axios from "axios";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import FavContext from "../context/FavContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";
import { FaRupeeSign } from "react-icons/fa";

const apiConstantStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};

const AllRecipeItems = () => {
  const params = useParams();
  const { id } = params;

  const loggedInValue = localStorage.getItem("loggedIn");

  // const context = useContext(FavContext);
  // console.log(context)

  // const [searchInput, setSearchInput] = useState("");
  const [recipesEachList, setRecipesEachList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);
  const [quantity, setQuantity] = useState(1);
  // const [retryBtn, setRetryBtn] = useState(recipesList);

  useEffect(() => {
    recipeData();
    // setRecipesEachList(vegRecipeItem);
  }, []);

  const recipeData = async () => {
    setApiStatus(apiConstantStatus.inProgress);
    const recipeUrl = `http://localhost:3000/NONVEGRECIPES/${id}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(recipeUrl, options);
    if (response.ok) {
      const updatedData = await response.json();
      console.log(updatedData);
      setRecipesEachList(updatedData);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  const {
    recipeImageUrl,
    recipeName,
    recipeDesc,
    recipePrice,
    stock,
    ingredients,
  } = recipesEachList;

  const onIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const onDecrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const value = useContext(FavContext);
  const { addCartItem } = value;

  const onClickFavorites = () => {
    if (loggedInValue !== null) {
      if (stock === "Available") {
        if (quantity > 0) {
          addCartItem({ ...recipesEachList, quantity });
          toast.success(`${recipeName} - Item Added to Favorites`, {
            position: "bottom-right",
          });
        }
      } else {
        toast.warning(`${recipeName} - Stock Not Available`, {
          position: "bottom-right",
          pauseOnHover: false,
        });
      }
    } else {
      // navigate("/login")
      toast.warning("Can't able to Add To Favorites without login", {
        position: "bottom-right",
        pauseOnHover: false,
      });
    }
  };

  const onClickSMFavorites = () => {
    if (loggedInValue !== null) {
      if (stock === "Available") {
        if (quantity > 0) {
          addCartItem({ ...recipesEachList, quantity });
          toast.success(`${recipeName} - Item Added to Favorites`, {
            position: "top-center",
          });
        }
      } else {
        toast.warning(`${recipeName} - Stock Not Available`, {
          position: "top-center",
          pauseOnHover: false,
        });
      }
    } else {
      // navigate("/login")
      toast.warning("Can't able to Add To Favorites without login", {
        position: "top-center",
        pauseOnHover: false,
      });
    }
  };

  const onRetry = () => {
    recipeData();
  };

  const recipeItemSuccess = () => {
    return (
      <>
        <img
          src={recipeImageUrl}
          alt={recipeName}
          className="all-non-veg-recipe-item-img"
        />
        <div className="all-non-veg-recipe-details-container">
          <h1 className="all-non-veg-recipe-name">{recipeName}</h1>
          <p className="all-non-veg-recipe-desc">{recipeDesc}</p>
          <hr className="all-non-veg-recipe-hr" />
          <div className="all-non-veg-recipe-ingredients">
            <h1 className="all-non-veg-recipe-ingredients-heading">
              Ingredients
            </h1>
            <ul className="all-non-veg-recipe-ingredients-list-wise">
              <>
                {ingredients.map((eachItem) => (
                  <li className="all-non-veg-recipe-item">
                    {eachItem.ingredient}
                  </li>
                ))}
              </>
            </ul>
          </div>
          <hr className="all-non-veg-recipe-hr" />
          <p className="all-non-veg-recipe-price">
            <span className="non-veg-price">Price: </span>
            <FaRupeeSign size={18} color="#555" />
            {recipePrice}
          </p>
          <p className="non-veg-stock">
            <span className="stock">Stock: </span>
            {stock}
          </p>
          <div className="quantity-container">
            <BsDashSquare
              size={17}
              className="increment-decrement-btn"
              onClick={() => onDecrementQuantity()}
            />
            <p className="quantity-count">{quantity}</p>
            <BsPlusSquare
              size={18}
              className="increment-decrement-btn"
              onClick={() => onIncrementQuantity()}
            />
          </div>
          <div className="add-to-fav-btn-container">
            <button
              type="button"
              className="recipe-btn"
              onClick={onClickFavorites}
            >
              Add to Favorites
            </button>
            <button
              type="button"
              className="recipe-sm-btn"
              onClick={onClickSMFavorites}
            >
              <GrFavorite size={22} />
            </button>
          </div>
        </div>
      </>
    );
  };

  const recipeItemLoading = () => {
    return (
      <div className="loading-container">
        <ThreeDots color="#3b82f6" height={50} width={50} />
      </div>
    );
  };

  const recipeItemFailure = () => {
    return (
      <div className="all-non-veg-recipe-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="Recipe Failure"
          className="all-non-veg-recipe-falilure-img"
        />
        <h1 className="all-non-veg-recipe-failure-heading">
          Oops! Something Went Wrong
        </h1>
        <p className="all-non-veg-recipe-failure-desc">
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </p>
        <button
          type="button"
          className="all-non-veg-recipe-failure-button btn btn-primary"
          onClick={() => onRetry()}
        >
          Retry
        </button>
      </div>
    );
  };

  const switchItem = () => {
    switch (apiStatus) {
      case apiConstantStatus.success:
        return recipeItemSuccess();
      case apiConstantStatus.inProgress:
        return recipeItemLoading();
      case apiConstantStatus.failure:
        return recipeItemFailure();
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="all-non-veg-recipes-container">{switchItem()}</div>
      <ToastContainer pauseOnHover={false} />
    </>
  );
};

export default AllRecipeItems;

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";
import { v4 as uuid4 } from "uuid";
import RecipeItems from "../RecipeItems/RecipeItems";
import {
  BsArrowRightShort,
  BsFacebook,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import RecipeBanner from "../RecipeBanner/RecipeBanner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
// const auth = require('json-server-auth');

// const recipesList = [
//   {
//     id: uuid4(),
//     imageUrl:
//       "https://i.ndtvimg.com/i/2014-12/chicken-kebab_625x300_41419060325.jpg",
//     recipeHeading: "Staters",
//     navigation_link: "staters",
//   },
//   {
//     id: uuid4(),
//     imageUrl:
//       "https://sukhis.com/app/uploads/2022/11/veggie-platter-1024x753.jpg",
//     recipeHeading: "Veg Meals",
//     navigation_link: "veg_recipes",
//   },
//   {
//     id: uuid4(),
//     imageUrl: "https://i.ytimg.com/vi/2u983B2wD1k/maxresdefault.jpg",
//     recipeHeading: "Non Veg",
//     navigation_link: "non_veg_recipes",
//   },
//   {
//     id: uuid4(),
//     imageUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRViwgjjbLp7grCuvlP6m-iaCOcaimUMdEyw&s",
//     recipeHeading: "Desserts",
//     navigation_link: "desserts",
//   },
//   {
//     id: uuid4(),
//     imageUrl:
//       "https://www.simplyrecipes.com/thmb/DQwhwMW7pnchtiucsnNR3J1Ul30=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chex-Mix-LEAD-c40ac62e480a4dd99388bc176c155bca.jpg",
//     recipeHeading: "Snacks",
//     navigation_link: "snacks",
//   },
// ];

const cardList = [
  {
    id: uuid4(),
    cardImageUrl: "FoodService.png",
    cardHeading: "Food Service",
    cardDesc:
      "Food Service is from our side that customer orders that can be packed and arrange to you quickly without any delay to the table.",
  },
  {
    id: uuid4(),
    cardImageUrl: "FreshFood.png",
    cardHeading: "Fresh Food",
    cardDesc:
      "The Fresh Food like Fruits and Vegetables which we are collecting from our partners farms, so that you can always get them tree.",
  },
  {
    id: uuid4(),
    cardImageUrl: "BestOffers.png",
    cardHeading: "Best Offers",
    cardDesc:
      "Food Coupons and Offers upto 50% OFF and providing few food coupons from All Online Food Orders",
  },
];

const apiConstantStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "INPROGRESS",
  failure: "FAILURE",
};

const Home = () => {
  // console.log(auth)
  const [recipesList, setRecipesList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);

  useEffect(() => {
    getRecipesData();
  }, []);

  const getRecipesData = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    const url = "http://localhost:3000/recipesList";
    const response = await axios.get(url);
    if (response.statusText === "OK") {
      console.log(response.data);
      setRecipesList(response.data);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  const recipesListDataSuccess = () => {
    return (
      <ul id="recipes" className="recipe-card-container">
        {recipesList.map((eachItem, index, arr) =>
          index < 4 ? (
            <RecipeItems eachRecipe={recipesList[index]} key={eachItem.id} />
          ) : null
        )}
      </ul>
    );
  };

  const recipesListDataLoading = () => {
    return (
      <div className="loading-container">
        <ThreeDots color="#3b82f6" height={50} width={50} />
      </div>
    );
  };

  const onRetry = () => {
    getRecipesData();
  };

  const recipesListDataFailure = () => {
    return (
      <div className="recipesList-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="Recipe Failure"
          className="recipesList-falilure-img"
        />
        <h1 className="recipesList-failure-heading">
          Oops! Something Went Wrong
        </h1>
        <p className="recipesList-failure-desc">
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </p>
        <button
          type="button"
          className="recipesList-failure-button btn btn-primary"
          onClick={() => onRetry()}
        >
          Retry
        </button>
      </div>
    );
  };

  const RecipesListData = () => {
    switch (apiStatus) {
      case apiConstantStatus.success:
        return recipesListDataSuccess();
      case apiConstantStatus.inProgress:
        return recipesListDataLoading();
      case apiConstantStatus.failure:
        return recipesListDataFailure();
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <RecipeBanner />
      <div id="whychooseus" className="wcu-container">
        <h1 className="wcu-heading">Why Choose Us?</h1>
        <div className="card-container">
          {cardList.map((eachItem) => (
            <WhyChooseUs wcuDetails={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
      <div className="recipe-container">
        <h1 className="recipe">Recipes</h1>
        <NavLink to="/recipes" className="view-all-recipe-link">
          View All <BsArrowRightShort size={17} />
        </NavLink>
        {RecipesListData()}
      </div>
      <div className="follow-us-section">
        <h1 className="fus-heading">Follow Us</h1>
        <div className="follow-us-btn-container">
          <button type="button" className="follow-us-btn">
            <a href="#" className="fus-icons-link">
              <BsInstagram className="follow-us-icons" />
            </a>
          </button>
          <button type="button" className="follow-us-btn">
            <a href="#" className="fus-icons-link">
              <BsFacebook className="follow-us-icons" />
            </a>
          </button>
          <button type="button" className="follow-us-btn">
            <a href="#" className="fus-icons-link">
              <BsTwitterX className="follow-us-icons" />
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

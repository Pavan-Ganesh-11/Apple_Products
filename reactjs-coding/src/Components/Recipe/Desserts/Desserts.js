import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ThreeDots } from "react-loader-spinner";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Desserts.css";

// import RecipesEachItem from "../RecipesEachItem/RecipesEachItem";
import Header from "../Header/Header";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import axios from "axios";

const apiConstantStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};

const Desserts = () => {
  const addRecipeDetails = {
    id: "",
    recipeImageUrl: "",
    recipeHeading: "",
    recipeDesc: "",
  };

  const addRecipeForm = useForm(addRecipeDetails);
  const { register, control, handleSubmit, formState } = addRecipeForm;
  const { errors } = formState;

  const [dessertSearchInput, setDessertsSearchInput] = useState("");
  const [dessertRecipesList, setDessertsRecipesList] = useState([]);
  const [dessertRecipesSearchFilter, setDessertRecipesSearchFilter] =
    useState();
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);

  useEffect(() => {
    recipesData();
  }, []);

  const recipesData = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    const url = "http://localhost:3000/desserts";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const updatedData = await response.json();
      console.log(updatedData);
      setDessertRecipesSearchFilter(updatedData);
      setDessertsRecipesList(updatedData);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  let filteredList = dessertRecipesList.filter((each) =>
    each.recipeHeading.toLowerCase().includes(dessertSearchInput.toLowerCase())
  );

  const onChangeVegSearchInput = (e) => {
    setDessertsSearchInput(e.target.value);
  };

  const onKeyDownVegSearchInput = (e) => {
    if (e.key === "Enter") {
      setDessertRecipesSearchFilter(filteredList);
    }
  };

  const onClickSearchBtn = () => {
    setDessertRecipesSearchFilter(filteredList);
  };

  const onPostAddRecipe = async (data) => {
    data.navigationLink = "desserts";

    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    const url = "http://localhost:3000/desserts";
    await fetch(url, options);
    recipesData();
    toast.success(`Recipe ${data.recipeHeading} - Added successfully..!!`);
  };

  const recipesDataSuccess = () => {
    return (
      <>
        {dessertRecipesSearchFilter.length === 0 ? (
          <div className="desserts-search-result-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="non_veg Not Found"
              className="desserts-search-result-img"
            />
            <h1 className="desserts-search-result-heading">
              {/* The Recipe that you are looking is not Found */}
              Not able to search Recipe Name -{" "}
              <span className="fst-italic fw-bolder">{dessertSearchInput}</span>
            </h1>
            <p className="desserts-search-result-desc">
              Try different key word or remove search filter
            </p>
          </div>
        ) : (
          <ul className="desserts-card-container mt-4">
            {dessertRecipesSearchFilter.map((eachItem) => (
              <RecipeListItem eachRecipe={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </>
    );
  };

  const recipesDataLoading = () => {
    return (
      <div className="loading-container">
        <ThreeDots color="#3b82f6" height={50} width={50} />
      </div>
    );
  };

  const onRetry = () => {
    recipesData();
  };

  const recipesDataFailure = () => {
    return (
      <div className="desserts-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="Recipe Failure"
          className="desserts-falilure-img"
        />
        <h1 className="desserts-failure-heading">Oops! Something Went Wrong</h1>
        <p className="desserts-failure-desc">
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </p>
        <button
          type="button"
          className="desserts-failure-button btn btn-primary"
          onClick={() => onRetry()}
        >
          Retry
        </button>
      </div>
    );
  };

  const recipesSwitchData = () => {
    switch (apiStatus) {
      case apiConstantStatus.success:
        return recipesDataSuccess();

      case apiConstantStatus.inProgress:
        return recipesDataLoading();

      case apiConstantStatus.failure:
        return recipesDataFailure();

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="desserts-items-container">
        <h1 className="desserts-heading">Desserts</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="form-control search-input"
            onChange={(e) => onChangeVegSearchInput(e)}
            onKeyDown={(e) => onKeyDownVegSearchInput(e)}
            value={dessertSearchInput}
          />
          <button
            type="button"
            className="btn btn-secondary desserts-search-btn"
            onClick={() => onClickSearchBtn()}
          >
            <AiOutlineSearch size={25} />
          </button>
        </div>
        <>{recipesSwitchData()}</>
        <hr />
        <div className="add-desserts-container">
          <h1 className="add-desserts-heading">Add Recipes</h1>
          <p className="add-desserts-desc">
            If you want to Add Recipes, then by click on the below button you
            can add recipes.
          </p>
          <Popup
            modal
            // closeOnEscape={true}
            className="pop-up-content"
            trigger={
              <button
                type="button"
                className="add-desserts-btn btn btn-secondary"
              >
                Add Recipes
              </button>
            }
          >
            {(close) => (
              <>
                <div className="desserts-popup-container">
                  <h1 className="add-desserts-heading text-center">
                    Add Recipe
                  </h1>
                  <div className="hr-container">
                    <hr className="popup-hr" />
                  </div>
                  <form
                    className="desserts-form-container"
                    onSubmit={handleSubmit(onPostAddRecipe)}
                  >
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="desserts-id"
                        className="form-label desserts-label"
                      >
                        id
                        <span className="desserts-required-field">*</span>
                      </label>
                      <input
                        type="number"
                        inputMode="number"
                        className="form-control desserts-input"
                        id="desserts-id"
                        placeholder="id"
                        {...register("id", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("id").isTouched && (
                        <>
                          <p className="desserts-error-msg">
                            {errors.id?.message}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="desserts-ImageUrl"
                        className="form-label desserts-label"
                      >
                        Image Url
                        <span className="desserts-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control desserts-input"
                        id="desserts-ImageUrl"
                        placeholder="image url"
                        {...register("recipeImageUrl", {
                          required: "*Required",
                          pattern: {
                            value:
                              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
                            message: "*Enter a valid url",
                          },
                        })}
                      />
                      {control.getFieldState("recipeImageUrl").isTouched && (
                        <p className="desserts-error-msg">
                          {errors.recipeImageUrl?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="desserts-Heading"
                        className="form-label desserts-label"
                      >
                        Recipe Heading
                        <span className="desserts-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control desserts-input"
                        id="desserts-Heading"
                        placeholder="Recipe Heading"
                        {...register("recipeHeading", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("recipeHeading").isTouched && (
                        <p className="desserts-error-msg">
                          {errors.recipeHeading?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="desserts-desc"
                        className="form-label recipes-label"
                      >
                        Recipe Description
                        <span className="recipes-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control recipes-input"
                        id="desserts-desc"
                        placeholder="Description"
                        {...register("recipeDesc", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("recipeDesc").isTouched && (
                        <p className="recipes-error-msg">
                          {errors.recipeDesc?.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="desserts-btn btn btn-secondary mt-2 w-100"
                    >
                      Add Recipe
                    </button>
                  </form>
                </div>
                <div className="hr-container">
                  <hr className="popup-hr" />
                </div>
                <div className="desserts-button-container">
                  <button
                    type="button"
                    className="close-desserts-btn btn btn-secondary"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Desserts;

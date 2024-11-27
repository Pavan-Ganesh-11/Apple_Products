import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ThreeDots } from "react-loader-spinner";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./NonVegRecipes.css";

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

const NonVegRecipes = () => {
  const addRecipeDetails = {
    id: "",
    recipeImageUrl: "",
    recipeHeading: "",
    recipeDesc: "",
  };

  const addRecipeForm = useForm(addRecipeDetails);
  const { register, control, handleSubmit, formState } = addRecipeForm;
  const { errors } = formState;

  const [nonVegSearchInput, setNonVegSearchInput] = useState("");
  const [nonVegRecipesList, setNonVegRecipesList] = useState([]);
  const [nonVegRecipesSearchFilter, setNonVegRecipesSearchFilter] = useState();
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);

  useEffect(() => {
    recipesData();
  }, []);

  const recipesData = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    const url = "http://localhost:3000/non_veg_recipes";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const updatedData = await response.json();
      console.log(updatedData);
      setNonVegRecipesSearchFilter(updatedData);
      setNonVegRecipesList(updatedData);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  let filteredList = nonVegRecipesList.filter((each) =>
    each.recipeHeading.toLowerCase().includes(nonVegSearchInput.toLowerCase())
  );

  const onChangeVegSearchInput = (e) => {
    setNonVegSearchInput(e.target.value);
  };

  const onKeyDownVegSearchInput = (e) => {
    if (e.key === "Enter") {
      setNonVegRecipesSearchFilter(filteredList);
    }
  };

  const onClickSearchBtn = () => {
    setNonVegRecipesSearchFilter(filteredList);
  };

  const onPostAddRecipe = async (data) => {
    data.navigationLink = "non_veg_recipes";

    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    const url = "http://localhost:3000/non_veg_recipes";
    await fetch(url, options);
    recipesData();
    toast.success(`Recipe ${data.recipeHeading} - Added successfully..!!`);
  };

  const recipesDataSuccess = () => {
    return (
      <>
        {nonVegRecipesSearchFilter.length === 0 ? (
          <div className="non_veg-recipes-search-result-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="non_veg Not Found"
              className="non_veg-recipes-search-result-img"
            />
            <h1 className="non_veg-recipes-search-result-heading">
              {/* The Recipe that you are looking is not Found */}
              Not able to search Recipe Name -{" "}
              <span className="fst-italic fw-bolder">{nonVegSearchInput}</span>
            </h1>
            <p className="non_veg-recipes-search-result-desc">
              Try different key word or remove search filter
            </p>
          </div>
        ) : (
          <ul className="non_veg-recipes-card-container mt-4">
            {nonVegRecipesSearchFilter.map((eachItem) => (
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
      <div className="non_veg-recipes-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="Recipe Failure"
          className="non_veg-recipes-falilure-img"
        />
        <h1 className="non_veg-recipes-failure-heading">Oops! Something Went Wrong</h1>
        <p className="non_veg-recipes-failure-desc">
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </p>
        <button
          type="button"
          className="non_veg-recipes-failure-button btn btn-primary"
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
      <div className="non_veg-recipes-items-container">
        <h1 className="non_veg-recipes-heading">Non Veg Recipes</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="form-control search-input"
            onChange={(e) => onChangeVegSearchInput(e)}
            onKeyDown={(e) => onKeyDownVegSearchInput(e)}
            value={nonVegSearchInput}
          />
          <button
            type="button"
            className="btn btn-secondary non_veg-recipes-search-btn"
            onClick={() => onClickSearchBtn()}
          >
            <AiOutlineSearch size={25} />
          </button>
        </div>
        <>{recipesSwitchData()}</>
        <hr />
        <div className="add-non_veg-recipes-container">
          <h1 className="add-non_veg-recipes-heading">Add Recipes</h1>
          <p className="add-non_veg-recipes-desc">
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
                className="add-non_veg-recipes-btn btn btn-secondary"
              >
                Add Recipes
              </button>
            }
          >
            {(close) => (
              <>
                <div className="non_veg-recipes-popup-container">
                  <h1 className="add-non_veg-recipes-heading text-center">
                    Add Recipe
                  </h1>
                  <div className="hr-container">
                    <hr className="popup-hr" />
                  </div>
                  <form
                    className="non_veg-recipes-form-container"
                    onSubmit={handleSubmit(onPostAddRecipe)}
                  >
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="non_veg-recipes-id"
                        className="form-label non_veg-recipes-label"
                      >
                        id
                        <span className="non_veg-recipes-required-field">
                          *
                        </span>
                      </label>
                      <input
                        type="number"
                        inputMode="number"
                        className="form-control non_veg-recipes-input"
                        id="non_veg-recipes-id"
                        placeholder="id"
                        {...register("id", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("id").isTouched && (
                        <>
                          <p className="non_veg-recipes-error-msg">
                            {errors.id?.message}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="non_veg-recipes-ImageUrl"
                        className="form-label non_veg-recipes-label"
                      >
                        Image Url
                        <span className="non_veg-recipes-required-field">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control non_veg-recipes-input"
                        id="non_veg-recipes-ImageUrl"
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
                        <p className="non_veg-recipes-error-msg">
                          {errors.recipeImageUrl?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="non_veg-recipes-Heading"
                        className="form-label non_veg-recipes-label"
                      >
                        Recipe Heading
                        <span className="non_veg-recipes-required-field">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control non_veg-recipes-input"
                        id="non_veg-recipes-Heading"
                        placeholder="Recipe Heading"
                        {...register("recipeHeading", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("recipeHeading").isTouched && (
                        <p className="non_veg-recipes-error-msg">
                          {errors.recipeHeading?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="non_veg-recipes-desc"
                        className="form-label recipes-label"
                      >
                        Recipe Description
                        <span className="recipes-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control recipes-input"
                        id="non_veg-recipes-desc"
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
                      className="non_veg-recipes-btn btn btn-secondary mt-2 w-100"
                    >
                      Add Recipe
                    </button>
                  </form>
                </div>
                <div className="hr-container">
                  <hr className="popup-hr" />
                </div>
                <div className="non_veg-recipes-button-container">
                  <button
                    type="button"
                    className="close-non_veg-recipes-btn btn btn-secondary"
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
    </>
  );
};

export default NonVegRecipes;

import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ThreeDots } from "react-loader-spinner";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./VegRecipes.css";

// import RecipesEachItem from "../RecipesEachItem/RecipesEachItem";
import Header from "../Header/Header";
// import VegRecipeListItem from "../VegRecipeListItem/VegRecipeListItem";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

const apiConstantStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};

const VegRecipes = () => {
  const addRecipeDetails = {
    id: "",
    recipeImageUrl: "",
    recipeHeading: "",
    recipeDesc: "",
  };

  const addRecipeForm = useForm(addRecipeDetails);
  const { register, control, handleSubmit, formState } = addRecipeForm;
  const { errors } = formState;

  const [vegSearchInput, setVegSearchInput] = useState("");
  const [vegRecipesList, setVegRecipesList] = useState([]);
  const [vegRecipesSearchFilter, setVegRecipesSearchFilter] = useState();
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);

  useEffect(() => {
    recipesData();
  }, []);

  const recipesData = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    const url = "http://localhost:3000/veg_recipes";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const updatedData = await response.json();
      setVegRecipesList(updatedData);
      setVegRecipesSearchFilter(updatedData);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  let filteredList = vegRecipesList.filter((each) =>
    each.recipeHeading.toLowerCase().includes(vegSearchInput.toLowerCase())
  );

  const onChangeVegSearchInput = (e) => {
    setVegSearchInput(e.target.value);
  };

  const onKeyDownVegSearchInput = (e) => {
    if (e.key === "Enter") {
      setVegRecipesSearchFilter(filteredList);
    }
  };

  const onClickSearchBtn = () => {
    setVegRecipesSearchFilter(filteredList);
  };

  const onPostAddRecipe = async (data) => {
    data.navigationLink = "veg_recipes"

    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    const url = "http://localhost:3000/veg_recipes";
    await fetch(url, options);
    recipesData();
    toast.success(`Recipe ${data.recipeHeading} added successfully..!!`);
  };

  const recipesDataSuccess = () => {
    return (
      <>
        {vegRecipesSearchFilter.length === 0 ? (
          <div className="veg-recipes-search-result-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="veg-recipes Not Found"
              className="veg-recipes-search-result-img"
            />
            <h1 className="veg-recipes-search-result-heading">
              Not able to search Recipe Name -{" "}
              <span className="fst-italic fw-bolder">{vegSearchInput}</span>
            </h1>
            <p className="veg-recipes-search-result-desc">
              Try different key word or remove search filter
            </p>
          </div>
        ) : (
          <ul className="veg-recipes-card-container mt-4">
            {vegRecipesSearchFilter.map((eachItem) => (
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
      <div className="veg-recipes-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="Recipe Failure"
          className="veg-recipes-falilure-img"
        />
        <h1 className="veg-recipes-failure-heading">
          Oops! Something Went Wrong
        </h1>
        <p className="veg-recipes-failure-desc">
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </p>
        <button
          type="button"
          className="veg-recipes-failure-button btn btn-primary"
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
      <div className="veg-recipes-items-container">
        <h1 className="veg-recipes-heading">Veg Recipes</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="form-control search-input"
            onChange={(e) => onChangeVegSearchInput(e)}
            onKeyDown={(e) => onKeyDownVegSearchInput(e)}
            value={vegSearchInput}
          />
          <button
            type="button"
            className="btn btn-secondary veg-recipes-search-btn"
            onClick={() => onClickSearchBtn()}
          >
            <AiOutlineSearch size={25} />
          </button>
        </div>
        <>{recipesSwitchData()}</>
        <hr />
        <div className="add-veg-recipes-container">
          <h1 className="add-veg-recipes-heading">Add Recipes</h1>
          <p className="add-veg-recipes-desc">
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
                className="add-veg-recipes-btn btn btn-secondary"
              >
                Add Recipes
              </button>
            }
          >
            {(close) => (
              <>
                <div className="veg-recipes-popup-container">
                  <h1 className="add-veg-recipes-heading text-center">
                    Add Recipe
                  </h1>
                  <div className="hr-container">
                    <hr className="popup-hr" />
                  </div>
                  <form
                    className="veg-recipes-form-container"
                    onSubmit={handleSubmit(onPostAddRecipe)}
                  >
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="veg-recipes-id"
                        className="form-label veg-recipes-label"
                      >
                        id
                        <span className="veg-recipes-required-field">*</span>
                      </label>
                      <input
                        type="number"
                        inputMode="number"
                        className="form-control veg-recipes-input"
                        id="veg-recipes-id"
                        placeholder="id"
                        {...register("id", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("id").isTouched && (
                        <>
                          <p className="veg-recipes-error-msg">
                            {errors.id?.message}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="veg-recipes-ImageUrl"
                        className="form-label veg-recipes-label"
                      >
                        Image Url
                        <span className="veg-recipes-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control veg-recipes-input"
                        id="veg-recipes-ImageUrl"
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
                        <p className="veg-recipes-error-msg">
                          {errors.recipeImageUrl?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="veg-recipes-Heading"
                        className="form-label veg-recipes-label"
                      >
                        Recipe Heading
                        <span className="veg-recipes-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control veg-recipes-input"
                        id="veg-recipes-Heading"
                        placeholder="Heading"
                        {...register("recipeHeading", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("recipeHeading").isTouched && (
                        <p className="veg-recipes-error-msg">
                          {errors.recipeHeading?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="veg-recipes-desc"
                        className="form-label veg-recipes-label"
                      >
                        Recipe Description
                        <span className="veg-recipes-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control veg-recipes-input"
                        id="veg-recipes-desc"
                        placeholder="Description"
                        {...register("recipeDesc", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("recipeDesc").isTouched && (
                        <p className="veg-recipes-error-msg">
                          {errors.recipeDesc?.message}
                        </p>
                      )}
                    </div>
                    {/* <div className="mb-3 w-100">
                      <label
                        htmlFor="recipesNavigationLink"
                        className="form-label recipes-label"
                      >
                        <span className="recipes-required-field">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control recipes-input"
                        id="recipesNavigationLink"
                        placeholder="Navigation Link"
                        {...register("navigation_link", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("navigation_link").isTouched && (
                        <p className="recipes-error-msg">
                          {errors.navigation_link?.message}
                        </p>
                      )}
                    </div> */}
                    <button
                      type="submit"
                      className="veg-recipes-btn btn btn-secondary mt-2 w-100"
                    >
                      Add Recipe
                    </button>
                  </form>
                </div>
                <div className="hr-container">
                  <hr className="popup-hr" />
                </div>
                <div className="veg-recipes-button-container">
                  <button
                    type="button"
                    className="close-veg-recipes-btn btn btn-secondary"
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

export default VegRecipes;

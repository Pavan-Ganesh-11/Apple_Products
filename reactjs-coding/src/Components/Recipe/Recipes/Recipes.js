import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ThreeDots } from "react-loader-spinner";
import { useForm } from "react-hook-form";

import "./Recipes.css";

import RecipesEachItem from "../RecipesEachItem/RecipesEachItem";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const apiConstantStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  failure: "FAILURE",
  success: "SUCCESS",
};

const Recipes = () => {
  const addRecipeDetails = {
    id: "",
    imageUrl: "",
    recipeHeading: "",
    navigation_link: "",
  };

  const addRecipeForm = useForm(addRecipeDetails);
  const { register, control, handleSubmit, formState } = addRecipeForm;
  const { errors } = formState;

  const [searchInput, setSearchInput] = useState("");
  const [recipesList, setRecipesList] = useState([]);
  const [searchFilter, setSearchFilter] = useState();
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);
  const [retryBtn, setRetryBtn] = useState(recipesList);

  useEffect(() => {
    const recipesData = async () => {
      setApiStatus(apiConstantStatus.inProgress);

      const url = "http://localhost:3000/recipesList";
      const options = {
        method: "GET",
      };

      const response = await fetch(url, options);
      if (response.ok === true) {
        const updatedData = await response.json();
        setSearchFilter(updatedData);
        setRecipesList(updatedData);
        setApiStatus(apiConstantStatus.success);
      } else {
        setApiStatus(apiConstantStatus.failure);
      }
    };

    recipesData();
  }, []);

  let filteredList = recipesList.filter((each) =>
    each.recipeHeading.toLowerCase().includes(searchInput.toLowerCase())
  );

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const onKeyDownSearchInput = (e) => {
    if (e.key === "Enter") {
      setSearchFilter(filteredList);
    }
  };

  const onClickSearchBtn = () => {
    setSearchFilter(filteredList);
  };

  // const onPostAddRecipe = async (data) => {
  //   console.log(data);
  //   const options = {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //   };

  //   const url = "http://localhost:3000/recipesList";
  //   await fetch(url, options);
  // };

  const recipesDataSuccess = () => {
    return (
      <>
        {searchFilter.length === 0 ? (
          <div className="recipes-search-result-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="Recipes Not Found"
              className="recipes-search-result-img"
            />
            <h1 className="recipes-search-result-heading">
              {/* The Recipe that you are looking is not Found */}
              Not able to search Recipe Name - <span className="fs-italic">{searchInput}</span>
            </h1>
            <p className="recipes-search-result-desc">
              Try different key word or remove search filter
            </p>
          </div>
        ) : (
          <ul className="recipes-card-container mt-4">
            {searchFilter.map((eachItem) => (
              <RecipesEachItem eachRecipe={eachItem} key={eachItem.id} />
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
    setRetryBtn(recipesList);
  }

  const recipesDataFailure = () => {
    return (
      <div className="recipes-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="Recipe Failure"
          className="recipes-falilure-img"
        />
        <h1 className="recipes-failure-heading">Oops! Something Went Wrong</h1>
        <p className="recipes-failure-desc">
          We are having some trouble to complete your request.
          <br />
          Please try again.
        </p>
        <button
          type="button"
          className="recipes-failure-button btn btn-primary"
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
      <div className="recipes-items-container">
        <h1 className="recipes-heading">Recipes</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            className="form-control search-input"
            onChange={(e) => onChangeSearchInput(e)}
            onKeyDown={(e) => onKeyDownSearchInput(e)}
            value={searchInput}
          />
          <button
            type="button"
            className="btn btn-secondary recipes-search-btn"
            onClick={() => onClickSearchBtn()}
          >
            <AiOutlineSearch size={25} />
          </button>
        </div>
        <>{recipesSwitchData()}</>
        {/* <hr /> */}
        {/* <div className="add-recipes-container">
          <h1 className="add-recipes-heading">Add Recipes</h1>
          <p className="add-recipes-desc">
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
                className="add-recipes-btn btn btn-secondary"
              >
                Add Recipes
              </button>
            }
          >
            {(close) => (
              <>
                <div className="recipes-popup-container">
                  <h1 className="add-recipes-heading text-center">
                    Add Recipe
                  </h1>
                  <div className="hr-container">
                    <hr className="popup-hr" />
                  </div>
                  <form
                    className="recipes-form-container"
                    onSubmit={handleSubmit(onPostAddRecipe)}
                  >
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="recipesid"
                        className="form-label recipes-label"
                      >
                        id
                        <span className="recipes-required-field">*</span>
                      </label>
                      <input
                        type="number"
                        inputMode="number"
                        className="form-control recipes-input"
                        id="recipesid"
                        placeholder="id"
                        {...register("id", {
                          required: "*Required",
                        })}
                      />
                      {control.getFieldState("id").isTouched && (
                        <>
                          <p className="recipes-error-msg">
                            {errors.id?.message}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="recipesImageUrl"
                        className="form-label recipes-label"
                      >
                        Image Url
                        <span className="recipes-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control recipes-input"
                        id="recipesImageUrl"
                        placeholder="image url"
                        {...register("imageUrl", {
                          required: "*Required",
                          pattern: {
                            value:
                              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi,
                            message: "*Enter a valid url",
                          },
                        })}
                      />
                      {control.getFieldState("imageUrl").isTouched && (
                        <p className="recipes-error-msg">
                          {errors.imageUrl?.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-3 w-100">
                      <label
                        htmlFor="recipesHeading"
                        className="form-label recipes-label"
                      >
                        Recipe Heading
                        <span className="recipes-required-field">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control recipes-input"
                        id="recipesHeading"
                        placeholder="Recipe Heading"
                        {...register("recipeHeading", {
                          required: "*Required",
                          pattern: {
                            value: /^[a-zA-Z]{3,}$/,
                            message: "*Enter a name with atlest 3 character",
                          },
                        })}
                      />
                      {control.getFieldState("recipeHeading").isTouched && (
                        <p className="recipes-error-msg">
                          {errors.recipeHeading?.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="recipes-btn btn btn-secondary mt-2 w-100"
                    >
                      Add Recipe
                    </button>
                  </form>
                </div>
                <div className="hr-container">
                  <hr className="popup-hr" />
                </div>
                <div className="recipes-button-container">
                  <button
                    type="button"
                    className="close-recipes-btn btn btn-secondary"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </Popup>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Recipes;

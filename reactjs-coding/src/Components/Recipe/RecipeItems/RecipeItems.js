import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import "./RecipeItems.css";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Recipes = (props) => {
  const { eachRecipe } = props;
  const { id, recipeImageUrl, recipeHeading, navigation_link } = eachRecipe;

  return (
    <>
      <li className="recipe-item-container">
        <img src={recipeImageUrl} alt={recipeHeading} className="recipe-img" />
        <h1 className="recipe-name-heading">{recipeHeading}</h1>
        <NavLink to={`/recipes/${navigation_link}`} className="view-all-link">
          View All
          <BsArrowRightShort className="arrow" size={18} />
        </NavLink>
        {/* <button
          type="button"
          onClick={(e) => onClickRecipes(recipeHeading, id, e)}
        >
          Click
        </button>
        {recipeCount} */}
      </li>
    </>
  );
};

export default Recipes;

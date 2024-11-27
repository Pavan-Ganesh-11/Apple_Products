import React from "react";
import "./RecipesEachItem.css";
import { BsArrowRightShort } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const RecipesEachItem = (props) => {
  const { eachRecipe } = props;
  const { id, recipeImageUrl, recipeHeading, navigation_link } = eachRecipe;

  return (
    <>
      <li className="recipes-item-container">
        <img src={recipeImageUrl} alt={recipeHeading} className="recipes-img" />
        <h1 className="recipes-name-heading">{recipeHeading}</h1>
        <NavLink to={`${navigation_link}`} className="recipes-view-all-link">
          View All
          <BsArrowRightShort className="arrow" size={18} />
        </NavLink>
      </li>
    </>
  );
};

export default RecipesEachItem;

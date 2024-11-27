import React from "react";
import "./RecipeBanner.css";
import { CustomButton } from "./StyledComponents";

const RecipeBanner = () => {
  return (
    <div className="recipe-banner-container">
      <div className="recipe-img-container">
        <img
          src="https://assets.bonappetit.com/photos/57d72ceb1807135a7746d72c/16:9/w_1280,c_limit/lebanese-pita-dips.jpg"
          alt="recipe"
          className="recipe-banner-img"
        />
      </div>
      <div className="recipe-banner-details-container">
        <h1 className="recipe-banner-heading">Get Delicious Food at Anytime</h1>
        <p className="recipe-banner-name">Eat Healthy</p>
        <div className="recipe-banner-btn-container">
          <CustomButton type="button" Color="#fff" bgColor="#0070c0">
            <a href="#recipes" className="view-recipe-link">
              View Recipe
            </a>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default RecipeBanner;

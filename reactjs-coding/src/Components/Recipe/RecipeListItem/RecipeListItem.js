import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./RecipeListItem.css";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const RecipeListItem = (props) => {
  const [quantitycount, setQuanitityCount] = useState(0);

  const { eachRecipe } = props;
  const {
    id,
    recipeImageUrl,
    recipeHeading,
    recipeDesc,
    recipePrice,
    navigationLink,
  } = eachRecipe;

  // const onIncrementQuantity = () => {
  //   setQuanitityCount(quantitycount + 1);
  // };

  // const onDecrementQuantity = () => {
  //   if (quantitycount < 1) {
  //     setQuanitityCount(0);
  //   } else {
  //     setQuanitityCount(quantitycount - 1);
  //   }
  // };

  // const onClickSMFavorites = () => {
  //   if (quantitycount > 0) {
  //     toast.success(`${recipeHeading} - Added to the Favorites!`, {
  //       position: "top-center",
  //     });
  //   }
  // };

  // const onClickFavorites = () => {
  //   if (quantitycount > 0) {
  //     toast.success(`${recipeHeading} - Added to the Favorites!`);
  //   }
  // };

  return (
    <NavLink
      to={`/recipes/${navigationLink}/${id}`}
      className="text-decoration-none"
    >
      <li className="recipe-item-container">
        <img src={recipeImageUrl} alt={recipeHeading} className="recipe-img" />
        <h1 className="recipe-name-heading text-dark">{recipeHeading}</h1>
        <p className="recipe-desc">{recipeDesc}</p>
        <p className="recipe-price">
          <span className="price">Price: </span>
          <FaRupeeSign size={18} color="#555" />
          {recipePrice}
        </p>
        {/* <div className="quantity-container">
        <AiOutlineMinusSquare size={25} onClick={() => onDecrementQuantity()} />
        <p className="quantity-count">{quantitycount}</p>
        <AiOutlinePlusSquare size={25} onClick={() => onIncrementQuantity()} />
        </div> */}
        {/* <button type="button" className="recipe-btn" onClick={onClickFavorites}>
        Add to Favorites
        </button>
        <button
        type="button"
        className="recipe-sm-btn"
        onClick={onClickSMFavorites}
        >
        <GrFavorite size={22} />
        </button> */}
        {/* <ToastContainer position="bottom-right" pauseOnHover={false} /> */}
      </li>
    </NavLink>
  );
};

export default RecipeListItem;

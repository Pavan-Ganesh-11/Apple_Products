import React, { useState } from "react";
import "./FilterGroup.css";
import { ThreeDots } from "react-loader-spinner";

const FilterGroup = (props) => {
  const {
    categoryOptions,
    ratingsList,
    activeCategoryId,
    clearFilters,
    changeCategory,
    changeRating,
    activeRatingId,
  } = props;

  const productListCategory = () => {
    return categoryOptions.map((categoryItem) => {
      const onClickCategoryItem = () => {
        changeCategory(categoryItem.categoryId);
      };
      
      const isActive = categoryItem.categoryId === activeCategoryId;
      const activeClassName = isActive
        ? "categoryClassName categoryActive"
        : "";

      return (
        <li
          className={`category-item`}
          key={categoryItem.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={`category-desc ${activeClassName}`}>
            {categoryItem.name}
          </p>
        </li>
      );
    });
  };

  const productCategory = () => {
    return (
      <>
        <h1 className="category-heading">Category</h1>
        <ul className="category-list-container">{productListCategory()}</ul>
      </>
    );
  };

  const ratingFilterList = () => {
    return ratingsList.map((ratingItem) => {
      const onClickRatingItem = () => {
        changeRating(ratingItem.ratingId);
      };
      const isActive = ratingItem.ratingId === activeRatingId;
      const ratingActiveClassName = isActive ? "ratingClassName" : "";
      
      return (
        <>
          <li
            className="rating-item"
            key={ratingItem.ratingId}
            onClick={onClickRatingItem}
          >
            <img
              src={ratingItem.imageUrl}
              alt={`rating${ratingItem.ratingId}`}
              className="rating-img"
            />
            <p className={`rating-desc ${ratingActiveClassName}`}> & up</p>
          </li>
        </>
      );
    });
  };

  const productRatingFilter = () => {
    return (
      <>
        <h1 className="rating-heading">Rating</h1>
        <ul className="rating-list-container">{ratingFilterList()}</ul>
      </>
    );
  };

  const onClickClearBtn = () => {
    clearFilters();
  };

  return (
    <div className="filter-group-container">
      {productCategory()}
      {productRatingFilter()}
      <button
        type="button"
        className="clear-filter-btn"
        onClick={onClickClearBtn}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterGroup;

import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import "./AppleItems.css";
import { AiOutlineSearch } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";
import { BsFilterRight } from "react-icons/bs";
import FilterGroup from "../FilterGroup/FilterGroup";
import Profile from "../Profile/Profile";

const sortbyOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_LOW",
    displayText: "Price (Low-High)",
  },
];

const ratingsList = [
  {
    ratingId: "4",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
  },
  {
    ratingId: "3",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
  },
  {
    ratingId: "2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
  },
  {
    ratingId: "1",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
  },
];

const categoryOptions = [
  {
    name: "Mobiles",
    categoryId: "MOBILES",
  },
  {
    name: "Laptops",
    categoryId: "LAPTOPS",
  },
  {
    name: "Desktops",
    categoryId: "DESKTOPS",
  },
  {
    name: "Watches",
    categoryId: "WATCHES",
  },
  {
    name: "iPads",
    categoryId: "IPADS",
  },
  {
    name: "Air Pods",
    categoryId: "AIRPODS",
  },
];

const apiConstantStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "INPROGRESS",
  failure: "FAILURE",
};

const AppleItems = () => {
  const [data, setData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);
  const [activeOptionId, setActiveOptionId] = useState(
    sortbyOptions[1].optionId
  );
  const [sortBy, setSortBy] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [searchFilteredData, setSearchFilteredData] = useState();
  const [priceOrder, setPriceOrder] = useState();
  const [activeCategoryId, setActiveCategoryId] = useState([]);
  const [activeRatingId, setActiveRatingId] = useState([]);

  const searchRef = useRef(null);

  const loggedInValue = localStorage.getItem("loggedIn");

  useEffect(() => {
    searchRef?.current?.focus();
  }, [])

  useEffect(() => {
    getAppleData();
  }, [activeCategoryId, activeRatingId]);

  const getAppleData = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    // if (activeOptionId === "PRICE_HIGH") {
    //   setSortBy("desc");
    // } else if (activeOptionId === "PRICE_LOW") {
    //   setSortBy("asc");
    // }

    const url = `http://localhost:3000/applesList?_sort=${priceOrder}&name=${activeCategoryId}&rating=${activeRatingId}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      const fetchedData = await response.data;
      setData(fetchedData);
      setSearchFilteredData(fetchedData);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  const getFilteredProducts = () => {
    const filterProducts = data.filter(
      (eachItem) => eachItem.name === activeCategoryId
    );
    return filterProducts;
  };

  const filteredList = data.filter((eachItem) =>
    eachItem.model.toLowerCase().includes(searchValue.toLowerCase())
  );

  const changeCategory = (tabId) => {
    setActiveCategoryId(tabId, getFilteredProducts);
  };

  const changeRating = (ratingId) => {
    setActiveRatingId(ratingId, getFilteredProducts);
  };

  const clearFilters = () => {
    setActiveCategoryId("");
    setActiveRatingId("");
  };

  // const onChangeSoryby = (e) => {
  //   setActiveOptionId(e.target.value);
  //   setPriceOrder("price");
  //   getAppleData();
  // };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const onClickSearchBtn = () => {
    setSearchFilteredData(filteredList);
  };

  const onKeyDownSearchInput = (e) => {
    if (e.key === "Enter") {
      setSearchFilteredData(filteredList);
    }
  };

  const iphoneSuccessData = () => {
    return (
      <>
        {searchFilteredData.length === 0 ? (
          <div className="no-products-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              className="no-products-img"
              alt="no products"
            />
            <h1 className="no-products-heading">No Products Found</h1>
            <p className="no-products-description">
              We could not find any products. Try other filters.
            </p>
          </div>
        ) : (
          <ul className="apple-items-list-container">
            {searchFilteredData.map((eachItem) => (
              <ProductItem productDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </>
    );
  };

  const Loading = () => {
    return (
      <div className="loading-container">
        <ThreeDots color="#3b82f6" height={50} width={50} />
      </div>
    );
  };

  const iPhonesFailureView = () => (
    <div className="products-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="products-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  const iphoneSwitchApi = () => {
    switch (apiStatus) {
      case apiConstantStatus.success:
        return iphoneSuccessData();

      case apiConstantStatus.inProgress:
        return Loading();

      case apiConstantStatus.failure:
        return iPhonesFailureView();

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="apple-items">
        <div className="apple-profile-filter-container">
          {loggedInValue && <Profile />}
          <FilterGroup
            categoryOptions={categoryOptions}
            ratingsList={ratingsList}
            changeCategory={changeCategory}
            activeCategoryId={activeCategoryId}
            activeRatingId={activeRatingId}
            changeRating={changeRating}
            clearFilters={clearFilters}
          />
        </div>
        <div className="products-container">
          <h1 className="apple-products-heading">Products</h1>
          <div className="search-and-sort-container">
            <div className="search-input-container">
              <div style={{position: "relative"}}>
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  ref={searchRef}
                  onChange={(e) => onChangeSearchInput(e)}
                  onKeyDown={(e) => onKeyDownSearchInput(e)}
                  value={searchValue}
                />
              <div className="search-underline"></div>
              </div>
              <button
                type="button"
                className="search-btn tooltip-test"
                title="Search"
                onClick={onClickSearchBtn}
              >
                <AiOutlineSearch size={28} color="#fff" />
              </button>
            </div>
            {/* <div className="sort-by-container">
              <BsFilterRight className="sort-by-icon" />
              <h1 className="sort-by">Sort by</h1>
              <select
                className="sort-by-select"
                onChange={(e) => onChangeSoryby(e)}
                value={activeOptionId}
              >
                {sortbyOptions.map((eachItem) => (
                  <option value={eachItem.optionId} className="select-option">
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
          {iphoneSwitchApi()}
        </div>
      </div>
    </>
  );
};

export default AppleItems;

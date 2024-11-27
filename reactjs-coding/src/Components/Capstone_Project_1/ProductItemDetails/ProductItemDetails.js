import React, { useContext, useEffect, useState } from "react";
import "./ProductItemDetails.css";

import Header from "../Header/Header";
import { AiFillStar } from "react-icons/ai";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import { FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiHeart } from "react-icons/fi";
import { MdOutlineFavorite } from "react-icons/md";
import MobileProductItem from "../MobileProductItem/MobileProductItem";
import LaptopProductItem from "../LaptopProductItem/LaptopProductItem";
import DesktopProductItem from "../DesktopProductItem/DesktopProductItem";
import CartContext from "../Context/CartContext";
import WatchProductItem from "../WatchProductItem/WatchProductItem";
import IPADSProductItem from "../IPADProductItem/IPadsProductItem";
import AirPodsProductItem from "../AirPodsProductItem/AirPodsProductItem";
import { Tooltip } from "@mui/material";
import Comments from "../Comments/Comments";

const apiConstantStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "INPROGRESS",
  failure: "FAILURE",
};

const ProductItemDetails = () => {
  const [data, setData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);
  const [quantity, setQuantity] = useState(1);

  const value = useContext(CartContext);
  const { addCartItem, addFavoriteItem } = value;

  const params = useParams();
  const { id } = params;

  const loggedInValue = localStorage.getItem("loggedIn");

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductItemDetails();
  }, []);

  const getProductItemDetails = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    const url = `http://localhost:3000/productEachItem/${id}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      const fetchedData = await response.data;
      setData(fetchedData);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  const onClickAddToCart = (name) => {
    if (loggedInValue === null) {
      // toast.warning("Unable to Add in Cart without Logging In", {
      //   position: "bottom-right",
      // });
      toast.warning(`Please login before Adding Product in Cart`, {
        position: "bottom-right",
      });
    } else {
      if (data.availability === "Available") {
        toast.success(`${name} - Successfully Added To Cart`, {
          position: "bottom-right",
        });
        setQuantity(quantity + 1);
        addCartItem({ ...data, quantity });
      } else {
        toast.warning(
          `${name} - unable to Add To Cart due to Stock Not Availability`,
          {
            position: "bottom-right",
          }
        );
      }
    }
  };

  const onClickAddToFavorites = (name) => {
    if (loggedInValue === null) {
      // toast.warning("Unable to Add in Favorite without Logging In", {
      //   position: "bottom-right",
      // });
      toast.warning(`Please login before Adding Product in Favorites`, {
        position: "bottom-right",
      });
    } else {
      toast.success(`${name} - Successfully Added To Favorites`, {
        position: "bottom-right",
      });

      addFavoriteItem({ ...data });
    }
  };

  const getMobilesData = () => {
    return (
      <>
        <MobileProductItem productMobile={data} key={data.id} />
      </>
    );
  };

  const getLaptopData = () => {
    return (
      <>
        <LaptopProductItem productLaptop={data} key={data.id} />
      </>
    );
  };

  const getDesktopData = () => {
    return (
      <>
        <DesktopProductItem productLaptop={data} key={data.id} />
      </>
    );
  };

  const getWatchesData = () => {
    return (
      <>
        <WatchProductItem productWatch={data} key={data.id} />
      </>
    );
  };

  const getIpadsData = () => {
    return (
      <>
        <IPADSProductItem productIpads={data} key={data.id} />
      </>
    );
  };

  const getairPodsData = () => {
    return (
      <>
        <AirPodsProductItem airPodsDetails={data} key={data.id} />
      </>
    );
  };

  const productSuccessData = () => {
    const {
      name,
      imageUrl,
      model,
      rating,
      price,
      description,
      availability,
      highlights,
    } = data;

    return (
      <div className="product-item-details-main-container">
        <div className="products-item-details-main">
          <div className="product-img-btn-container">
            <div className="product-item-img-container">
              <img src={imageUrl} alt={model} className="product-item-img" />
            </div>
            <div className="add-to-cart-container mt-4">
              {/* <div className="quantity-container">
              <BsDashSquare size={17} className="increment-btn" />
              <p className="quantity-count">22</p>
              <BsPlusSquare size={18} className="decrement-btn" />
            </div> */}
              <div className="product-button-container">
                {availability === "Available" ? (
                  <Tooltip title="Add To Cart" arrow>
                    <button
                      type="button"
                      className="add-to-cart-each-product-btn"
                      onClick={() => onClickAddToCart(model)}
                    >
                      <FaShoppingCart size={23} />
                      Add To Cart
                    </button>
                  </Tooltip>
                ) : null}
                <Tooltip title="Add To Favorites" arrow>
                  <button
                    type="button"
                    className="add-to-favorites-btn"
                    onClick={() => onClickAddToFavorites(model)}
                  >
                    <MdOutlineFavorite size={25} />
                    Add To Favorites
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          <hr className="product-hr" />
          <div className="product-item-details">
            <h1 className="product-heading">{model}</h1>
            <p className="product-each-item-rating">
              {rating}
              <AiFillStar size={18} color="gold" />
            </p>
            <h1 className="product-price">
              <FaRupeeSign size={22} />
              {price}/-
            </h1>
            <p className="product-availability-stock">
              Stock:{" "}
              <span className="product-availability">{availability}</span>
            </p>
            <div className="product-logo-container">
              <div className="product-logo">
                <img
                  src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
                  alt="Apple Logo"
                  className="product-each-item-img"
                />
              </div>
              <p className="product-brand-warrenty">
                Brand Warrenty for 1 Year
              </p>
            </div>
            <div className="product-description-container">
              <h1 className="product-desc-name">Description: </h1>
              <p className="product-desc">{description}</p>
            </div>
            <div className="hightlights-container">
              <h1 className="highlights">Highlights</h1>
              <ul className="product-highlight-list-container">
                {highlights.map((each) => (
                  <li className="product-list">{each.item}</li>
                ))}
              </ul>
            </div>
            <div className="specifications-container">
              <h1 className="specifications-heading">Specifications</h1>
              {name === "MOBILES"
                ? getMobilesData()
                : name === "LAPTOPS"
                ? getLaptopData()
                : name === "DESKTOPS"
                ? getDesktopData()
                : name === "WATCHES"
                ? getWatchesData()
                : name === "IPADS"
                ? getIpadsData()
                : name === "AIRPODS"
                ? getairPodsData()
                : null}
            </div>
          </div>
        </div>
        {loggedInValue && (
          <>
            <hr className="product-items-after" />
            <Comments />
          </>
        )}
      </div>
    );
  };

  const Loading = () => {
    return (
      <div className="loading-container">
        <ThreeDots color="#3b82f6" height={50} width={50} />
      </div>
    );
  };

  const productsFailureView = () => (
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

  const switchApiData = () => {
    switch (apiStatus) {
      case apiConstantStatus.success:
        return productSuccessData();

      case apiConstantStatus.inProgress:
        return Loading();

      case apiConstantStatus.failure:
        return productsFailureView();

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="product-item-details-container">
        <div className="product-item-container">{switchApiData()}</div>
      </div>
    </>
  );
};

export default ProductItemDetails;

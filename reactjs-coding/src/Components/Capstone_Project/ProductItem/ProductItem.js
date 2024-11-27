import React, { useContext, useEffect, useState } from "react";
import "./ProductItem.css";
import { BsArrowRightShort, BsBucketFill } from "react-icons/bs";
import { FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdOutlineFavorite } from "react-icons/md";
import Popup from "reactjs-popup";
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartContext from "../Context/CartContext";
import { Tooltip } from "@mui/material";

const ProductItem = (props) => {
  const { productDetails } = props;

  const { id, name, imageUrl, model, specifications, price, rating } =
    productDetails;

  const [isFav, setIsFav] = useState(false);

  const value = useContext(CartContext);
  const { addFavoriteItem, removeFavoriteItem } = value;

  const loggedInValue = localStorage.getItem("loggedIn");

  const onClickFavoriteIcon = () => {
    const { productDetails } = props;

    setIsFav((prev) => !prev);

    if (isFav === true) {
      toast.error(`${model} - Removed from Favorites`, {
        position: "bottom-center",
      });
      removeFavoriteItem(id);
    } else {
      toast.success(`${model} - Successfully Added To Favorites`, {
        position: "bottom-center",
      });
      addFavoriteItem({ ...productDetails });
    }
  };

  // const onClickAddToCart = () => {
  //   if (loggedInValue !== null) {
  //     toast.success(`${model} - Successfully Added to Cart`, {
  //       position: "bottom-center",
  //     });
  //   } else {
  //     toast.warning("Unable to Add to Cart without user logging in", {
  //       position: "bottom-center",
  //     });
  //   }
  // };

  return (
    <>
      <li className="product-items-container">
        <NavLink to={`/products/${id}`} className="text-decoration-none">
          <Tooltip
            title={model}
            arrow
            followCursor
            placement="right-start"
            enterDelay={500}
          >
            <div className="product-img-container">
              <img src={imageUrl} alt={model} loading="lazy" className="product-img" />
            </div>
          </Tooltip>
        </NavLink>
        <div className="iphone-item-details-container">
          <div className="heading-fav-container">
            <h1 className="product-name" title={model}>
              {model}
            </h1>
            {/* {loggedInValue === null ? (
              <button
                type="button"
                className="favorite-product-btn"
                onClick={onClickFavoriteIcon}
              >
                <Popup
                  modal
                  // closeOnEscape={true}
                  className="pop-up-content"
                  trigger={
                    <FiHeart
                      size={28}
                      title="Favorite"
                      enableBackground={true}
                      className="product-fav-icon"
                    />
                  }
                >
                  {(close) => (
                    <>
                      <div className="recipes-popup-container">
                        <h1 className="logout-heading display-6">
                          Can't able to access
                          <span className="fw-bolder"> Favorites</span> without
                          logging in
                        </h1>
                        <div className="logout-container">
                          <button
                            type="button"
                            className="logout-close-btn btn btn-secondary"
                            onClick={() => close()}
                          >
                            Close
                          </button>
                          <NavLink
                            to="/login"
                            className="text-white text-decoration-none"
                          >
                            <button type="button" className="product-login">
                              Login
                            </button>
                          </NavLink>
                        </div>
                      </div>
                      <div className="recipes-button-container"></div>
                    </>
                  )}
                </Popup>
              </button>
            ) : (
              <>
                {isFav ? (
                  <button
                    type="button"
                    className="favorite-product-btn"
                    onClick={onClickFavoriteIcon}
                  >
                    <MdOutlineFavorite
                      size={33}
                      title="Favorited"
                      color="red"
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="favorite-product-btn"
                    onClick={onClickFavoriteIcon}
                  >
                    <FiHeart
                      size={28}
                      enableBackground={true}
                      title="Favorite"
                      className="product-fav-icon"
                    />
                  </button>
                )}
              </>
            )} */}
          </div>
          <ul className="product-item-details-list-container">
            {name === "DESKTOPS" ? (
              <>
                {specifications.map((eachItem, index) =>
                  index < 5 ? (
                    <li className="product-item">
                      <span className="item">{specifications[index].item}</span>
                    </li>
                  ) : null
                )}
              </>
            ) : name === "IPADS" ? (
              <>
                {specifications.map((eachItem, index) =>
                  index < 5 ? (
                    <li className="product-item">
                      <span className="item">{specifications[index].item}</span>
                    </li>
                  ) : null
                )}
              </>
            ) : (
              <>
                {specifications.map((eachItem, index) =>
                  index < 3 ? (
                    <li className="product-item">
                      <span className="item">{specifications[index].item}</span>
                    </li>
                  ) : null
                )}
              </>
            )}
          </ul>
          <p className="product-rating">
            <AiFillStar size={18} color="gold" />
            {rating}
          </p>
          <div className="product-price-container">
            <div className="product-btn-container">
              <div>
                <p className="prouct-price">
                  <FaRupeeSign size={15} />
                  {price}/-
                </p>
                <p className="product-price-desc">Free delivery</p>
              </div>
            </div>
            {/* <button className="learn-more-btn btn btn-light shadow">
            Learn More
          </button> */}
            {/* <button
            type="button"
            className="add-to-cart-btn"
            onClick={onClickAddToCart}
          >
            {loggedInValue === null ? (
              <Popup
                modal
                // closeOnEscape={true}
                className="pop-up-content"
                trigger={<FaShoppingCart size={25} color="#000" />}
              >
                {(close) => (
                  <>
                    <div className="recipes-popup-container">
                      <h1 className="logout-heading display-6">
                        Can't able to access
                        <span className="fw-bolder"> Cart</span> without logging
                        in
                      </h1>
                      <div className="logout-container">
                        <button
                          type="button"
                          className="logout-close-btn btn btn-secondary"
                          onClick={() => close()}
                        >
                          Close
                        </button>
                        <NavLink
                          to="/login"
                          className="text-white text-decoration-none"
                        >
                          <button type="button" className="product-login">
                            Login
                          </button>
                        </NavLink>
                      </div>
                    </div>
                    <div className="recipes-button-container"></div>
                  </>
                )}
              </Popup>
            ) : (
              <FaShoppingCart size={25} color="#000" />
            )}
          </button> */}
            <NavLink
              to={`/products/${id}`}
              className="view-all-link text-decoration-none"
            >
              View All
              <BsArrowRightShort className="arrow" size={18} />
            </NavLink>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductItem;

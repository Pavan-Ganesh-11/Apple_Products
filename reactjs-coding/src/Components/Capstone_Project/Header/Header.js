import React, { useContext } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import { MdHome, MdLogout } from "react-icons/md";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import {
  CartCountBadge,
  HeaderContainer,
  HeaderSMLogoutBtn,
  LoginSingupBtn,
  LogoutCloseButton,
  LogoutContainer,
  LogoutHeading,
  NavHeadingLogo,
  NavigationDetails,
  NavListContainer,
  NavLogout,
  NavSMlistContainer,
  NavLoginLogoutContainer,
  NavLoginSignUpContainer,
  NavSMLogout,
  NavSMLoginLogoutContainer,
  NavLists,
  CartFavoriteList,
} from "./StyledComponent";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
// import FavContext from "../context/FavContext";
import { LuLogIn } from "react-icons/lu";
import { HiUserAdd } from "react-icons/hi";
import CartContext from "../Context/CartContext";
import { AiFillProduct } from "react-icons/ai";
import { hover } from "@testing-library/user-event/dist/hover";

const Header = () => {
  const value = useContext(CartContext);
  const { cartList, favoriteList } = value;

  const cartItemCount = cartList.length;
  const favoriteItemCount = favoriteList.length;

  const loggedInValue = localStorage.getItem("loggedIn");

  const onClickLogout = () => {
    localStorage.clear();
  };

  return (
    <HeaderContainer>
      <NavLink to="/" className="text-dark text-decoration-none">
        <NavHeadingLogo>Pavan</NavHeadingLogo>
      </NavLink>
      <NavigationDetails>
        <NavListContainer>
          <NavLink
            to="/"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <NavLists>HOME</NavLists>
          </NavLink>
          <NavLink
            to="/products"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <NavLists>PRODUCTS</NavLists>
          </NavLink>
          {loggedInValue !== null ? (
            <NavLink
              to="/favorites"
              className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
            >
              <NavLists>
                FAVORITES
                {favoriteItemCount > 0 && (
                  <CartCountBadge>{favoriteList.length}</CartCountBadge>
                )}
              </NavLists>
            </NavLink>
          ) : (
            <Popup
              modal
              // closeOnEscape={true}
              className="pop-up-content"
              trigger={
                <NavLists style={{ cursor: "pointer" }}>FAVORITES</NavLists>
              }
            >
              {(close) => (
                <>
                  <div className="recipes-popup-container">
                    <LogoutHeading
                      className="logout-heading text-center display-6"
                      style={{ fontSize: "20px" }}
                    >
                      Can't able to access
                      <span className="fw-bolder"> Favorites</span> without
                      logging in
                    </LogoutHeading>
                    <LogoutContainer>
                      <LogoutCloseButton
                        type="button"
                        className="logout-btn btn btn-secondary"
                        onClick={() => close()}
                      >
                        Close
                      </LogoutCloseButton>
                      <NavLink
                        to="/login"
                        className="text-white text-decoration-none"
                      >
                        <NavLogout type="button" onClick={onClickLogout}>
                          Login
                        </NavLogout>
                      </NavLink>
                    </LogoutContainer>
                  </div>
                  <div className="recipes-button-container"></div>
                </>
              )}
            </Popup>
          )}
          {loggedInValue !== null ? (
            <NavLink
              to="/cart"
              className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
            >
              <NavLists>
                CART
                {cartItemCount > 0 && (
                  <CartCountBadge>{cartList.length}</CartCountBadge>
                )}
              </NavLists>
            </NavLink>
          ) : (
            <Popup
              modal
              // closeOnEscape={true}
              className="pop-up-content"
              trigger={<NavLists style={{ cursor: "pointer" }}>CART</NavLists>}
            >
              {(close) => (
                <>
                  <div className="recipes-popup-container">
                    <LogoutHeading
                      className="logout-heading text-center display-6"
                      style={{ fontSize: "20px" }}
                    >
                      Can't able to access
                      <span className="fw-bolder"> Cart</span> without logging
                      in
                    </LogoutHeading>
                    <LogoutContainer>
                      <LogoutCloseButton
                        type="button"
                        className="logout-btn btn btn-secondary"
                        onClick={() => close()}
                      >
                        Close
                      </LogoutCloseButton>
                      <NavLink
                        to="/login"
                        className="text-white text-decoration-none"
                      >
                        <NavLogout type="button" onClick={onClickLogout}>
                          Login
                        </NavLogout>
                      </NavLink>
                    </LogoutContainer>
                  </div>
                  <div className="recipes-button-container"></div>
                </>
              )}
            </Popup>
          )}
        </NavListContainer>
        <NavSMlistContainer>
          <NavLink
            to="/"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <li title="Home">
              <MdHome size={32} />
            </li>
          </NavLink>
          <NavLink
            to="/products"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <li title="Products">
              <AiFillProduct size={27} />
            </li>
          </NavLink>
          <NavLink
            to="/favorite"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <CartFavoriteList title="Favorites">
              <FiHeart size={27} />
              {favoriteItemCount > 0 && (
                <CartCountBadge>{favoriteList.length}</CartCountBadge>
              )}
              {/* <IoMdCart size={27} /> */}
            </CartFavoriteList>
          </NavLink>
          <NavLink
            to="/cart"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <CartFavoriteList title="Cart">
              <FaShoppingCart size={23} />
              {cartItemCount > 0 && (
                <CartCountBadge>{cartList.length}</CartCountBadge>
              )}
              {/* <IoMdCart size={27} /> */}
            </CartFavoriteList>
          </NavLink>
        </NavSMlistContainer>
      </NavigationDetails>
      <NavLoginLogoutContainer>
        {loggedInValue ? (
          <Popup
            modal
            // closeOnEscape={true}
            className="pop-up-content"
            trigger={<NavLogout type="button">Logout</NavLogout>}
          >
            {(close) => (
              <>
                <div className="recipes-popup-container">
                  <LogoutHeading className="logout-heading text-center">
                    Are you sure you want to logout
                  </LogoutHeading>
                  <LogoutContainer>
                    <LogoutCloseButton
                      type="button"
                      className="logout-btn btn btn-secondary"
                      onClick={() => close()}
                    >
                      Close
                    </LogoutCloseButton>
                    <NavLink
                      to="/login"
                      className="text-white text-decoration-none"
                    >
                      <NavLogout type="button" onClick={onClickLogout}>
                        Logout
                      </NavLogout>
                    </NavLink>
                  </LogoutContainer>
                </div>
                <div className="recipes-button-container"></div>
              </>
            )}
          </Popup>
        ) : (
          <>
            <NavLink
              to="/login"
              className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
              style={{
                height: "40px",
                width: "100px",
                background: "linear-gradient(to left, #2c3e50, #58b8c7)",
                boxShadow: "0 2px 5px 1px #aaa",
                fontFamily: "Roboto",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <li className="text-white">Login</li>
            </NavLink>
            <NavLink
              to="/register"
              className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
              style={{
                height: "40px",
                width: "100px",
                background:
                  "linear-gradient(to left, #f8f9fa, #ced4da, #e9ecef)",
                border: "1px solid #000",
                boxShadow: "0 2px 5px 1px #aaa",
                fontFamily: "Roboto",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <li className="text-dark">Sign Up</li>
            </NavLink>
          </>
        )}
      </NavLoginLogoutContainer>
      <NavSMLoginLogoutContainer>
        {loggedInValue ? (
          <Popup
            modal
            // closeOnEscape={true}
            className="pop-up-content"
            trigger={
              <HeaderSMLogoutBtn type="button" title="Logout">
                <MdLogout color="#000" size={25} />
              </HeaderSMLogoutBtn>
            }
          >
            {(close) => (
              <>
                <div className="recipes-popup-container">
                  <LogoutHeading className="logout-heading text-center">
                    Are you sure you want to logout
                  </LogoutHeading>
                  <LogoutContainer>
                    <LogoutCloseButton
                      type="button"
                      className="logout-btn btn btn-secondary"
                      onClick={() => close()}
                    >
                      Close
                    </LogoutCloseButton>
                    <NavLink to="/login" className="text-decoration-none">
                      <NavSMLogout type="button" onClick={onClickLogout}>
                        Logout
                      </NavSMLogout>
                    </NavLink>
                  </LogoutContainer>
                </div>
                <div className="recipes-button-container"></div>
              </>
            )}
          </Popup>
        ) : (
          <NavLoginSignUpContainer>
            <NavLink
              to="/login"
              className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
            >
              <LoginSingupBtn>
                <li title="Login">
                  <LuLogIn size={25} />
                </li>
              </LoginSingupBtn>
            </NavLink>
            <NavLink
              to="/register"
              className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
            >
              <LoginSingupBtn>
                <li title="Sign up">
                  <HiUserAdd size={25} />
                </li>
              </LoginSingupBtn>
            </NavLink>
          </NavLoginSignUpContainer>
        )}
      </NavSMLoginLogoutContainer>
    </HeaderContainer>
  );
};

export default Header;

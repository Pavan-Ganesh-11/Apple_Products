import React, { useContext } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaInfoCircle } from "react-icons/fa";
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
  NavSMLogout,
} from "./StyledComponent";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import FavContext from "../context/FavContext";
import { LuLogIn } from "react-icons/lu";
import { HiUserAdd } from "react-icons/hi";
const path = require("../../../Assets/WhyChooseUs/WhyChooseUsIcon.jpg");

const Header = () => {
  const navigate = useNavigate();
  const value = useContext(FavContext);
  const { cartList } = value;
  const cartItemCount = cartList.length;

  const loggedInValue = localStorage.getItem("loggedIn");
  console.log(loggedInValue);

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
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <li>About</li>
          </NavLink>
          {loggedInValue !== null ? (
            <NavLink
              to="/cart"
              className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
            >
              <li>
                Favorites
                {cartItemCount > 0 && (
                  <CartCountBadge>{cartList.length}</CartCountBadge>
                )}
              </li>
            </NavLink>
          ) : (
            <Popup
              modal
              // closeOnEscape={true}
              className="pop-up-content"
              trigger={<li style={{ cursor: "pointer" }}>Favorites</li>}
            >
              {(close) => (
                <>
                  <div className="recipes-popup-container">
                    <LogoutHeading
                      className="logout-heading text-center display-6"
                      style={{ fontSize: "20px" }}
                    >
                      Can't able to access{" "}
                      <span className="fw-bolder">Favorites</span> without
                      logged in
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
                  backgroundColor: "lightgray",
                  fontFamily: "Roboto",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                <li>Login</li>
              </NavLink>
              <NavLink
                to="/register"
                className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
                style={{
                  height: "40px",
                  width: "100px",
                  backgroundColor: "lightgreen",
                  fontFamily: "Roboto",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                <li>Sign Up</li>
              </NavLink>
            </>
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
            to="/about"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <li title="About">
              <FaInfoCircle size={27} />
            </li>
          </NavLink>
          <NavLink
            to="/cart"
            className="d-flex justify-content-center align-items-center text-dark text-decoration-none"
          >
            <li title="Favorites">
              <FiHeart size={27} />
              {cartItemCount > 0 && (
                <CartCountBadge>{cartList.length}</CartCountBadge>
              )}
              {/* <IoMdCart size={27} /> */}
            </li>
          </NavLink>
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
            <>
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
            </>
          )}
        </NavSMlistContainer>
      </NavigationDetails>
    </HeaderContainer>
  );
};

export default Header;

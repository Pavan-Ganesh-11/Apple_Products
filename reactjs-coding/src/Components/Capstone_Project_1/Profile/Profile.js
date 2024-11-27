import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import CartContext from "../Context/CartContext";

const apiConstantStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  inProgress: "INPROGRESS",
  failure: "FAILURE",
};

const Profile = () => {
  const [loginData, setLoginData] = useState();
  const [apiStatus, setApiStatus] = useState(apiConstantStatus.initial);

  const loggedinValue = localStorage.getItem("userDetails");
  const emailValue = JSON.parse(loggedinValue).email.toLowerCase();

  // const value = useContext(CartContext);
  // const { loginDetails } = value;

  // const emailValue = loginDetails.email.toLowerCase();

  useEffect(() => {
    getLoginData();
  }, []);

  const getLoginData = async () => {
    setApiStatus(apiConstantStatus.inProgress);

    const loginUrl = `http://localhost:3000/login?email=${emailValue}`;
    const response = await axios.get(loginUrl);
    if (response.status === 200) {
      setLoginData(response.data);
      setApiStatus(apiConstantStatus.success);
    } else {
      setApiStatus(apiConstantStatus.failure);
    }
  };

  const profileSuccess = () => {
    const loginDetails = loginData[0];
    const { username } = loginDetails;

    return (
      <div className="profile-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="User"
          className="profile-img"
        />
        <h1 className="profile-name">{username}</h1>
        <p className="role">Web Developer at HCLTECH</p>
      </div>
    );
  };

  const profileLoading = () => {
    return (
      <div className="profile-failure-loading-container">
        <ThreeDots color="#3b82f6" height={40} width={40} />
      </div>
    );
  };

  const profileFailure = () => {
    return (
      <div className="profile-failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
          alt="products failure"
          className="profile-failure-img"
        />
        <h1 className="profile-failure-heading-text">
          Oops! Something Went Wrong
        </h1>
      </div>
    );
  };

  const profileSwitchData = () => {
    switch (apiStatus) {
      case apiConstantStatus.success:
        return profileSuccess();

      case apiConstantStatus.inProgress:
        return profileLoading();

      case apiConstantStatus.failure:
        return profileFailure();

      default:
        return null;
    }
  };

  return <>{profileSwitchData()}</>;
};

export default Profile;

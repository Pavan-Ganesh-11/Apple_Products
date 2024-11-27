import React, { useContext, useEffect, useState } from "react";
import "./Shipment.css";

import { GoCheckCircleFill } from "react-icons/go";
import CartContext from "../Context/CartContext";
import { Tooltip } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import EmptyCartView from "../EmptyCartView/EmptyCartView";
import EmptyShipment from "../EmptyShipment/EmptyShipment";
import { Chrono } from "react-chrono";
import ShipmentItems from "../ShipmentItems/ShipmentItems";
import Swal from "sweetalert2";
import axios from "axios";

const Shipment = () => {
  const navigate = useNavigate();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const value = useContext(CartContext);
  const { removeAllCartItem } = value;

  const [cartList, setCartList] = useState([]);
  const [username, setUsername] = useState("");

  // console.log(cartList);

  useEffect(() => {
    getCartListItems();
  }, []);

  const loggedinValue = localStorage.getItem("userDetails");
  const emailValue = JSON.parse(loggedinValue).email.toLowerCase();

  useEffect(() => {
    getLoginData();
  }, []);

  const getLoginData = async () => {
    const loginUrl = `http://localhost:3000/login?email=${emailValue}`;
    const response = await axios.get(loginUrl);
    if (response.status === 200) {
      const user = response.data[0].username;
      setUsername(user);
    }
  };

  // console.log(username);

  const getCartListItems = async () => {
    const url = `http://localhost:3000/cartList?username=${username}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      setCartList(response.data);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === null) {
      navigate("/products");
    }
  }, []);

  const onClickAllProducts = () => {
    // debugger
    // Swal.fire({
    //   title: "Are you sure you want Cancel All orders",
    //   icon: "warning",
    //   allowEscapeKey: false,
    //   confirmButtonText: "Yes",
    //   showCancelButton: true,
    //   cancelButtonText: "Cancel",
    //   confirmButtonColor: "red",
    // }).then((response) => {
    //   if (response.isConfirmed) {
    //     Swal.fire("All Orders Cancelled Successfully.", "", "success");
    //     // console.log("Cancelled");
    //   }
    // }); 
    removeAllCartItem();
  };

  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() + 3);
  const gettingDate = date.getDate();
  const Month = date.getMonth();
  const Year = date.getFullYear();
  const newDate = new Date(`${Year}-${Month}-${gettingDate}`);
  const gettingNewDate = newDate.getDate();
  const gettingNewMonth = newDate.getMonth();
  const gettingNewYear = newDate.getFullYear();
  const gettingDay = days[newDate.getDay()];
  const Time = "11:00 A.M";
  const combinedDate = `${gettingNewDate} ${gettingDay} ${gettingNewYear} ${Time}`;

  return (
    <>
      {cartList.length === 0 ? (
        <EmptyShipment />
      ) : (
        <div className="shipment-container">
          <h1 className="shipment-heading">Shipment Details</h1>
          <div className="shipment-card">
            <div className="shipment-estimation-container">
              <h1 className="shipment-delivery-estimation-heading">
                Delivery Estimation:
              </h1>
              <p className="shipment-estimation-date">{combinedDate}</p>
            </div>
            <ul className="shipment-item-details-container">
              {cartList.map((eachItem) => (
                <ShipmentItems shipmentDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
            <div className="shipment-cancel-container">
              <Tooltip title="Cancel All Orders" arrow placement="left">
                <button
                  type="button"
                  className="shipment-cancel-btn"
                  onClick={onClickAllProducts}
                >
                  Cancel
                </button>
              </Tooltip>
              <p className="shipment-cancel-desc">
                *Willing to cancel all orders
              </p>
            </div>
          </div>
          <div className="purchase-more-products-container">
            <p className="purchase-more-products-desc">
              If you want to purchase more products
            </p>
            <NavLink to="/products" className="text-decoration-none">
              <p className="purchase-products">Products</p>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Shipment;

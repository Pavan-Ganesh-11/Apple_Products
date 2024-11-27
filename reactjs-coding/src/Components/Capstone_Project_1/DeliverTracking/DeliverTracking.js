import React from "react";
import "./DeliverTracking.css";

import { GoCheckCircleFill } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import { Tooltip } from "@mui/material";

const path = require("../../../Assets/CapstoneProject/courier-icon.png");

const orderData = [
  {
    orderTitle: "Order Confirmed",
    city: "New Delhi",
  },
  {
    orderTitle: "Order Shipped",
    city: "Andhra Pradesh",
  },
  {
    orderTitle: "Order Delivered",
    city: "Rajahmundry",
  },
];

const DeliverTracking = () => {
  const trackingNumber = useParams();

  return (
    <div className="delivery-tracking-container">
      <img src={path} alt="Delivery" className="deliver-img" />
      <div className="tracking-number-container">
        <h1 className="tracking-number-title">Tracking Number:</h1>
        <p className="tracking-number">{trackingNumber.id}</p>
      </div>
      <ul className="delivery-address-container">
        {orderData.map((eachItem) => (
          <li className="delivery-address">
            <IoIosCheckmarkCircleOutline
              size={48}
              className="confirmation-icon"
            />
            <div className="delivery-title-city-container">
              <h1 className="delivery-title">{eachItem.orderTitle}</h1>
              <p className="delivery-city">{eachItem.city}</p>
            </div>
          </li>
        ))}
      </ul>
      <Tooltip title="Back to Shipment Items" arrow>
        <NavLink
          to="/cart/payment-gateway/shipment-details"
          className="text-decoration-none"
        >
          <button
            type="button"
            className="btn btn-primary back-to-shipment-btn"
          >
            Back
          </button>
        </NavLink>
      </Tooltip>
    </div>
  );
};

export default DeliverTracking;

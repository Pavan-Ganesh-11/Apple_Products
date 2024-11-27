import React from "react";
import "./EmptyShipment.css";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";

const EmptyShipment = () => {
  return (
    <div className="no-shipment-products-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        className="no-shipment-products-img"
        alt="no products"
      />
      <h1 className="no-shipment-products-heading">
        No Products Added to the Shipment
      </h1>
      <Tooltip title="Back to Products" arrow placement="bottom">
        <NavLink to="/products" className="text-decoration-none">
          <button type="button" className="no-shipment-products-btn">
            Back
          </button>
        </NavLink>
      </Tooltip>
    </div>
  );
};

export default EmptyShipment;

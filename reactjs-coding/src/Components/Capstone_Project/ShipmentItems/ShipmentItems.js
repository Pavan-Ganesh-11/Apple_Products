import React, { useContext } from "react";
import "./ShipmentItems.css";
import { Tooltip } from "@mui/material";
import CartContext from "../Context/CartContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const ShipmentItems = (props) => {
  const { shipmentDetails } = props;
  const { id, imageUrl, model, highlights, quantity, price } = shipmentDetails;

  const { removeCartItem } = useContext(CartContext);

  let orderNumber = Math.floor(Math.random() * 1000000);

  const onClickCancelOrder = (id, orderNo) => {
    Swal.fire({
      title: "Are you sure? You want Cancel order",
      text: `Order Number: ${orderNo}`,
      icon: "warning",
      allowEscapeKey: false,
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "red",
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire(
          "Order Cancelled Successfully.",
          `Order Number: ${orderNo}`,
          "success"
        );
        removeCartItem(id);
      }
    });
  };

  return (
    <li className="shipment-item">
      <NavLink to={`/cart/payment-gateway/shipment-details/${orderNumber}`}>
        <img src={imageUrl} alt={model} className="shipment-item-img" />
      </NavLink>
      <div className="shipment-product-items-container">
        <div className="shipment-items-container">
          <div className="shipment-item-heading-price-container">
            <h1 className="shipment-item-heading">{model}</h1>
            <ul className="shipment-item-specifications-container">
              {highlights.map((eachSpecification, index) => (
                <>
                  {index < 3 ? (
                    <li className="shipment-item-specification">
                      {eachSpecification.item}
                    </li>
                  ) : null}
                </>
              ))}
            </ul>
          </div>
          <p className="shipment-quantity-name">
            Qty:
            <span className="shipment-quantity">{quantity}</span>
          </p>
        </div>
        <div className="order-and-shipment-btn">
          <div className="shipment-order-container">
            <p className="order-name">Order Number:</p>
            <p className="order-number">{orderNumber}</p>
          </div>
          <div className="shipment-button-container">
            <Tooltip title="Cancel Order" arrow>
              <button
                type="button"
                className="cancel-shipment-item-btn"
                onClick={() => onClickCancelOrder(id, orderNumber)}
              >
                Cancel
              </button>
            </Tooltip>
            <Tooltip title="Track your order" arrow>
              <NavLink
                to={`/cart/payment-gateway/shipment-details/${orderNumber}`}
              >
                <button
                  type="button"
                  className="tracking-order-shipment-item-btn btn btn-primary"
                >
                  Tracking Order
                </button>
              </NavLink>
            </Tooltip>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ShipmentItems;

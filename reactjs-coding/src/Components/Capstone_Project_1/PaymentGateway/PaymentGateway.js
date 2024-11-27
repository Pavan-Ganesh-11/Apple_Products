import React, { useState } from "react";
import "./PaymentGateway.css";

import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";
import { Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";
import PaymentTabItem from "../PaymentTabItem/PaymentTabItem";
import CreditCardPayment from "../CreditCardPayment/CreditCardPayment";
import NetbankingPayment from "../NetbankingPayment/NetbankingPayment";
import UPIPayment from "../UPIPayment/UPIPayment";

const tabList = [
  {
    tabId: "CREDIT_CARD",
    display: "Credit Card",
  },
  {
    tabId: "NETBANKING",
    display: "Net Banking",
  },
  {
    tabId: "UPI",
    display: "UPI",
  },
];

const PaymentGateway = () => {
  const [activeTabId, setActiveTabId] = useState(tabList[0].tabId);

  const onClickTabItem = (tabId) => {
    setActiveTabId(tabId);
  };

  return (
    <div>
      <h1 className="payment-gateway-main-heading">Payment Gateway</h1>
      <div className="payment-gateway-card-container">
        <Tooltip title="Back" placement="left" arrow>
          <NavLink to="/cart" className="arrow-icon-container">
            <FaArrowLeft color="lightgrey" size={20} className="arrow-icon" />
          </NavLink>
        </Tooltip>
        <ul className="tab-container">
          {tabList.map((eachItem) => (
            <PaymentTabItem
              tabDetails={eachItem}
              onClickTabItem={onClickTabItem}
              isActive={eachItem.tabId === activeTabId}
            />
          ))}
        </ul>
        {activeTabId === "CREDIT_CARD" && <CreditCardPayment />}
        {activeTabId === "NETBANKING" && <NetbankingPayment />}
        {activeTabId === "UPI" && <UPIPayment />}
      </div>
    </div>
  );
};

export default PaymentGateway;

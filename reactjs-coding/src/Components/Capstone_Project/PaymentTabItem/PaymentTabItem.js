import React from "react";
import "./PaymentTabItem.css";

const PaymentTabItem = (props) => {
  const { tabDetails, onClickTabItem, isActive } = props;
  const { tabId, display } = tabDetails;

  const onClickTab = () => {
    onClickTabItem(tabId);
  };

  const active = isActive ? "active-tab" : "";

  return (
    <li className="tab-list-container">
      <button
        type="button"
        className={`tab-btn ${active}`}
        onClick={onClickTab}
      >
        {display}
      </button>
    </li>
  );
};

export default PaymentTabItem;

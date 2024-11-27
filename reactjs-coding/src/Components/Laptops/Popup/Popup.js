import React from "react";
import "./Popup.css";
import { FaCheck } from "react-icons/fa";

const Popup = (props) => {
  const { laptopName, booleanValue } = props;

  return (
    <>
      {booleanValue && (
        <div className={`popup-container`}>
          <div className="card-container">
            <FaCheck color="green" size={25} />
            <span>{laptopName}</span>
            <p className="popup-desc">item successfully Added To Cart</p>
          </div>
          <p className="bottom-animation"></p>
        </div>
      )}
    </>
  );
};

export default Popup;

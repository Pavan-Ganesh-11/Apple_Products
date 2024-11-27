import React from "react";
import "./TimedOut.css";

import { PiWarningCircleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";

const TimedOut = () => {
  return (
    <div className="timedout-container">
      <div className="timedout-card-container">
        <h1 className="timedout-heading">
          <PiWarningCircleFill color="#92a4ae" size={35} />
          Timed Out
        </h1>
        <p className="timedout-desc">Please Try Again</p>
        <NavLink to="/cart" className="text-decoration-none">
          <Tooltip title="Back" placement="bottom" arrow>
            <button type="button" className="timedout-btn">
              Back
            </button>
          </Tooltip>
        </NavLink>
      </div>
    </div>
  );
};

export default TimedOut;

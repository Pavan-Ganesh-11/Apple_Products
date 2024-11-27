import React from "react";
import "./RightSideBar.css";

const RightSideBar = () => {
  return (
    <div className="right-side-bar-container">
      <h1 className="rightsidebar-heading">on this page</h1>
      <ul className="rightsidebar-list-container">
        <button type="button" className="rightsidebar-btn">
          <a href="#head" className="right-side-bar-link">
            <li className="right-side-li">Overview</li>
          </a>
        </button>
        <button type="button" className="rightsidebar-btn">
          <a href="#bottom" className="right-side-bar-link">
            <li className="right-side-li">Creating and nesting components</li>
          </a>
        </button>
      </ul>
    </div>
  );
};

export default RightSideBar;

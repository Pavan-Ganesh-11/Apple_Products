import React from "react";
import "./SideBar.css";
import { FaChevronRight } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="main-content-container">
      <div className="side-bar-content-container">
        <div>
          <h1 className="side-bar-heading">Get Started</h1>
          <ul className="side-bar-list-container">
            <button type="button" className="side-bar-btn">
              <li className="side-bar-list">
                <a className="side-bar-list-link">
                  Quick Start{" "}
                  <FaChevronRight className="side-bar-chevron-icon" />
                </a>
              </li>
            </button>
            <button type="button" className="side-bar-btn">
              <li className="side-bar-list">
                <a className="side-bar-list-link">
                  Installation{" "}
                  <FaChevronRight className="side-bar-chevron-icon" />
                </a>
              </li>
            </button>
          </ul>
          <hr className="sidebar-hr" />
          <h1 className="side-bar-heading-learn-react">Learn React</h1>
          <ul className="side-bar-learn-react-list-container">
            <button type="button" className="side-bar-btn">
              <li className="side-bar-list">
                <a className="side-bar-list-link">
                  Describing the UI
                  <FaChevronRight className="side-bar-chevron-icon" />
                </a>
              </li>
            </button>
            <button type="button" className="side-bar-btn">
              <li className="side-bar-list">
                <a className="side-bar-list-link">
                  Adding Interactivity
                  <FaChevronRight className="side-bar-chevron-icon" />
                </a>
              </li>
            </button>
            <button type="button" className="side-bar-btn">
              <li className="side-bar-list">
                <a className="side-bar-list-link">
                  Managing State
                  <FaChevronRight className="side-bar-chevron-icon" />
                </a>
              </li>
            </button>
            <button type="button" className="side-bar-btn">
              <li className="side-bar-list">
                <a className="side-bar-list-link">
                  Escape Hatches
                  <FaChevronRight className="side-bar-chevron-icon" />
                </a>
              </li>
            </button>
          </ul>
        </div>
      </div>
      <div className="side-bar-card">
        <h1 className="side-bar-card-heading">Is this page useful?</h1>
        <div className="side-bar-btn-container">
          <button type="button" className="sidebar-like-btn">
            <BiLike className="like-icon" />
          </button>
          <button type="button" className="sidebar-dislike-btn">
            <BiDislike className="dislike-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

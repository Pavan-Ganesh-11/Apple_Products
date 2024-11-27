import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./MainContent.css";

const Content = () => {
  return (
    <div id="head" className="middle-content-main-container">
      <div className="middle-content-link-container">
        <a className="middle-content-learn-react">
          Learn React
          <FaChevronRight className="middle-content-chevron-right" />
        </a>
      </div>
      <div className="middle-content-container">
        <h1 className="middle-content-main-heading">Quick Start</h1>
        <p className="middle-content-main-para">
          Welcome to the React documentation! This page will give you an
          introduction to the 80% of React concepts that you will use on a daily
          basis.
        </p>
        <div className="middle-content-card">
          <h1 className="middle-content-card-heading">You will learn</h1>
          <ul className="middle-content-card-list-container">
            <li className="middle-content-li">
              How to create and nest components
            </li>
            <li className="middle-content-li">How to add markup and styles</li>
            <li className="middle-content-li">How to display data</li>
            <li className="middle-content-li">
              How to render conditions and lists
            </li>
            <li className="middle-content-li">
              How to respond to events and update the screen
            </li>
            <li className="middle-content-li">
              How to share data between components
            </li>
          </ul>
        </div>
      </div>
      <div id="bottom" className="middle-content-2">
        <h1 className="middle-content-2-heading">
          Creating and nesting components
        </h1>
        <p className="middle-content-2-desc">
          React apps are made out of components. A component is a piece of the
          UI (user interface) that has its own logic and appearance. A component
          can be as small as a button, or as large as an entire page.
        </p>
        <p className="middle-content-2-desc-2">
          React components are JavaScript functions that return markup:
        </p>
        <pre className="middle-content-card-2">
          <span className="keyword">function</span>
          <span className="function_name"> MyButton</span>
          <span className="punctuations">{"("}</span>
          <span className="punctuations">{") "}</span>
          <span className="punctuations">{"{"}</span>
          <pre className="middle-content-code">
            <span className="return">return </span>
            <span className="punctuation">{"("}</span>
            <pre className="tag-container">
              <span className="tag">{"<button>"}</span>
              <span className="desc">I'm a button</span>
              <span className="tag">{"</button>"}</span>
            </pre>
            <span className="punctuation">{");"}</span>
          </pre>
          <span className="punctuations">{"}"}</span>
        </pre>
      </div>
    </div>
  );
};

export default Content;

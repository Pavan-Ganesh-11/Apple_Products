import React from "react";
import SideBar from "../SideBar/SideBar";
import MainContent from "../MiddleContent/MainContent";
import "./Content.css";
import Footer from "../Footer/Footer";
import RightSideBar from "../RightSideBar/RightSideBar";

const Content = () => {
  return (
    <div className="content-container">
      <SideBar />
      <MainContent />
      <RightSideBar />
      {/* <Footer /> */}
    </div>
  );
};

export default Content;

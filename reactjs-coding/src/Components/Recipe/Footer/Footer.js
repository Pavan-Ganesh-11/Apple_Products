import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  return (
    <div className="footer-container">
      {/* <img src="" alt="" className="" /> */}
      <h1 className="footer-heading">Pavan</h1>
      <div className="copyright-container">
        <FaRegCopyright color="#959ead" size={15} />
        <p className="footer-copyright">{date.getFullYear()} Recipe, All Rights Reserved</p>
      </div>
      <h1 className="footer-mail">pavan@recipe.com</h1>
      <p className="footer-address">123 Benz circle, Vijayawada, India.</p>
    </div>
  );
};

export default Footer;

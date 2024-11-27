import React from "react";
import "./Footer.css";
import { BiSolidCopyright } from "react-icons/bi";
import { MdCopyright } from "react-icons/md";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer-container">
      <h1 className="footer-heading">Pavan</h1>
      <div className="">
        <p className="copyright">
          <MdCopyright className="footer-copyright" />
          Copyright {date.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import "./Footer.css";
import {
  FooterAddress,
  FooterContainer,
  FooterCopyright,
  CopyrightContainer,
  FooterHeading,
  FooterMail,
} from "./StyledComponent";

const Footer = () => {
  let date = new Date();

  return (
    <FooterContainer>
      <FooterHeading>Pavan</FooterHeading>
      <CopyrightContainer>
        <FaRegCopyright color="#959ead" size={15} />
        <FooterCopyright>
          {date.getFullYear()} Recipe, All Rights Reserved
        </FooterCopyright>
      </CopyrightContainer>
      <FooterMail>pavan@ecommerce.com</FooterMail>
      <FooterAddress>123 Benz circle, Vijayawada, India.</FooterAddress>
    </FooterContainer>
  );
};

export default Footer;

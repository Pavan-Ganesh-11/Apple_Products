import styled from "styled-components";
import img from "../../../Assets/Login/bg.jpg";

export const LoginContainer = styled.div`
  min-height: 100vh;
  font-family: "Roboto";
  // background-color: rgb(235, 235, 235);
  background-image: url(${img}) !important;
  background-size: cover;
`;

export const LoginHeading = styled.h1`
  font-family: "Lucida Calligraphy";
  font-size: 36px;
  backdrop-filter: blur(25px);
  padding: 10px 20px;
  border-radius: 12px 12px 0px 0px !important;
  margin-bottom: 0;
  border: 1px solid #fff;
  border-bottom: 0;

  @media screen and (max-width: 576px) {
    border: 0;
    padding: 0;
    padding-bottom: 15px;
  }
`;

export const Row = styled.div`
  min-height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30% !important;
  border: 0;
  border-radius: 20px;
  // box-shadow: 0 0 20px 2px #fff;
  border: 1px solid #fff;
  padding: 60px;
  min-width: 360px !important;
  background: transparent;
  backdrop-filter: blur(25px);

  @media screen and (max-width: 767px) {
    padding: 50px;
    width: 75% !important;
  }
`;

export const LoginLabel = styled.label`
  font-size: 15px !important;
  margin-bottom: 2px !important;
  font-family: "Bree Serif" !important;
  font-weight: 700;
`;

export const LoginInput = styled.input`
  width: 100% !important;
  font-family: "Roboto";
  font-weight: lighter;
  font-size: 14px;
  height: 30px;
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #fff;
  outline: none;
  color: #fff;

  &::placeholder {
    font-size: 14px;
    // font-family: sans-serif;
    font-family: "Roboto";
    color: #fff;
  }

  @media screen and (max-width: 767px) {
    width: 100% !important;
  }
`;

export const CheckBoxInput = styled.input`
  height: 14px !important;
  width: 14px !important;
`;

export const ForgotPasswordLink = styled.a`
  text-decoration: none;
  font-size: 15px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  &:hover {
    // text-decoration: underline;
  }
`;

export const LoginRequiredField = styled.span`
  color: red;
`;

export const LoginErrorMsg = styled.p`
  font-size: 13px;
  color: red;
  margin-bottom: 0;
  margin-top: 2px;
  font-weight: 500;
`;

export const LoginBtn = styled.button`
  font-family: "Lucida Calligraphy";
  letter-spacing: 1px;

  &:active {
    transform: translateY(2px);
  }
`;

export const SignUpBtn = styled.button`
  font-family: "Roboto";
  width: 120px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: deepskyblue;
  padding: 8px;
  color: #000;

  &:hover {
    box-shadow: 0 0 10px 1px #aaa;
  }
`;

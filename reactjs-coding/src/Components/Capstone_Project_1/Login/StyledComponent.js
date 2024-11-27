import styled from "styled-components";
// import img from "../../../Assets/CapstoneProject/Login.avif";
import img from "../../../Assets/CapstoneProject/Login_BG.jpg";

export const LoginContainer = styled.div`
  min-height: 100vh;
  font-family: "Roboto";
  // background-color: rgb(235, 235, 235);
  // background: linear-gradient(to right, #f97794, #623aa2, #111111);
  // background: linear-gradient(to left, #5c7c89, #1F4959);
  // background: linear-gradient(to right, #0c0014, #117aca);
  background-image: url(${img}) !important;
  background-size: cover;
  background-position: center;
`;

export const LoginHeading = styled.h1`
  font-family: "Lucida Calligraphy";
  font-size: 36px;
  backdrop-filter: blur(25px);
  padding: 15px 20px;

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
  box-shadow: 0 0 10px 1px #eee;
  // box-shadow: 0 0 20px 2px #c7c7c7;
  // border: 1px solid #fff;
  padding: 60px;
  min-width: 360px !important;
  background: transparent;
  backdrop-filter: blur(15px);
  color: lightgray;
  // background-color: rgb(0, 0, 0, 0.5);

  @media screen and (max-width: 767px) {
    padding: 50px;
    width: 75% !important;
  }
`;

export const LoginLabel = styled.label`
  font-size: 15px !important;
  margin-bottom: 1px !important;
  font-family: "Times New Roman";
  color: rgb(226, 226, 226);
`;

export const LoginInput = styled.input`
  width: 100% !important;
  font-family: "Roboto";
  font-weight: lighter;
  height: 40px;
  width: 100%;
  border: 0;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  outline: none;
  color: #fff;
  font-size: 14px;

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

export const ShowPasswordLabel = styled.label`
  ont-size: 15px !important;
  margin-bottom: 2px !important;
  font-family: "Roboto" !important;
  font-weight: 700;
  font-size: 14px;
  margin-top: 1px;
`;

export const CheckBoxInput = styled.input`
  height: 14px !important;
  width: 14px !important;
`;

export const ForgotPasswordLink = styled.p`
  text-decoration: none;
  font-size: 14px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: lightgray !important;
  margin-bottom: 1px;

  &:hover {
    text-decoration: none;
    color: aqua !important;
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
  font-family: "Lucida Calligraphy" !important;
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
  // background-color: deepskyblue;
  background-color: #fff;
  padding: 8px;
  color: #000;

  &:hover {
  color: #000;
  background-color: aqua;
    box-shadow: 0 0 10px 1px #aaa;
  }
`;

import styled from "styled-components";
import img from "../../../Assets/CapstoneProject/Login_BG.jpg";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  font-family: "Roboto";
  background-image: url(${img}) !important;
`;

export const RegisterHeading = styled.h1`
  font-family: "Lucida Calligraphy";

  @media screen and (max-width: 767px) {
    .register-heading {
      font-size: 30px;
    }
  }
`;

export const Row = styled.div`
  min-height: 100vh;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30% !important;
  /* border: 1px solid #eee; */
  border: 0;
  border-radius: 20px;
  box-shadow: 0 0 20px 2px #aaa;
  padding: 50px 60px;
  /* height: 490px; */
  min-width: 390px !important;

  @media screen and (max-width: 767px) {
    .form-container {
      padding: 40px !important;
      width: 80% !important;
    }
  }
`;

export const RegisterLabel = styled.label`
  font-size: 15px !important;
  margin-bottom: 1px !important;
  font-family: "Bree Serif" !important;
  font-weight: 700;
`;

export const RegisterInput = styled.input`
  width: 280px !important;
  font-family: "Roboto";
  font-weight: lighter;
  font-size: 14px;
  height: 38px;

  &::placeholder {
    font-size: 15px;
  }

  @media screen and (max-width: 767px) {
    width: 100% !important;
  }
`;

export const RegisterRequiredField = styled.span`
  color: red;
`;

export const RegisterErrorMsg = styled.p`
  font-size: 13px;
  color: red;
  margin-bottom: 0;
  margin-top: 2px;
`;

export const RegisterBtn = styled.button`
  font-family: "Lucida Calligraphy" !important;
  letter-spacing: 1px;

  &:active {
    transform: translateY(2px);
  }
`;

export const LoginBtn = styled.button`
  font-family: "Roboto";
  width: 110px;
  border-radius: 6px !important;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 0 10px 1px #aaa;
  }
`;

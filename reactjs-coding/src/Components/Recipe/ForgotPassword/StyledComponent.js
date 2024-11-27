import styled from "styled-components";

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Roboto";
  background-color: rgb(242, 249, 255);
`;

export const ProjectLogo = styled.h1`
  font-size: 36px;
  font-family: "Lucida Calligraphy";
  letter-spacing: 1px;
`;

export const FormForgotPassword = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Roboto";
  border-radius: 16px;
  // box-shadow: 0 0 15px 2px #ccc;
  border: 1px solid #ddd;
  width: 450px;
  padding: 45px 50px;
  background-color: #fff;
`;

export const ForgotPasswordHeading = styled.h1`
  font-size: 26px;
  font-family: "Lucida Calligraphy";
  letter-spacing: 1px;
  margin-bottom: 0;
`;

export const ChevronButton = styled.button`
  height: 40px;
  color: #fff;
  background-color: transparent;
  // font-weight: 600;
  border: 0;
  align-self: center;
  font-size: 16px;
`;

export const ForgotPasswordInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
`;

export const ForgotPasswordLabel = styled.label`
  font-weight: 700;
  font-family: "Bree Serif" !important;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ForgotPasswordInput = styled.input`
  height: 40px;
  width: 100%;
  font-family: "Roboto";
`;

export const SendEmailButton = styled.button`
  height: 40px;
  color: #fff;
  font-family: "Lucida Calligraphy";
  letter-spacing: 1px;
  width: 100%;
  font-weight: 600;
  border-radius: 6px;
  border: 0;
  align-self: center;
  font-size: 16px;
  margin-top: 5px;
`;

export const OTPRequiredField = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;

export const ForgotPasswordRequiredField = styled.span`
  color: red;
`;

export const ForgotPasswordErrorMsg = styled.p`
  font-size: 14px;
  color: red;
  margin-bottom: 0;
  margin-top: 3px;
  font-weight: 500; 
`;
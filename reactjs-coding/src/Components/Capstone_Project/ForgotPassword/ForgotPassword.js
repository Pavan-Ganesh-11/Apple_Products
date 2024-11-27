import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FaChevronLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OTP from "../OTP/OTP";
import { ForgotPasswordContainer } from "./StyledComponent";
import { ProjectLogo } from "./StyledComponent";
import { ChevronButton } from "./StyledComponent";
import { ForgotPasswordHeading } from "./StyledComponent";
import { ForgotPasswordInputContainer } from "./StyledComponent";
import { ForgotPasswordInput } from "./StyledComponent";
import { SendEmailButton } from "./StyledComponent";
import { ForgotPasswordLabel } from "./StyledComponent";
import { ForgotPasswordRequiredField } from "./StyledComponent";
import { FormForgotPassword } from "./StyledComponent";
import { ForgotPasswordErrorMsg } from "./StyledComponent";
import Passwords from "../Passwords/Passwords";

const Login = () => {
  const navigate = useNavigate();
  const [forgotPasswordStatus, setForgotPasswordStatus] = useState(true);
  const [loginData, setLoginData] = useState("");
  const [loginRetrievedData, setLoginRetrievedData] = useState([]);
  const [passwordsStatus, setPasswordsStatus] = useState(false);
  const [findLoginData, setFindLoginData] = useState();

  const [otpData, setOtpData] = useState([]);

  useEffect(() => {
    const OTPDetails = async () => {
      const otpUrl = "http://localhost:3000/OTP";
      const options = {
        method: "GET",
      };
      const response = await fetch(otpUrl, options);
      if (response.ok) {
        const fetchedData = await response.json();
        setOtpData(fetchedData);
      }
    };
    OTPDetails();
  });

  useEffect(() => {
    fetchLoginData();
  }, []);

  const fetchLoginData = async () => {
    const forgotUrl = "http://localhost:3000/login";
    const options = {
      method: "GET",
    };
    const response = await fetch(forgotUrl, options);
    if (response.ok) {
      const loginDetails = await response.json();
      setLoginRetrievedData(loginDetails);
    }
  };

  const loginValues = {
    email: "",
  };

  const forgotForm = useForm(loginValues);
  const { register, control, handleSubmit, formState } = forgotForm;
  const { errors } = formState;

  const submitLoginStatus = (boolean) => {
    setForgotPasswordStatus(boolean);
  };

  const onSubmitOTP = (otp) => {
    if (otpData.otp === otp) {
      console.log("Login Successful - ", otp);
      setPasswordsStatus(true);
    } else {
      setPasswordsStatus(false);
      toast.error("Invalid OTP", {
        position: "top-center",
      });
    }
    // navigate("/Login");
  };

  let loginObject;

  const onSubmitForgotPasswordData = async (data) => {
    const { email } = data;

    // const loginObject = loginRetrievedData.find(each => each.email === email);
    loginObject = await loginRetrievedData.find(
      (each) => each.email.toLowerCase() === email.toLowerCase()
    );

    if (loginObject === undefined) {
      toast.error("Invalid Email");
    } else if (loginObject.email.toLowerCase().includes(email.toLowerCase())) {
      setLoginData(data);
      setForgotPasswordStatus(false);
      setFindLoginData(loginObject);
    } else {
      toast.error("Invalid Email");
      navigate("/forgot-password");
    }
  };

  const onClickChevron = () => {
    submitLoginStatus(true);
  };

  return (
    <>
      {forgotPasswordStatus ? (
        <ForgotPasswordContainer>
          <ProjectLogo className="mb-3">Pavan</ProjectLogo>
          <FormForgotPassword
            onSubmit={handleSubmit(onSubmitForgotPasswordData)}
          >
            <div className="d-flex justify-content-start align-items-center w-100 mb-3">
              <NavLink to="/login">
                <ChevronButton type="button">
                  <FaChevronLeft
                    color="#fff"
                    size={20}
                    className="justify-content-start"
                  />
                </ChevronButton>
              </NavLink>
              <ForgotPasswordHeading className="text-light w-100 text-center mt-1">
                Forgot Password
              </ForgotPasswordHeading>
            </div>
            {/* <ForgotPasswordInputContainer> */}
              <ForgotPasswordLabel htmlFor="forgotEmail">
                Email
                <ForgotPasswordRequiredField>*</ForgotPasswordRequiredField>
              </ForgotPasswordLabel>
              <ForgotPasswordInput
                type="text"
                id="forgotEmail"
                placeholder="Email"
                {...register("email", {
                  required: "*Required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "*Enter a valid Email",
                  },
                })}
              />
              {control.getFieldState("email").isTouched && (
                <ForgotPasswordErrorMsg>
                  {errors.email?.message}
                </ForgotPasswordErrorMsg>
              )}
            {/* </ForgotPasswordInputContainer> */}
            <SendEmailButton type="submit" className="mt-4 btn btn-light">
              Send
            </SendEmailButton>
          </FormForgotPassword>
          {/* <ToastContainer position="top-center" pauseOnHover={false} /> */}
        </ForgotPasswordContainer>
      ) : (
        <OTP
          onSubmitOTP={onSubmitOTP}
          submitLoginStatus={submitLoginStatus}
          loginCred={loginData}
          passwordsStatus={passwordsStatus}
          loginDetails={findLoginData}
        />
      )}
    </>
  );
};

export default Login;

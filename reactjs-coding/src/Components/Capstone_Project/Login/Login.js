import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CheckBoxInput,
  ForgotPasswordLink,
  LoginBtn,
  LoginContainer,
  LoginErrorMsg,
  LoginForm,
  LoginHeading,
  LoginInput,
  LoginLabel,
  LoginRequiredField,
  LoginToRegisterLinkContainer,
  Row,
  ShowPasswordLabel,
  SignUpBtn,
} from "./StyledComponent";
import axios from "axios";
import CartContext from "../Context/CartContext";

const Login = () => {
  const inputRef = useRef([]);
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);
  const [loginData, setLoginData] = useState([]);

  const value = useContext(CartContext);
  const { addLoginDetails } = value;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    fetchLoginData();
  }, []);

  const fetchLoginData = async () => {
    const loginUrl = "http://localhost:3000/login";
    // const options = {
    //   method: "GET",
    // };
    const response = await axios.get(loginUrl);
    console.log(response.data);
    if (response.status === 200) {
      // const loginDetails = await response.json();
      setLoginData(response.data);
    }
  };

  const loginValues = {
    email: "",
    password: "",
  };

  const loginForm = useForm(loginValues);
  const { register, control, handleSubmit, formState } = loginForm;
  const { errors } = formState;

  const onCheckShowPassword = (e) => {
    setChecked((prevState) => !prevState);
  };

  const onSubmitLoginForm = async (data) => {
    const { email, password } = data;
    console.log(loginData);

    const loginDataObject = await loginData.find(
      (each) => each.email.toLowerCase() === email.toLowerCase()
    );

    if (loginDataObject === undefined) {
      toast.error("Invalid Email", {
        position: "top-center",
      });
    } else if (loginDataObject.email.toLowerCase() !== email.toLowerCase()) {
      toast.error("Invalid Email", {
        position: "top-center",
      });
    } else if (loginDataObject.password !== password) {
      toast.error("Invalid Password", {
        position: "top-center",
      });
    } else if (
      loginDataObject.email.toLowerCase().includes(email.toLowerCase()) &&
      loginDataObject.password.includes(password)
    ) {
      localStorage.setItem("userDetails", JSON.stringify(data));
      addLoginDetails(data);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("cartList", []);
      localStorage.setItem("favoriteList", []);
      toast.success("Login Successful..!!", {
        position: "bottom-center",
      });
      navigate("/");
    }
  };

  return (
    <>
      <LoginContainer>
        <div className="container d-flex flex-column justify-content-center">
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <LoginHeading className="text-white text-center fst-italic">
              Login
            </LoginHeading>
            <LoginForm onSubmit={handleSubmit(onSubmitLoginForm)}>
              <div className="mb-3 w-100">
                <LoginLabel
                  htmlFor="loginEmail"
                  ref={inputRef}
                  className="form-label"
                >
                  Email<LoginRequiredField>*</LoginRequiredField>
                </LoginLabel>
                <LoginInput
                  type="text"
                  className="login-input"
                  id="loginEmail"
                  placeholder="Email"
                  {...register("email", {
                    required: "*Required",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "*Enter valid Email id",
                    },
                  })}
                />
                {control.getFieldState("email").isTouched && (
                  <>
                    <LoginErrorMsg>{errors.email?.message}</LoginErrorMsg>
                  </>
                )}
              </div>
              <div className="mb-3 w-100">
                <LoginLabel htmlFor="loginPassword" className="form-label">
                  Password<LoginRequiredField>*</LoginRequiredField>
                </LoginLabel>
                {isChecked ? (
                  <LoginInput
                    type="text"
                    className="login-input"
                    id="loginPassword"
                    placeholder="Password"
                    {...register("password", {
                      required: "*Required",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                        message: "*Enter valid password",
                      },
                    })}
                  />
                ) : (
                  <LoginInput
                    type="password"
                    className="login-input"
                    id="loginPassword"
                    placeholder="Password"
                    {...register("password", {
                      required: "*Required",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                        message: "*Enter valid password",
                      },
                    })}
                  />
                )}
                {control.getFieldState("password").isTouched && (
                  <LoginErrorMsg>{errors.password?.message}</LoginErrorMsg>
                )}
              </div>
              <div className="w-100 d-flex justify-content-space-between align-items-center">
                <div className="d-flex justify-content-start align-items-center gap-1 w-100">
                  <CheckBoxInput
                    type="checkbox"
                    id="login-remember-me"
                    onChange={(e) => onCheckShowPassword(e)}
                    value={isChecked}
                  />
                  <ShowPasswordLabel
                    htmlFor="login-remember-me"
                    className="text-white"
                  >
                    Show Password
                  </ShowPasswordLabel>
                </div>
                <NavLink to="/forgot-password" className="text-decoration-none w-100">
                  <ForgotPasswordLink>Forgot Password</ForgotPasswordLink>
                </NavLink>
              </div>
              <LoginBtn type="submit" className="btn btn-light w-100 mt-3">
                Login
              </LoginBtn>
            </LoginForm>
            <p className="text-white text-center mt-3">
              Don't have an account?
            </p>
            <NavLink
              to="/register"
              className="text-decoration-none text-white d-flex justify-content-center align-items-center"
            >
              <SignUpBtn type="button">Sign up</SignUpBtn>
            </NavLink>
            <DevTool control={control} />
          </Row>
        </div>
      </LoginContainer>
      {/* <ToastContainer position="top-center" pauseOnHover={false} /> */}
    </>
  );
};

export default Login;

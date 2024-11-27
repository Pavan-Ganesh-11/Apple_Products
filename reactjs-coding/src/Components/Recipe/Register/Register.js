import React, { useState } from "react";
import "./Register.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  const [comparePassword, setComparePassword] = useState(false);
  const [showPassword, setshowPassword] = useState(false);

  const navigate = useNavigate();

  let formDetails = {
    username: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  };

  const registerForm = useForm(formDetails);
  const { register, control, handleSubmit, formState } = registerForm;
  const { errors } = formState;
  // console.log(errors.email?.message)
  // const { name, ref, onChange, onBlur } = register("username");

  const onSubmitRegisterForm = async (data) => {
    console.log(data);

    const { password, confirmPassword } = data;

    if (password.includes(confirmPassword)) {
      setComparePassword(true);
      const loginUrl = "http://localhost:3000/login";
      const options = {
        method: "POST",
        body: JSON.stringify(data),
      };
      const response = await fetch(loginUrl, options);
      console.log(response);
      navigate("/login");
    } else {
      setComparePassword(false);
    }
  };

  const onChangeShowPassword = () => {
    setshowPassword((prevState) => !prevState);
  };

  return (
    <div className="register-container">
      <div className="container d-flex flex-column justify-content-center">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h1 className="register-heading mb-3 text-white fw-light fst-italic text-center">
            Register
          </h1>
          <form
            className="register-form-container"
            onSubmit={handleSubmit(onSubmitRegisterForm)}
          >
            <div className="register-input-container mb-3 w-100">
              <label
                htmlFor="registerUser"
                className="form-label register-label"
              >
                Username<span className="register-required-field">*</span>
              </label>
              <input
                type="text"
                className="register-input"
                autoComplete="off"
                id="registerUser"
                placeholder="Username"
                {...register("username", {
                  required: "*Required",
                })}
              />
              {control.getFieldState("username").isTouched && (
                <>
                  <p className="register-error-msg">
                    {errors.username?.message}
                  </p>
                </>
              )}
            </div>
            <div className="register-input-container mb-3 w-100">
              <label
                htmlFor="registerEmail"
                className="form-label register-label"
              >
                Email<span className="register-required-field">*</span>
              </label>
              <input
                type="text"
                className="register-input"
                autoComplete="off"
                id="registerEmail"
                placeholder="Email"
                {...register("email", {
                  required: "*Required",
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "*Enter a valid Email id",
                  },
                })}
              />
              {control.getFieldState("email").isTouched && (
                <p className="register-error-msg">{errors.email?.message}</p>
              )}
            </div>
            <div className="register-input-container mb-3 w-100">
              <label
                htmlFor="registeMobileNO"
                className="form-label register-label"
              >
                Mobile Number<span className="register-required-field">*</span>
              </label>
              <input
                type="text"
                className="register-input"
                autoComplete="off"
                id="registeMobileNO"
                placeholder="Mobile Number"
                maxLength={10}
                {...register("mobileNo", {
                  required: "*Required",
                  pattern: {
                    value: /^\d{10}$/g,
                    message: "*Enter a valid Mobile Number",
                  },
                })}
              />
              {control.getFieldState("mobileNo").isTouched && (
                <p className="register-error-msg">{errors.mobileNo?.message}</p>
              )}
            </div>
            <div className="register-input-container mb-3 w-100">
              <label
                htmlFor="registerPassword"
                className="form-label register-label"
              >
                Password<span className="register-required-field">*</span>
              </label>
              {showPassword ? (
                <input
                  type="text"
                  className="register-input"
                  id="registerPassword"
                  placeholder="Password"
                  {...register("password", {
                    required: "*Required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message: "*Enter a valid Password",
                    },
                  })}
                />
              ) : (
                <input
                  type="password"
                  className="register-input"
                  id="registerPassword"
                  placeholder="Password"
                  {...register("password", {
                    required: "*Required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message: "*Enter a valid Password",
                    },
                  })}
                />
              )}
              {control.getFieldState("password").isTouched && (
                <p className="register-error-msg">{errors.password?.message}</p>
              )}
            </div>
            <div className="register-input-container mb-3 w-100">
              <label
                htmlFor="registerConfirmPassword"
                className="form-label register-label"
              >
                Confirm Password
                <span className="register-required-field">*</span>
              </label>
              {showPassword ? (
                <input
                  type="text"
                  className="register-input"
                  id="registerConfirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "*Required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message: "*Enter a valid Password",
                    },
                  })}
                />
              ) : (
                <input
                  type="password"
                  className="register-input"
                  id="registerConfirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "*Required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message: "*Enter a valid Password",
                    },
                  })}
                />
              )}
              {control.getFieldState("confirmPassword").isTouched && (
                <>
                  <p className="register-error-msg">
                    {errors.confirmPassword?.message}
                  </p>
                  {!comparePassword && (
                    <p className="register-error-msg">
                      *Passwords must be same
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="register-checkbox-container mb-2">
              <input
                id="register-checkbox"
                type="checkbox"
                className="register-checkbox"
                onChange={() => onChangeShowPassword()}
                value={showPassword}
              />
              <label
                htmlFor="register-checkbox"
                className="register-checkbox-label fw-bolder"
              >
                Show Passwords
              </label>
            </div>
            <button
              type="submit"
              className="register-btn btn btn-secondary mt-2 w-100"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-3 text-white">
            I already have an account
          </p>
          <NavLink to="/login" className="register-to-login-link-container">
            <button type="button" className="register-to-login-btn">
              Login
            </button>
          </NavLink>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default Register;

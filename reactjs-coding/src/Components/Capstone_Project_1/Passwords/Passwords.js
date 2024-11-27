import React, { useEffect, useRef, useState } from "react";
import "./Passwords.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Passwords = (props) => {
  let { loginCredentails } = props;
  const { id, username, email, password, confirmPassword } = loginCredentails;

  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  const [comparePassword, setComparePassword] = useState(false);
  const [loginData, setLoginData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [toggleLoginBtn, setToggleLoginBtn] = useState(false);

  const passwordRef = useRef(null);

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }

    fetchedData();
  }, []);

  const fetchedData = async () => {
    const loginFetchUrl = `http://localhost:3000/login/${id}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(loginFetchUrl, options);
    if (response.ok) {
      const retrievedData = await response.json();
      setLoginData(retrievedData);
    }
  };

  const navigate = useNavigate();

  let formDetails = {
    newPassword: "",
    confirmPassword: "",
  };

  const passwordForm = useForm(formDetails);
  const { register, control, handleSubmit, formState } = passwordForm;
  const { errors } = formState;
  // console.log(errors.email?.message)
  // const { name, ref, onChange, onBlur } = password("username");

  const onChangeShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmitPasswordsForm = async (data) => {
    const { newPassword, confirmPassword } = data;

    const updatedPassword = {
      id: `${id}`,
      username: `${username}`,
      email: `${email}`,
      password: `${newPassword}`,
      confirmPassword: `${confirmPassword}`,
    };

    if (newPassword.includes(confirmPassword)) {
      if (password !== newPassword || password !== confirmPassword) {
        const Url = `http://localhost:3000/login/${id}`;
        const options = {
          method: "PUT",
          body: JSON.stringify(updatedPassword),
        };
        const response = await fetch(Url, options);
        // const data = await response.json();
        toast.success("Password Updated Successfully..");
        formDetails.newPassword = "";
        formDetails.confirmPassword = "";
        // setToggleLoginBtn(true);
        navigate("/login");
        console.log(response);
      } else {
        // setToggleLoginBtn(false);
        toast.warning("Don't use previous Passwords");
      }
      setComparePassword(true);
    } else {
      // setToggleLoginBtn(false);
      setComparePassword(false);
    }

    // if (oldPassword === each.password) {
    //   const loginUrl = "http://localhost:3000/login";
    //   const options = {
    //     method: "PUT",
    //     body: JSON.stringify(data),
    //   };
    //   const response = await fetch(loginUrl, options);
    //   console.log(response);
    // }
  };

  return (
    <div className="password-container">
      <div className="container d-flex flex-column justify-content-center">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h1 className="password-heading mb-4 text-light fw-light fst-italic text-center">
            Update Password
          </h1>
          <form
            className="password-form-container"
            onSubmit={handleSubmit(onSubmitPasswordsForm)}
          >
            <div className="mb-3 w-100">
              <label
                htmlFor="NewPassword"
                className="form-label password-label"
              >
                Password<span className="password-required-field">*</span>
              </label>
              {showPassword ? (
                <input
                  type="text"
                  className="password-input"
                  id="NewPassword"
                  placeholder="Password"
                  ref={passwordRef}
                  {...register("newPassword", {
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
                  className="password-input"
                  id="NewPassword"
                  placeholder="Password"
                  ref={passwordRef}
                  {...register("newPassword", {
                    required: "*Required",
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                      message: "*Enter a valid Password",
                    },
                  })}
                />
              )}
              {control.getFieldState("newPassword").isTouched && (
                <p className="password-error-msg">
                  {errors.newPassword?.message}
                </p>
              )}
            </div>
            <div className="mb-2 w-100">
              <label
                htmlFor="ConfirmPassword"
                className="form-label password-label"
              >
                Confirm Password
                <span className="password-required-field">*</span>
              </label>
              {showPassword ? (
                <input
                  type="text"
                  className="password-input"
                  id="ConfirmPassword"
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
                  className="password-input"
                  id="ConfirmPassword"
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
                  <p className="password-error-msg">
                    {errors.confirmPassword?.message}
                  </p>
                  {!comparePassword && (
                    <p className="password-error-msg">
                      *Passwords must be same
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="update-password-checkbox-container mb-2 mt-2">
              <input
                id="up-checkbox"
                type="checkbox"
                className="update-password-checkbox"
                onChange={() => onChangeShowPassword()}
                value={showPassword}
              />
              <label
                htmlFor="up-checkbox"
                className="up-checkbox-label fw-bolder"
              >
                Show Passwords
              </label>
            </div>
            <button
              type="submit"
              className="password-btn btn btn-light mt-2 w-100"
            >
              Update
            </button>
          </form>
          {toggleLoginBtn && (
            <div className="loginBtn-container">
              <NavLink to="/login" className="text-white text-decoration-none">
                <button
                  type="button"
                  className="up-login-btn btn btn-secondary"
                >
                  Login
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <ToastContainer pauseOnHover={false} />
    </div>
  );
};

export default Passwords;

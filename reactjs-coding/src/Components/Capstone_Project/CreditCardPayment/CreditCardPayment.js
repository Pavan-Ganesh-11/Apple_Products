import React, { useContext, useEffect, useRef, useState } from "react";
import "./CreditCardPayment.css";

import CartContext from "../Context/CartContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { PiWarningCircleFill } from "react-icons/pi";
import Swal from "sweetalert2";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const CreditCardPayment = () => {
  const [loginData, setLoginData] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const value = useContext(CartContext);
  const { cartList } = value;

  var amount = 0;
  cartList.map(
    (eachItem) =>
      (amount += parseInt(eachItem.price) * parseInt(eachItem.quantity))
  );

  let discountAmount = amount - amount * 0.05;

  // const value = useContext(CartContext);
  // const { loginDetails } = value;

  // const emailValue = loginDetails.email;

  const loggedInValue = localStorage.getItem("loggedIn");

  let emailValue;
  const loggedInEmailValue = localStorage.getItem("userDetails");

  if (loggedInValue === null) {
    navigate("/products");
  } else {
    emailValue = JSON.parse(loggedInEmailValue).email.toLowerCase();
  }

  const date = new Date().getFullYear();
  const yearLastTwoDigits = date % 100;

  const pattern = new RegExp(
    `/^\\d{2}.*\\d{2}(?!0{2})(?!${yearLastTwoDigits})$/`
  );

  const getLoginData = async () => {
    const loginUrl = `http://localhost:3000/login?email=${emailValue}`;
    const response = await axios.get(loginUrl);
    if (response.status === 200) {
      setLoginData(response.data);
    }
  };

  useEffect(() => {
    getLoginData();
  }, []);

  const paymentGatewayValues = {
    cardNumber: "",
    cvvNumber: "",
    expiryMonth: "",
    expiryYear: "",
    password: "",
  };

  const formValues = useForm(paymentGatewayValues);
  const { register, control, handleSubmit, formState } = formValues;
  const { errors } = formState;

  const onSubmitPaymentDetails = async (data) => {
    const { password } = loginData[0];
    if (password === data.password) {
      console.log(data);
      Swal.fire({
        title: "Do you want Confirm?",
        text: `We have sent you a notification on Google Pay, Accept for Payment - Amount: ${discountAmount}/- INR`,
        confirmButtonText: "Yes",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        icon: "warning",
      }).then((response) => {
        if (response.isConfirmed) {
          // <NavLink to="/orderConfirmation" className="text-decoration-none">
          Swal.fire("Your Order is Confirmed", "", "success").then(
            (response) => {
              if (response.isConfirmed) {
                navigate("/cart/payment-gateway/shipment-details");
              }
            }
          );
          // </NavLink>
        }
      });
    } else {
      toast.error("Invalid Password", {
        position: "top-center",
      });
    }
  };

  const onClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      className="payment-gateway-card"
      onSubmit={handleSubmit(onSubmitPaymentDetails)}
    >
      <div className="payment-field-details-container payment-field-details-card-number-container">
        <div className="payment-heading-desc-container">
          <h1 className="payment-field-heading">Card Number</h1>
          <p className="payment-field-desc"></p>
        </div>
        <div className="payment-input-card-number-container">
          <input
            type="text"
            // pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
            inputMode="numeric"
            className="payment-field-input payment-input-card-number"
            {...register("cardNumber", {
              required: "*Required",
              pattern: {
                value:
                  /^(?!(0000 0000 0000 0000)|(0000000000000000))(?:\d{4}[\s-]?){3}\d{4}$/,
                message: "Please enter valid 16 digits Number",
              },
            })}
          />
          <FaRegCreditCard size={22} className="card-number-icon" />
          {/* <p className="card-number-example">
                      <span className="card-number-example-note">Note:</span>{" "}
                      xxxx xxxx xxxx xxxx
                    </p> */}
          {control.getFieldState("cardNumber").isTouched && (
            <p className="error-msg">
              <>
                {errors.cardNumber?.message === "*Required" ? (
                  errors.cardNumber?.message
                ) : errors.cardNumber?.message ===
                  "Please enter valid 16 digits Number" ? (
                  <>
                    <PiWarningCircleFill color="#e25f5f" size={18} />
                    {errors.cardNumber?.message}
                  </>
                ) : null}
              </>
            </p>
          )}
        </div>
      </div>
      <div className="payment-field-details-container">
        <div className="payment-heading-desc-container">
          <h1 className="payment-field-heading">CVV Number</h1>
          <p className="payment-field-desc"></p>
        </div>
        <div className="payment-input-container">
          <input
            type="number"
            maxLength={3}
            className="payment-field-input cvv-input"
            {...register("cvvNumber", {
              required: "*Required",
              pattern: {
                value: /^(?!000)[0-9]{3}$/,
                message: "Please enter valid 3 digit number",
              },
            })}
          />
          {control.getFieldState("cvvNumber").isTouched && (
            <p className="error-msg">
              <>
                {errors.cvvNumber?.message === "*Required" ? (
                  errors.cvvNumber?.message
                ) : errors.cvvNumber?.message ===
                  "Please enter valid 3 digit number" ? (
                  <>
                    <PiWarningCircleFill color="#e25f5f" size={18} />
                    {errors.cvvNumber?.message}
                  </>
                ) : null}
              </>
            </p>
          )}
        </div>
      </div>
      <div className="payment-field-details-container">
        <div className="payment-heading-desc-container">
          <h1 className="payment-field-heading">Expiry Date</h1>
          <p className="payment-field-desc">
            Enter the expiration date of the card
          </p>
        </div>
        <div className="payment-input-container-expiry-card">
          <div>
            <input
              type="text"
              className="payment-field-input payment-field-input-card-1"
              {...register("expiryMonth", {
                required: "*Required",
                pattern: {
                  value: /^(0?[1-9]|1[0-2])$/,
                  message: "*Enter valid Month",
                },
              })}
            />
            {control.getFieldState("expiryMonth").isTouched && (
              <p className="error-msg">{errors.expiryMonth?.message}</p>
            )}
          </div>
          <p className="payment-card-slash">/</p>
          <div>
            <input
              type="text"
              className="payment-field-input payment-field-input-card-2"
              {...register("expiryYear", {
                required: "*Required",
                pattern: {
                  value: /^[0-9]{2}$/,
                  message: "*Enter valid Year",
                },
              })}
            />
            {control.getFieldState("expiryYear").isTouched && (
              <p className="error-msg">{errors.expiryYear?.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="payment-field-details-container">
        <div className="payment-heading-desc-container">
          <h1 className="payment-field-heading">Password</h1>
          <p className="payment-field-desc">Enter your password</p>
        </div>
        <div classname="payment-input-container credit-card-password-container">
          {showPassword ? (
            <>
              <input
                type="text"
                className="payment-field-input credit-card-input"
                {...register("password", {
                  required: "*Required",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: "Please enter valid login Password",
                  },
                })}
              />
              {control.getFieldState("password").isTouched && (
                <p className="error-msg">
                  <>
                    {errors.password?.message === "*Required" ? (
                      errors.password?.message
                    ) : errors.password?.message ===
                      "Please enter valid login Password" ? (
                      <>
                        <PiWarningCircleFill color="#e25f5f" size={18} />
                        {errors.password?.message}
                      </>
                    ) : null}
                  </>
                </p>
              )}
            </>
          ) : (
            <>
              <input
                type="password"
                className="payment-field-input credit-card-input"
                {...register("password", {
                  required: "*Required",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: "Please enter valid login Password",
                  },
                })}
              />
              {control.getFieldState("password").isTouched && (
                <p className="error-msg">
                  <>
                    {errors.password?.message === "*Required" ? (
                      errors.password?.message
                    ) : errors.password?.message ===
                      "Please enter valid login Password" ? (
                      <>
                        <PiWarningCircleFill color="#e25f5f" size={18} />
                        {errors.password?.message}
                      </>
                    ) : null}
                  </>
                </p>
              )}
            </>
          )}
        </div>
        <div className="toggle-credit-card-password-container">
          {showPassword ? (
            <FaEyeSlash
              size={25}
              className="toggle-credit-card-password-icons"
              onClick={onClickShowPassword}
            />
          ) : (
            <FaEye
              size={23}
              className="toggle-credit-card-password-icons"
              onClick={onClickShowPassword}
            />
          )}
        </div>
      </div>
      <button type="submit" className="pay-now-btn">
        Pay Now
      </button>
    </form>
  );
};

export default CreditCardPayment;

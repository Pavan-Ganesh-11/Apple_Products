import React, { useContext, useEffect, useState } from "react";
import "./NetbankingPayment.css";

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

const accountOptions = [
  {
    optionId: "AXIS BANK LTD",
    display: "AXIS BANK LTD",
  },
  {
    optionId: "HDFC BANK",
    display: "HDFC BANK",
  },
  {
    optionId: "ICICI BANK",
    display: "ICICI BANK",
  },
  {
    optionId: "SBI BANK",
    display: "SBI BANK",
  },
  {
    optionId: "CANARA BANK",
    display: "CANARA BANK",
  },
  {
    optionId: "IDBI BANK",
    display: "IDBI BANK",
  },
  {
    optionId: "KOTAK MAHINDRA BANK",
    display: "KOTAK MAHINDRA BANK",
  },
  {
    optionId: "PANJAB NATIONAL BANK",
    display: "PANJAB NATIONAL BANK",
  },
  {
    optionId: "BANK OF BARODA",
    display: "BANK OF BARODA",
  },
];

const NetbankingPayment = () => {
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

  const loggedinValue = localStorage.getItem("userDetails");
  const emailValue = JSON.parse(loggedinValue).email.toLowerCase();

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
    account: accountOptions[0].display,
    upiId: "",
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
      <div className="payment-netbanking-field-details-container">
        <div className="payment-netbanking-heading-desc-container">
          <h1 className="payment-netbanking-field-heading">Account</h1>
          <p className="payment-netbanking-field-desc">
            Select your Bank Account
          </p>
        </div>
        <div className="payment-netbanking-input-container">
          <select
            type="text"
            inputMode="numeric"
            className="payment-netbanking-field-input account-input"
            {...register("account", {
              required: "*Required",
              validate:
                value !== accountOptions[0].display || "Please select any bank",
            })}
          >
            <option value="SELECT_A_BANK" selected disabled>-- SELECT A BANK --</option>
            {accountOptions.map((each) => (
              <option value={each.optionId}>{each.display}</option>
            ))}
          </select>
          {control.getFieldState("account").isTouched && (
            <p className="netbanking-error-msg">
              <>
                {errors.account?.message === "*Required" ? (
                  errors.account?.message
                ) : errors.account?.message === "Please select any Bank" ? (
                  <>
                    <PiWarningCircleFill color="#e25f5f" size={18} />
                    {errors.account?.message}
                  </>
                ) : null}
              </>
            </p>
          )}
        </div>
      </div>
      <div className="payment-netbanking-field-details-container">
        <div className="payment-netbanking-heading-desc-container">
          <h1 className="payment-netbanking-field-heading">UPI ID</h1>
          <p className="payment-netbanking-field-desc">Enter your UPI ID</p>
        </div>
        <div className="payment-netbanking-input-container">
          <input
            type="text"
            spellCheck="false"
            autoComplete="off"
            className="payment-netbanking-field-input"
            {...register("upiId", {
              required: "*Required",
              pattern: {
                value: /^(?![0-9])[a-z0-9]+@[a-z]{2,}$/,
                message: "Please enter valid UPI ID",
              },
            })}
          />
          {control.getFieldState("upiId").isTouched && (
            <p className="netbanking-error-msg">
              <>
                {errors.upiId?.message === "*Required" ? (
                  errors.upiId?.message
                ) : errors.upiId?.message === "Please enter valid UPI ID" ? (
                  <>
                    <PiWarningCircleFill color="#e25f5f" size={18} />
                    {errors.upiId?.message}
                  </>
                ) : null}
              </>
            </p>
          )}
        </div>
      </div>
      <div className="payment-netbanking-field-details-container">
        <div className="payment-netbanking-heading-desc-container">
          <h1 className="payment-netbanking-field-heading">Password</h1>
          <p className="payment-netbanking-field-desc">Enter your password</p>
        </div>
        <div className="payment-netbanking-input-container">
          {showPassword ? (
            <>
              <input
                type="text"
                className="payment-netbanking-field-input netbanking-input"
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
                className="payment-netbanking-field-input netbanking-input"
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
        <div className="toggle-netbanking-password-container">
          {showPassword ? (
            <FaEyeSlash
              size={25}
              className="toggle-netbanking-password-icons"
              onClick={onClickShowPassword}
            />
          ) : (
            <FaEye
              size={23}
              className="toggle-netbanking-password-icons"
              onClick={onClickShowPassword}
            />
          )}
        </div>
      </div>
      <button type="submit" className="netbanking-pay-now-btn">
        Pay Now
      </button>
    </form>
  );
};

export default NetbankingPayment;

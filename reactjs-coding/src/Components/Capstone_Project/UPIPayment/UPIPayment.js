import React, { useContext, useEffect, useState } from "react";
import "./UPIPayment.css";
import { PiWarningCircleFill } from "react-icons/pi";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import CartContext from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

const UPIPayment = () => {
  const [loginData, setLoginData] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [displayQRCode, setDisplayQRCode] = useState(false);

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
    account: "",
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
        icon: "warning",
        confirmButtonText: "Yes",
        showCancelButton: true,
        cancelButtonText: "Cancel",
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

  const onClickGenerateQRCode = () => {
    setDisplayQRCode((prev) => !prev);
  };

  const onClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      className="payment-gateway-card"
      onSubmit={handleSubmit(onSubmitPaymentDetails)}
    >
      <div className="payment-upi-field-details-container">
        <div className="payment-upi-heading-desc-container">
          <h1 className="payment-upi-field-heading">UPI ID</h1>
          <p className="payment-upi-field-desc">Enter your UPI ID</p>
        </div>
        <div className="payment-upi-input-container">
          <input
            type="text"
            spellCheck="false"
            autoComplete="off"
            className="payment-upi-field-input"
            {...register("upiId", {
              required: "*Required",
              pattern: {
                value: /^(?![0-9])[A-Za-z0-9]+@[a-z]{2,}$/,
                message: "Please enter valid UPI ID",
              },
            })}
          />
          {control.getFieldState("upiId").isTouched && (
            <p className="upi-error-msg">
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
      <div className="payment-upi-field-details-container">
        <div className="payment-upi-heading-desc-container">
          <h1 className="payment-upi-field-heading">Password</h1>
          <p className="payment-upi-field-desc">Enter your password</p>
        </div>
        <div className="payment-upi-input-container paymnet-upi-password-input-container">
          {showPassword ? (
            <>
              <input
                type="text"
                className="payment-upi-field-input upi-password"
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
                className="payment-upi-field-input upi-password"
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
        <div className="toggle-password-container">
          {showPassword ? (
            <FaEyeSlash
              size={25}
              className="toggle-password-icons"
              onClick={onClickShowPassword}
            />
          ) : (
            <FaEye
              size={23}
              className="toggle-password-icons"
              onClick={onClickShowPassword}
            />
          )}
        </div>
      </div>
      <div className="generate_qr_code-container">
        <button
          className="QRCodeBtn btn btn-secondary"
          onClick={onClickGenerateQRCode}
        >
          Generate QR Code
        </button>
        {displayQRCode && (
          <>
            <p className="qr_scan_to_pay">Scan to Pay</p>
            <QRCodeSVG
              value={`http://localhost:5260/card/paymentGateway`}
              size={200}
            />
          </>
        )}
      </div>
      <button type="submit" className="upi-pay-now-btn">
        Pay Now
      </button>
    </form>
  );
};

export default UPIPayment;

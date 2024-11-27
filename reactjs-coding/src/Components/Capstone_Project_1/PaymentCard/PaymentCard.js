import React, { useContext, useEffect, useState } from "react";
import "./PaymentCard.css";
import CartContext from "../Context/CartContext";
import { FaRupeeSign } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa6";
import axios from "axios";

const PaymentCard = (props) => {
  // const value = useContext(CartContext);
  // const { cartList } = value;

  // let orderNumber = Math.floor(Math.random() * 1000000);
  const [cartList, setCartList] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    getCartListItems();
  }, [cartList]);

  const loggedinValue = localStorage.getItem("userDetails");
  const emailVal = JSON.parse(loggedinValue).email.toLowerCase();

  useEffect(() => {
    getLoginUserData();
  }, []);

  const getLoginUserData = async () => {
    const loginUrl = `http://localhost:3000/login?email=${emailVal}`;
    const response = await axios.get(loginUrl);
    if (response.status === 200) {
      const user = response.data[0].username;
      setUsername(user);
    }
  };

  const getCartListItems = async () => {
    const url = `http://localhost:3000/cartList?username=${username}`;
    const response = await axios.get(url);
    if (response.status === 200) {
      setCartList(response.data);
    }
  };

  var amount = 0;
  cartList.map(
    (eachItem) =>
      (amount += parseInt(eachItem.price) * parseInt(eachItem.quantity))
  );

  let discountAmount = amount - amount * 0.05;
  // const orderDetails = { orderNumber: orderNumber, Amount: discountAmount };
  const orderDetails = { Amount: discountAmount };

  localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

  return (
    <div className="payment-card-container">
      <h1 className="payment-card-heading">Payment Details</h1>
      <div className="payment-card">
        <div className="brand-container">
          <p className="brand-name">Brand: </p>
          <div className="apple-logo-container">
            <img
              src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/9d5696196cfb3f4440ca99b1018c8ff91a53716d1948ba73ee3bb68f36571d7a.jpg?q=90"
              alt="Apple Logo"
              className="apple-img"
            />
            <p className="apple-name">Apple</p>
          </div>
        </div>
        {/* <div className="order-container">
          <p className="order-name">Order:</p>
          <p className="order-number">{orderNumber}</p>
        </div> */}
        <div className="discount-container">
          <p className="discount-name">Discount:</p>
          <p className="discount">5%</p>
        </div>
        <div className="amount-container">
          <p className="amount-name">Amount: </p>
          <p className="amount">
            {/* <FaRupeeSign color="#acbac0" size={16} /> */}
            {amount} <span className="inr-rupees">INR</span>
          </p>
        </div>
      </div>
      <div className="total-amount-container">
        <p className="total-amount-name">You have to Pay</p>
        <div className="total-amount-details-container">
          <h1 className="total-amount">
            <FaRupeeSign color="#d5edf5" size={17} />
            {discountAmount}/-
            <span className="total-inr-rupees">INR</span>
          </h1>
          <BiWallet color="#8caeba" size={27} />
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;

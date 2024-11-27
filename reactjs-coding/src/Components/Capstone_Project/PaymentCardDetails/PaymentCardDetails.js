import React, { useContext, useEffect, useState } from "react";
import "./PaymentCardDetails.css";

import TimedOut from "../TimedOut/TimedOut";
import PaymentGateway from "../PaymentGateway/PaymentGateway";
import PaymentCard from "../PaymentCard/PaymentCard";

const PaymentCardDetails = () => {
  const [secCount, setSecCount] = useState(59);
  const [minCount, setMinCount] = useState(4);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      if (secCount < 10) {
        setSecCount(secCount - 1);
      }

      if (secCount === 1 && minCount >= 0) {
        setMinCount(minCount - 1);
      }

      if (secCount === 0) {
        setSecCount(59);
      } else {
        setSecCount(secCount - 1);
      }
    }, 1000);

    return () => clearInterval(timeInterval);
  }, [secCount, minCount]);

  return (
    <>
      {minCount >= 0 ? (
        <div className="payment-gateway-container">
          <div className="payment-gateway-heading-timer-container">
            {/* <h1 className="payment-gateway-heading">Payment Gateway</h1> */}
            {/* <div> */}
            <h1 className="timer-heading">Timer</h1>
            <div className="timer-container">
              <span className="timer">
                {minCount < 10 ? String(minCount).padStart(2, "0") : minCount}
              </span>
              :
              <span className="timer">
                {secCount < 10 && secCount >= 0
                  ? String(secCount).padStart(2, "0") 
                  : secCount}
              </span>
            </div>
            {/* </div> */}
          </div>
          <div className="payment-gateway-and-card-container">
            <PaymentGateway />
            <PaymentCard />
          </div>
        </div>
      ) : (
        <TimedOut />
      )}
    </>
  );
};

export default PaymentCardDetails;

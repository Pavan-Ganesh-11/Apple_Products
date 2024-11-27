import React, { useEffect, useRef, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  ChevronButton,
  OTPCard,
  OTPContainer,
  OTPHeading,
  OTPInput,
  OTPInputContainer,
  OTPNameHeading,
  OTPRequiredField,
  OTPSpanEmail,
  ProjectLogo,
  VerifyButton,
} from "./StyledComponent";
import { FaChevronLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Passwords from "../Passwords/Passwords";

const OTP = (props) => {
  const {
    onSubmitOTP = () => {},
    submitLoginStatus = () => {},
    loginCred,
    passwordsStatus,
    loginDetails,
  } = props;

  // const { emailData } = props;
  // const { email } = emailData;
  const { email } = loginCred;

  const navigate = useNavigate();

  const length = 6;

  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [isActive, setActive] = useState(0);
  const [OTPErrorMsg, setOTPErrorMsg] = useState(false);

  const inputRefs = useRef([]);

  const onChangeInput = (e, index) => {
    const value = e.target.value;
    setActive(index + 1);
    if (isNaN(value)) {
      return false;
    }

    let newOtp = [...otp];

    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    // submit trigger
    const combinedOtp = newOtp.join("");

    if (combinedOtp.length === length) {
      if (otp.length === length && !isNaN(otp.join(""))) {
        onSubmitOTP(combinedOtp);
        setOTPErrorMsg(false);
      } else {
        setOTPErrorMsg(true);
      }
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const onClickInput = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  const onKeyDownInput = (e, index) => {
    if (
      !otp[index] &&
      e.key === "Backspace" &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
      setActive(index - 1);
    }
  };

  const onClickChevron = () => {
    submitLoginStatus(true);
  };

  // const onClickVerify = () => {
  //   if (otp.length === length && !isNaN(otp.join(""))) {
  //     setOTPErrorMsg(false);
  //     alert(otp.join(""));
  //     navigate("/");
  //   } else {
  //     setOTPErrorMsg(true);
  //     navigate("/OTP");
  //   }
  // };

  return (
    <>
      {passwordsStatus ? (
        <Passwords loginCredentails={loginDetails} />
      ) : (
        <>
          <OTPContainer>
            <ProjectLogo className="mb-3">Pavan</ProjectLogo>
            <OTPCard>
              <div className="d-flex justify-content-start align-items-center w-100 mb-3">
                <ChevronButton onClick={() => onClickChevron()}>
                  <FaChevronLeft
                    color="#555"
                    size={20}
                    className="justify-content-start"
                  />
                </ChevronButton>
                <OTPHeading className="text-light w-100 text-center mt-1">
                  OTP Verification
                </OTPHeading>
              </div>
              <OTPNameHeading>
                We have sent 6-digit OTP to your Email id:
                <OTPSpanEmail className="text-light"> {email}</OTPSpanEmail>
              </OTPNameHeading>
              <OTPNameHeading className="text-light">One Time Password</OTPNameHeading>
              <OTPInputContainer>
                {otp.map((value, index) => (
                  <OTPInput
                    type="text"
                    className="text-center"
                    ref={(input) => (inputRefs.current[index] = input)}
                    maxLength={1}
                    autoComplete="off"
                    spellCheck={false}
                    // readOnly={isActive !== index}
                    onChange={(e) => onChangeInput(e, index)}
                    value={value}
                    onKeyDown={(e) => onKeyDownInput(e, index)}
                    onClick={() => onClickInput(index)}
                  />
                ))}
              </OTPInputContainer>
              {OTPErrorMsg && (
                <p className="mt-2 mb-0">
                  <OTPRequiredField>
                    Please Enter only numbers*
                  </OTPRequiredField>
                </p>
              )}
              {/* <VerifyButton
              type="submit"
              className="mt-4 btn btn-secondary"
              disabled={otp[length - 1] !== "" ? false : true}
              onClick={() => onClickVerify()}
              >
              Verify
              </VerifyButton> */}
            </OTPCard>
            <ToastContainer position="top-center" pauseOnHover={false} />
          </OTPContainer>
        </>
      )}
    </>
  );
};

export default OTP;

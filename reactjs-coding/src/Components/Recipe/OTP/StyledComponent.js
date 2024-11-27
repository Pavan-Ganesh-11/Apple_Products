import styled from "styled-components";

export const OTPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Roboto";
  background-color: rgb(242, 249, 255);
`;

export const ProjectLogo = styled.h1`
  font-size: 36px;
  font-family: "Lucida Calligraphy";
  letter-spacing: 1px;
`;

export const OTPCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: "Roboto";
  border-radius: 16px;
  // box-shadow: 0 0 15px 2px #ccc;
  border: 1px solid #ddd;
  width: 450px;
  padding: 45px 50px;
  background-color: #fff;
`;

export const OTPHeading = styled.h1`
  font-size: 26px;
  font-family: "Lucida Calligraphy";
  letter-spacing: 1px;
  margin-bottom: 0;
`;

export const OTPInputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const OTPNameHeading = styled.p`
  font-size: 16px;
  color: grey;
  align-self: flex-start;
  margin-top: 20px;
  margin-left: 15px;
  font-family: "Roboto";
  margin-bottom: 0;
  margin-left: 3px;
`;

export const ChevronButton = styled.button`
  height: 40px;
  color: #fff;
  background-color: transparent;
  // font-weight: 600;
  border: 0;
  align-self: center;
  font-size: 16px;
`;

export const OTPInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  &::-webkit-outer-spin-button {
    display: none;
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const OTPSpanEmail = styled.span`
  font-weight: 600;
  color: #444;
  font-size: 17px;
`

export const VerifyButton = styled.button`
  height: 40px;
  color: #fff;
  font-family: "Lucida Calligraphy";
  letter-spacing: 1px;
  width: 100%;
  font-weight: 600;
  border-radius: 6px;
  border: 0;
  align-self: center;
  font-size: 16px;
`;

export const OTPRequiredField = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`
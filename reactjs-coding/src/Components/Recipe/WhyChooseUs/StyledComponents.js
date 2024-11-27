import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e5eaf4;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  width: 300px;
  height: 280px;
`;

export const CardImage = styled.img`
  width: 80px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SpanOffer = styled.span`
  font-weight: 700;
  font-style: italic;
  color: #222;
  font-size: 17px;
`;

export const CardDesc = styled.p`
  color: #999;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`;

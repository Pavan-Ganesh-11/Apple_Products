import styled from "styled-components";

export const CustomButton = styled.button`
  color: ${(props) => props.Color};
  background-color: ${(props) => props.bgColor};
  height: 42px;
  width: 130px;
  border: 0;
  border-radius: 5px;
  font-size: 15px;
`;

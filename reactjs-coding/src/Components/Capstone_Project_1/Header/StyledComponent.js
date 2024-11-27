import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // box-shadow: 0 0 10px 2px #ddd;
  font-family: "Roboto";
  height: 80px;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #fff !important;

  @media screen and (max-width: 767px) {
    padding-left: 20px;
  }
`;

export const NavHeadingLogo = styled.h1`
  font-family: "Lucida Calligraphy";
  transform: rotate(-2deg);
  font-size: 30px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const NavLists = styled.li`
  &:hover {
    // font-family: "Lucida Calligraphy";
    font-family: "Roboto";
    font-weight: 600;
    font-size: 17px;
  }
`;

export const NavigationDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  margin-right: 10px;
  background-color: #fff;

  @media screen and (max-width: 767px) {
    margin-right: 0;
  }
`;

export const NavListContainer = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20px;
  margin-bottom: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoutHeading = styled.h1`
  font-family: sans-serif;
  font-size: 28px;
  padding: 15px 0;
`;

// export const NavLink = styled.div`
//   text-decoration: none;
//   color: #000;
// `;

export const CartCountBadge = styled.span`
  background-color: #e6f6ff;
  color: #0967d2;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  border-radius: 50%;
  padding-left: 5px;
  padding-top: 2px;
  padding-right: 5px;
  padding-bottom: 2px;
  margin-left: 8px;
  margin-top: 0px;

  @media screen and (max-width: 768px) {
    background-color: #bfdbfe;
    position: relative;
    right: 20px;
    top: -10px;
  }
`;

export const NavLogout = styled.button`
  height: 40px;
  width: 100px;
  // background: linear-gradient(to right, deepskyblue, rgb(86, 187, 221));
  // background: linear-gradient(to left, #75188f, #75167a, #410a47);
  background: linear-gradient(to left, #614385, #516395);
  color: #fff;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  display: block;

  &:active {
    scale: 0.95;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavLoginLogoutContainer = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  list-style: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavSMLoginLogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  display: none;
  background-color: #fff !important;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const NavLoginSignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 80px;
`;

export const NavSMLogout = styled.button`
  &:active {
    scale: 0.95;
  }

  display: block;
  height: 40px;
  width: 100px;
  background: linear-gradient(to right, deepskyblue, rgb(86, 187, 221));
  color: #fff;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
`;

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;
  background-color: #fff;
`;

export const LogoutCloseButton = styled.button`
  font-family: "Roboto";
  // background-color: darkgray;
`;

export const NavSMlistContainer = styled.ul`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 20px;
    margin-bottom: 0;
  }
`;

export const LoginSingupBtn = styled.button`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    height: 40px;
    // color: #fff;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    background-color: transparent;

    &:hover {
      background-color: #eee;
    }
  }
`;

export const HeaderSMLogoutBtn = styled.button`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    background-color: transparent;

    &:hover {
      background-color: #eee;
    }
  }
`;

export const CartFavoriteList = styled.li`
  padding: 0;
`

// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 0 10px 2px #ddd;
//   font-family: "Roboto";
//   height: 100px;
//   padding: 20px 40px;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 10;
//   background-color: #fff;
// `;
// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 0 10px 2px #ddd;
//   font-family: "Roboto";
//   height: 100px;
//   padding: 20px 40px;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 10;
//   background-color: #fff;
// `;
// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 0 10px 2px #ddd;
//   font-family: "Roboto";
//   height: 100px;
//   padding: 20px 40px;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 10;
//   background-color: #fff;
// `;

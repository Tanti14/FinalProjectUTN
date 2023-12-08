import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #67729d;
  width: 100%;
  height: 125px;
  position: fixed;
  top: 0;
  z-index: 10;

  a {
    color: white;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  position: relative;
  gap: 20px;
`;

export const NavImgContainer = styled.div`
  width: 20%;
  img {
    width: 250px;
  }
`;

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  gap: 40px;

  @media (width <= 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: #67729d;
    width: 40%;
    padding: 50px 10px;
    top: 117px;
    right: 0;
    gap: 60px;
    z-index: 3;

    transform: translate(105%);
    transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  }
`;

export const UserBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  gap: 40px;
  padding: 40px 10px;
  position: absolute;
  top: 117px;
  right: 0;
  background-color: #67729d;

  z-index: 3;

  transform: translate(105%);
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
`;

/* Mobile Navbar */
export const MobileNavbarBtn = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  font-size: 26px;

  @media (width <= 768px) {
    display: flex;
    width: 80%;
  }
`;

import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #67729d;
  width: 100%;
  height: 100px;
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
    width: 200px;
  }
`;

export const NavBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  gap: 40px;

  /* @media (width <= 768px) {
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
  } */
`;

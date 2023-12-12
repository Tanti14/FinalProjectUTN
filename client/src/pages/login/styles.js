import styled from "styled-components";
import gradientbg from "../../assets/img/gradientbg.jpg";

export const StyledLoginScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  height: 100vh;
  background-image: url(${gradientbg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (width >= 1920px) {
    height: 100vh;
    padding: 0 70px;
    margin-top: 30px;
  }
`;

export const StyledScreenContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 48px;
  width: 100%;

  img {
    width: 520px;
  }

  @media (width >= 1920px) {
    img {
      width: 800px;
    }
  }
`;

export const StyledLoginForm = styled.div`
  max-width: 28rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
`;

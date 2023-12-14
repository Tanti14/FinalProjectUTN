import styled from "styled-components";
import bg from "../../assets/img/abstractbg.jpg";
import { Link } from "react-router-dom";

export const AdFormPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (width >= 1920px) {
    height: calc(100vh - 184px);
  }
`;

export const BlurEffect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  gap: 20px;
  padding: 40px;
  background-color: rgba(39, 39, 42, 1);
  border-radius: 10px;
  position: relative;

  @media (width >= 1920px) {
    width: 40%;
  }
`;

export const GoBackBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 2px 8px;
  border-radius: 6px;
  color: white;
  background: rgba(34, 197, 94, 1);
  position: absolute;
  top: 40px;
  right: 30px;
`;

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 600px;
  border-radius: 10px;
  gap: 15px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.9);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.9);
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
    height: 250px;
    border-radius: 10px 10px 0 0;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  width: 100%;
  height: 260px;

  h2 {
    font-size: 26px;
    font-weight: 600;
    text-decoration: underline;
    text-align: center;
  }

  p {
    font-size: 16px;
    text-align: justify;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    background-color: green;
    color: white;
    width: 95%;
    padding: 10px ;
    &:visited {
      color: white;
    }
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 180px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  gap: 20px;
`;

export const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  img {
    width: 180px;
  }
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  width: 50%;
  height: 180px;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;

  a {
    background-color: green;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;
    &:visited {
      color: white;
    }
  }
`;

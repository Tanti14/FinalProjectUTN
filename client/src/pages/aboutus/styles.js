import styled from "styled-components";
import bg from "../../assets/img/smtuc-bg.jpg";

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 150px;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  margin: 60px;
  padding: 60px;
  gap: 15px;
 

  background: rgba(255, 255, 255, 0.55);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px); 
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

  /* color: white; */
  h1{
    font-size: 50px;
    font-weight: 800;
  }
  h2{
    font-size: 30px;
    font-weight: 600;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 15px;
  font-size: 18px;
  text-align: justify;
`;

import styled from "styled-components";
import earth from "../../assets/img/earthbg.jpg";
import "animate.css";

export const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 150px;
`;

export const HomeScreenHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 150px);
  background-image: url(${earth});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HeroGlassCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 5px 40px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);

  @media (width >= 1920px) {
    width: 90%;
    padding: 40px 80px;
  }
`;

export const HeroImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  opacity: 0;
  animation: fade 0.9s ease-in forwards, slide-right 1.3s ease-in-out;
  animation-delay: 0.2s;
  img {
    width: 420px;
  }

  @media (width >= 1920px) {
    width: auto;
    img {
      width: 600px;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 20px;

  h2 {
    background: linear-gradient(to top, #30cfd0, #c43ad6);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    font-size: 35px;
    animation: fade 1s ease-in, slide-up 0.9s ease-in-out;
  }

  p {
    text-align: justify;
    opacity: 0;
    animation: fade 0.8s ease-in forwards, slide-up 0.9s ease-in-out;
    animation-delay: 0.3s;
  }

  @media (width >= 1920px) {
    h2 {
      font-size: 65px;
    }

    p{
      font-size: 20px;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 50px;
  background-color: aliceblue;
  position: relative;
`;

export const NoCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

export const AllCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  padding: 30px 0;

  @media (width >= 1920px) {
    max-width: 1750px;
    width: 100%;
    gap: 40px;
  }
`;

export const GoUpBtn = styled.div`
  display: flex;
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

import styled from "styled-components";

export const NavSubFrameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 30px;
  background: grey;
  border-top: 2px solid powderblue;
  position: absolute;
  top: 100px;
  z-index: 3;

  h1 {
    opacity: 0;
    animation: fade 0.9s ease-in forwards, slide-right 1.3s ease-in-out;
    animation-delay: 0.2s;
  }

  /* Animaciones  */
  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    from {
      transform: translateY(100px);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-right {
    from {
      transform: translateX(-100px);
    }

    to {
      transform: translateX(0);
    }
  }
`;

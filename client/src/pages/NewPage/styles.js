import styled from "styled-components";

export const NewPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  background-color: lightgrey;

  img {
    width: 600px;
  }

  @media (width >= 1920px) {
    img{
        width: 800px;
    }
  }
`;

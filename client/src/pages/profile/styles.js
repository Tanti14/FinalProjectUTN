import styled from "styled-components";

export const ProfileScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 150px;

  @media (width >= 1920px) {
    margin-top: 180px;
    margin-bottom: 15px;
  }
`;

export const MisAnunciosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

export const NoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 234px);

  @media (width >= 1920px) {
    height: calc(100vh - 279px);
  }
`;

export const AnunciosDisponibles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1300px;
  width: 100%;
  padding: 50px 0;
  gap: 35px;

  @media (width >= 1920px) {
    max-width: 1750px;
    width: 100%;
  }
`;

import styled from "styled-components";

export const StyledRegisterScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 204px);
  margin-top: 125px;
  padding: 83.5px;
`;

export const StyledRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  gap: 6px;

  input {
    padding: 10px;
    width: 50%;
    border-radius: 10px;
    border: 1px solid;

    &[type="submit"] {
      background-color: lightblue;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
`;

import React from "react";
import { StyledLoginForm, StyledLoginScreen } from "./styles";

export const LoginScreen = () => {
  return (
    <StyledLoginScreen>
      <StyledLoginForm>
        <input type="text" placeholder="Correo Electronico" />
        <input type="password" placeholder="Contraseña" />
        <input type="submit" value="Iniciar Sesion" />
      </StyledLoginForm>
    </StyledLoginScreen>
  );
};

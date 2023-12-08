import React from "react";
import { StyledRegisterScreen, StyledRegisterForm } from "./styles";

export const Register = () => {
  return (
    <StyledRegisterScreen>
      <StyledRegisterForm>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="text" placeholder="Correo Electronico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar Contraseña" />
        <input type="submit" value="Registrarme" />
      </StyledRegisterForm>
    </StyledRegisterScreen>
  );
};

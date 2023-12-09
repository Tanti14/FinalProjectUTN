import React, { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest } from "../api/auth";

export const AuthContext = createContext();

/* Creo un custom-hook para facilitar la importacion y uso del contexto */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider, no afuera");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [errores, setErrores] = useState([]);

  /* Funcion de registro */
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      /* console.log(res.data); */
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      console.log(error.response);
      setErrores(error.response.data);
    }
  };

  /* Funcion de inicio de sesion */
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      /* console.log(res.data); */
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrores(error.response.data);
      }
      setErrores([error.response.data.message]);
    }
  };

  /* Funcion de eliminacion de errores */
  useEffect(() => {
    if (errores.length > 0) {
      const timer = setTimeout(() => {
        setErrores([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errores]);

  //prettier-ignore
  return (
    <AuthContext.Provider value={{user, isAuth, errores, signup, signin}}>
        {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

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
  const [loading, setLoading] = useState(true);

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

  /* Funcion para verificar la existencia de una cookie en el navegador */
  const checkLogin = async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setIsAuth(false);
      setLoading(false);
      return setUser(null);
    }

    try {
      const res = await verifyTokenRequest(cookies.token);
      if (!res.data) {
        setIsAuth(false);
        setLoading(false);
        return;
      }

      setIsAuth(true);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      setIsAuth(false);
      setUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  //prettier-ignore
  return (
    <AuthContext.Provider value={{user, isAuth, errores, loading, signup, signin}}>
        {children}
    </AuthContext.Provider>
  );
};

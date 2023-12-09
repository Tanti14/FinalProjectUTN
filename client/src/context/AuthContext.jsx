import React, { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

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

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuth(true);
    } catch (error) {
      console.log(error.response);
      setErrores(error.response.data);
    }
  };

  //prettier-ignore
  return (
    <AuthContext.Provider value={{user, isAuth, errores, signup}}>
        {children}
    </AuthContext.Provider>
  );
};

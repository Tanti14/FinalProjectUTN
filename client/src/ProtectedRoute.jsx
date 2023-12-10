import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { loading, isAuth } = useAuth();

  console.log(loading, isAuth);
  if (loading) return <h1 className="mt-28">Cargando...</h1>;

  if (!loading && !isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
};

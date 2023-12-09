import React, { useEffect } from "react";
import { StyledLoginForm, StyledLoginScreen } from "./styles";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isAuth, errores, signin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  const onSubmit = handleSubmit((values) => {
    signin(values);
  });
  return (
    <div className="flex items-center justify-center h-[calc(100vh-84px)]">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      {errores.map((error, i) => (
          <div className="bg-red-500 p-2 text-white rounded-md flex justify-center my-2" key={i}>
            {error}
          </div>
        ))}
        <h1 className="text-2xl font-bold text-white">Login</h1>
        <form onSubmit={onSubmit} className="max-w-5xl">
          <input
            type="email"
            placeholder="Correo electronico"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.email && <p className="text-red-500">Ingrese su email</p>}
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.password && (
            <p className="text-red-500">Ingrese una contraseña</p>
          )}
          <button type="submit" className="text-white p-2 bg-cyan-700 rounded-md w-full my-2 hover:scale-105 hover:opacity-75">Iniciar Sesion</button>
        </form>
        <p className="flex justify-between items-center my-2 text-white">Todavia no tienes una cuenta? <Link to="/register" className="font-bold hover:underline">Registrate</Link></p>
      </div>
    </div>
  );
};

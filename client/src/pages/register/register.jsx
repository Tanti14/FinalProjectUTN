import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isAuth, errores, signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="w-full mt-32">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {errores.map((error, i) => (
          <div className="bg-red-500 p-2 text-white rounded-md flex justify-center my-2" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit} className="max-w-5xl">
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.nombre && <p className="text-red-500">Ingrese su nombre</p>}
          <input
            type="text"
            placeholder="Apellido"
            {...register("apellido", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.apellido && (
            <p className="text-red-500">Ingrese su apellido</p>
          )}
          <input
            type="number"
            placeholder="Número de telefono"
            {...register("phone", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.phone && (
            <p className="text-red-500">Ingrese su número de telefono</p>
          )}
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
          <button type="submit">Registrarme</button>
        </form>
      </div>
    </div>
  );
};

import React from "react";
import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth.js";

export const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="w-full mt-32">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <form onSubmit={onSubmit} className="max-w-5xl">
          <input
            type="text"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            placeholder="Apellido"
            {...register("apellido", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="text"
            placeholder="Número de telefono"
            {...register("phone", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="email"
            placeholder="Correo electronico"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button type="submit">Registrarme</button>
        </form>
      </div>
    </div>
  );
};

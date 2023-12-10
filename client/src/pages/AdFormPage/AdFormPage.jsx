import React from "react";
import { useForm } from "react-hook-form";
import { useAds } from "../../context/AdContext";
import { useNavigate } from "react-router-dom";

export const AdFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { createAnuncio } = useAds();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((values) => {
    createAnuncio(values);
    console.log(values);
    navigate("/mis-anuncios");
  });
  return (
    <div className="flex justify-center items-center mt-[120px] h-[calc(100vh-204px)]">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-white">Crear Anuncio</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nombre del Emprendimiento"
            {...register("title", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="Descripcion del Anuncio"
            {...register("description", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 rounded-md py-1 text-white"
          >
            Crear anuncio
          </button>
        </form>
      </div>
    </div>
  );
};

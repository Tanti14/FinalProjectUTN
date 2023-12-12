import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAds } from "../../context/AdContext";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

/* Libreria para formatear la fecha que llega desde la db */
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
/* ====================================================== */

export const AdFormPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { getAnuncio, createAnuncio, updateAnuncio } = useAds();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const loadAnuncio = async () => {
      if (params.id) {
        const anuncio = await getAnuncio(params.id);
        setValue("title", anuncio.title);
        setValue("description", anuncio.description);
      }
    };
    loadAnuncio();
  }, []);

  const onSubmit = handleSubmit((values) => {
    if (params.id) {
      Swal.fire({
        icon: "success",
        title: "Anuncio modificado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      updateAnuncio(params.id, {
        ...values,
        date: dayjs.utc(values.date).format(),
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Anuncio creado con exito",
        showConfirmButton: false,
        timer: 1500,
      });
      createAnuncio({
        ...values,
        date: dayjs.utc(values.date).format(),
      });
    }
    navigate("/mis-anuncios");
  });
  return (
    <div className="flex justify-center items-center mt-[100px] h-[calc(100vh-100px)]">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold text-white">Crear Anuncio</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title" className="text-white">
            Nombre del Emprendimiento
          </label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500">
              Ingrese el nombre de su emprendimiento
            </p>
          )}
          <label htmlFor="description" className="text-white">
            Descripcion del anuncio
          </label>
          <textarea
            rows="3"
            {...register("description", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          {errors.description && (
            <p className="text-red-500">
              Ingrese una descripcion para el anuncio
            </p>
          )}
          <label htmlFor="date" className="text-white">
            Fecha del Evento
          </label>
          <input
            type="date"
            {...register("date", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.date && (
            <p className="text-red-500">Ingrese la fecha del evento</p>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 rounded-md py-2 my-2 text-white"
          >
            Crear anuncio
          </button>
        </form>
      </div>
    </div>
  );
};

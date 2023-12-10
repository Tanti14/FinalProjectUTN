import React, { useEffect } from "react";
import { useAds } from "../../context/AdContext";

export const Profile = () => {
  const { anuncios, getAds } = useAds();

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="mt-32">
      {anuncios.length !== 0 ? (
        anuncios.map((anuncio) => (
          <div key={anuncio._id}>
            <h1>{anuncio.title}</h1>
            <p>{anuncio.description}</p>
          </div>
        ))
      ) : (
        <h1>No hay tareas para mostrar</h1>
      )}
    </div>
  );
};

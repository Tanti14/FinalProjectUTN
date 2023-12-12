import React, { createContext, useContext, useState } from "react";
import {
  createAdRequest,
  getAdsRequest,
  getAdRequest,
  deleteAdRequest,
  updateAdRequest,
  getAllAdsRequest,
} from "../api/ads.js";

const AdContext = createContext();

export const useAds = () => {
  const context = useContext(AdContext);

  if (!context) {
    throw new Error("useAds debe usarse dentro de AdProvider, no afuera");
  }

  return context;
};

export const AdProvider = ({ children }) => {
  const [anuncios, setAnuncios] = useState([]);

  const getAllAnuncios = async () => {
    try {
      const res = await getAllAdsRequest();
      setAnuncios(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAnuncios = async () => {
    try {
      const res = await getAdsRequest(anuncios);
      setAnuncios(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const getAnuncio = async (id) => {
    try {
      const res = await getAdRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createAnuncio = async (anuncio) => {
    try {
      const res = await createAdRequest(anuncio);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAnuncio = async (id) => {
    try {
      const res = await deleteAdRequest(id);
      if (res.status === 200)
        setAnuncios(
          anuncios.filter((anuncio) => anuncio._id !== id)
        ); /* Con esto actualizo el estado de Anuncios para que, al borrar un anuncio de la pagina, se muestren automaticamente los anuncios restantes */
    } catch (error) {
      console.log(error);
    }
  };

  const updateAnuncio = async (id, anuncio) => {
    try {
      const res = await updateAdRequest(id, anuncio);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdContext.Provider
      value={{
        anuncios,
        setAnuncios,
        getAllAnuncios,
        getAnuncios,
        getAnuncio,
        createAnuncio,
        deleteAnuncio,
        updateAnuncio,
      }}
    >
      {children}
    </AdContext.Provider>
  );
};

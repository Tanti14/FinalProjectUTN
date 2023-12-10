import React, { createContext, useContext, useState } from "react";
import { createAdRequest, getAdsRequest } from "../api/ads.js";

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

  const getAds = async () => {
    try {
      const res = await getAdsRequest(anuncios);
      setAnuncios(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createAnuncio = async (anuncio) => {
    const res = await createAdRequest(anuncio);
    console.log(res);
  };
  return (
    <AdContext.Provider value={{ anuncios, getAds, createAnuncio }}>
      {children}
    </AdContext.Provider>
  );
};

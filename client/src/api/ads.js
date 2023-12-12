import axios from "./axios";

export const getAllAdsRequest = () => axios.get("/")
export const getAdsRequest = () => axios.get("/anuncios");
export const getAdRequest = (id) => axios.get(`/anuncios/${id}`);
export const createAdRequest = (anuncio) => axios.post("/anuncios", anuncio);
export const updateAdRequest = (id, anuncio) =>
  axios.put(`/anuncios/${id}`, anuncio);
export const deleteAdRequest = (id) => axios.delete(`/anuncios/${id}`);

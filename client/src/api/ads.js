import axios from "./axios";

export const getAdsRequest = () => axios.get("/anuncios");
export const getAdRequest = (id) => axios.get(`/anuncios/${id}`);
export const createAdRequest = (anuncio) => axios.post("/anuncios", anuncio);
export const updateAdRequest = (anuncio) =>
  axios.put(`/anuncios/${anuncio._id}`, anuncio);
export const deleteAdRequest = (id) => axios.delete(`/anuncios/${id}`);

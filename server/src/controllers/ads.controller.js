import Anuncio from "../models/ad.model.js";

/* Funcion para obtener/recuperar todos los anuncios del usuario */
export const getAnuncios = async (req, res) => {
  const anuncios = await Anuncio.find({ user: req.user.id }).populate("user");
  if (anuncios.length < 1)
    return res.status(404).json({ message: "No hay anuncios para mostrar" });
  res.json(anuncios);
};

/* Funcion para crear un anuncio nuevo */
export const createAnuncio = async (req, res) => {
  const { title, description, date } = req.body;

  const newAnuncio = new Anuncio({
    title,
    description,
    date,
    user: req.user.id,
  });

  const savedAnuncio = await newAnuncio.save();
  res.json(savedAnuncio);
};

/* Funcion para recuperar un anuncio especifico */
export const getAnuncio = async (req, res) => {
  const anuncio = await Anuncio.findById(req.params.id).populate("user");

  if (!anuncio)
    return res.status(404).json({ message: "No se ha encontrado un anuncio" });
  res.json(anuncio);
};

/* Funcion para eliminar un anuncio */
export const deleteAnuncio = async (req, res) => {
  const anuncio = await Anuncio.findByIdAndDelete(req.params.id);

  if (!anuncio)
    return res.status(404).json({ message: "Este anuncio ya no existe" });
  res.status(200).json({ message: "Anuncio eliminado correctamente" });
};

/* Funcion para actualizar un anuncio */
export const updateAnuncio = async (req, res) => {
  const anuncio = await Anuncio.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!anuncio)
    return res.status(404).json({ message: "No se ha encontrado un anuncio" });
  res.json(anuncio);
};

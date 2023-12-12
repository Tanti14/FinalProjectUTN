import Anuncio from "../models/ad.model.js";

/* Obtener todos los anuncios */
export const getAllAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncio.find().populate("user");
    res.json(anuncios);
  } catch (error) {
    return res.status(500).json({ message: "Algo salio mal, pero no se que es :)" });
  }
};


/* Funcion para obtener/recuperar todos los anuncios del usuario */
export const getAnuncios = async (req, res) => {
  try {
    const anuncios = await Anuncio.find({ user: req.user.id }).populate("user");
    if (anuncios.length < 1)
      return res.status(404).json({ message: "No hay anuncios para mostrar" });
    res.json(anuncios);
  } catch (error) {
    return res.status(500).json({ message: "Algo no salio como esperabamos" });
  }
};

/* Funcion para crear un anuncio nuevo */
export const createAnuncio = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newAnuncio = new Anuncio({
      title,
      description,
      date,
      user: req.user.id,
    });

    const savedAnuncio = await newAnuncio.save();
    res.json(savedAnuncio);
  } catch (error) {
    return res.status(500).json({ message: "Algo no salio como esperabamos" });
  }
};

/* Funcion para recuperar un anuncio especifico */
export const getAnuncio = async (req, res) => {
  try {
    const anuncio = await Anuncio.findById(req.params.id).populate("user");
    /* if (!anuncio)
    return res.status(404).json({ message: "No se ha encontrado un anuncio" }); */
    res.json(anuncio);
  } catch (error) {
    return res.status(404).json({ message: "No se ha encontrado un anuncio" });
  }
};

/* Funcion para eliminar un anuncio */
export const deleteAnuncio = async (req, res) => {
  try {
    const anuncio = await Anuncio.findByIdAndDelete(req.params.id);
    if (!anuncio)
      return res.status(404).json({ message: "Este anuncio ya no existe" });
    res.status(200).json({ message: "Anuncio eliminado correctamente" });
  } catch (error) {
    return res.status(404).json({ message: "Este anuncio ya no existe" });
  }
};

/* Funcion para actualizar un anuncio */
export const updateAnuncio = async (req, res) => {
  try {
    const anuncio = await Anuncio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!anuncio)
      return res.status(404).json({ message: "No se ha encontrado un anuncio" });
    res.json(anuncio);
  } catch (error) {
    return res.status(404).json({ message: "No se ha encontrado un anuncio" });
  }
};

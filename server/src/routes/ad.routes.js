import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
import {
  createAnuncio,
  deleteAnuncio,
  getAllAnuncios,
  getAnuncio,
  getAnuncios,
  updateAnuncio,
} from "../controllers/ads.controller.js";

import { validateSchema } from "../middlewares/schemaValidator.js";
import { createAnuncioSchema } from "../schemas/ad.schema.js";

const router = Router();

/* Seteamos las rutas para el CRUD de los anuncios */
/* CRUD: CREATE, READ, UPDATE, DELETE */
router.get("/", getAllAnuncios)
router.get("/anuncios", authRequire, getAnuncios);
router.get("/anuncios/:id", authRequire, getAnuncio);
router.post("/anuncios", authRequire, validateSchema(createAnuncioSchema), createAnuncio);
router.delete("/anuncios/:id", authRequire, deleteAnuncio);
router.put("/anuncios/:id", authRequire, updateAnuncio);

export default router;

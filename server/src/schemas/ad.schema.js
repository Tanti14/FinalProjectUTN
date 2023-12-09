import { z } from "zod";

export const createAnuncioSchema = z.object({
  title: z.string({
    required_error: "Ingrese el nombre del Emprendimiento",
  }),
  description: z.string({
    required_error: "Ingrese la descripcion del anuncio",
  }),
  date: z.string().datetime().optional(),
});

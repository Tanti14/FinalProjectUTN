import { z } from "zod";

export const registerSchema = z.object({
  nombre: z.string({
    required_error: "Porfavor, ingrese un Nombre",
    invalid_type_error: "El tipo de dato ingresado no es valido",
  }),
  apellido: z.string({
    required_error: "Porfavor, ingrese un Apellido",
    invalid_type_error: "El tipo de dato ingresado no es valido",
  }),
  phone: z.string({
    required_error: "Porfavor, ingrese un Número de Telefono",
    invalid_type_error: "El tipo de dato ingresado no es valido",
  }),
  email: z
    .string({
      required_error: "Porfavor, ingrese su email",
      invalid_type_error: "El tipo de dato ingresado no es valido",
    })
    .email({
      message: "El Email ingresado no es valido",
    }),
  password: z
    .string({
      required_error: "Porfavor, ingrese una contraseña",
      invalid_type_error: "El tipo de dato ingresado no es valido",
    })
    .min(6, { message: "La contraseña es demasiado corta" }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Porfavor, ingrese su email",
      invalid_type_error: "El dato ingresado es invalido",
    })
    .email({
      message: "El Email ingresado no es valido",
    }),
  password: z.string({
    required_error: "Porfavor, ingrese su contraseña",
    invalid_type_error: "El tipo de dato ingresado no es valido",
  }),
});

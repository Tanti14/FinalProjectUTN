/* Aqui hacemos la conexion a la base de datos */
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB is connected");
  } catch (error) {
    console.log(
      "Algo no salio como esperabamos. Revisa el siguiente error:",
      error
    );
  }
};

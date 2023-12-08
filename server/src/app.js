import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";

export const app = express();
app.use(morgan("dev"));
app.use(express.json()); /* Esto sirve para que express pueda converti los request body (req.body) en formato json  */
app.use("/api", authRoutes);

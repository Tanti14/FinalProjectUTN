import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import adRoutes from "./routes/ad.routes.js";

export const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(
  express.json()
); /* Esto sirve para que express pueda converti los request body (req.body) en formato json  */
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", adRoutes);

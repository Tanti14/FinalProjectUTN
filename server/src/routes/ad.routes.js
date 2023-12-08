import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";

const router = Router();

router.get("/anuncios", authRequire, (req, res) => {
  res.send("anuncios");
});

export default router;

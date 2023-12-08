import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequire = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res
      .status(401)
      .json({ message: "No hay token valido, autorizacion denegada" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    /* user es el usuario que estoy decodificando por medio del token */
    if (err) return res.status(401).json({ message: "Token invalido" });

    req.user = user;
    next();
  });
};

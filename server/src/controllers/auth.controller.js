import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { nombre, apellido, phone, email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json(["Este email ya esta en uso"]);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      nombre,
      apellido,
      phone,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    const token = await createAccessToken({ id: savedUser._id });
    /* createAccessToken viene de libs/jwt.js */

    res.cookie(
      "token",
      token
    ); /* Seteamos una cookie llamada token con el valor del token creado con jwt */

    res.json({
      id: savedUser._id,
      nombre: savedUser.nombre,
      apellido: savedUser.apellido,
      phone: savedUser.phone,
      email: savedUser.email,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    });
  } catch (error) {
    console.log("Ha ocurrido un error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });

    if (!foundUser)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch)
      return res.status(400).json({ message: "Credenciales Incorrectas" });

    const token = await createAccessToken({ id: foundUser._id });
    /* createAccessToken viene de libs/jwt.js */

    res.cookie(
      "token",
      token
    ); /* Seteamos una cookie llamada token con el valor del token creado con jwt */

    res.json({
      id: foundUser._id,
      nombre: foundUser.nombre,
      apellido: foundUser.apellido,
      phone: foundUser.phone,
      email: foundUser.email,
      createdAt: foundUser.createdAt,
      updatedAt: foundUser.updatedAt,
    });
  } catch (error) {
    console.log("Ha ocurrido un error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const foundUser = await User.findById(req.user.id);

  if (!foundUser)
    return res.status(400).json({ message: "Usuario no encontrado" });

  res.json({
    id: foundUser._id,
    nombre: foundUser.nombre,
    apellido: foundUser.apellido,
    phone: foundUser.phone,
    email: foundUser.email,
    createdAt: foundUser.createdAt,
    updatedAt: foundUser.updatedAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const foundUser = await User.findById(user.id);
    if (!foundUser) return res.status(401), json({ message: "No autorizado" });

    return res.json({
      id: foundUser._id,
      nombre: foundUser.nombre,
      apellido: foundUser.apellido,
      phone: foundUser.phone,
      email: foundUser.email,
    });
  });
};

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { nombre, apellido, phone, email, password } = req.body;

  try {
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

export const login = (req, res) => {
  res.send("login");
};

import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { nombre, apellido, phone, email, password } = req.body;

  try {
    const newUser = new User({
      nombre,
      apellido,
      phone,
      email,
      password,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
    
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  res.send("login");
};

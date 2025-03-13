import { Users } from "../../models/user-schema.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      ...req.body,
      email,
      password: encryptedPassword,
    });
    res.json({
      message: "success",
      user: newUser,
    });
  } catch (error) {
    console.log(error);

    res.status(403).json({ message: "Error occured" });
  }
};

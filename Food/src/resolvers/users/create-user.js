import { Users } from "../../models/user-schema.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = password + "0";
  const newUser = await Users.create({
    ...req.body,
    name,
    email,
    password: hashPassword,
  });
  res.json({
    message: "success",
    user: newUser,
  });
};

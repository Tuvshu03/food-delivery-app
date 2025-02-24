import { Users } from "../../models/user-schema.js";

export const getUser = async (req, res) => {
  const { email } = req.body;
  const newUser = await Users.find({email:email});
  res.json({ message: "get data", user: newUser });
};

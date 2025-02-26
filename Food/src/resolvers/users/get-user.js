import { Users } from "../../models/user-schema.js";

export const getUser = async (req, res) => {
  const { email } = req.body;
  const User = await Users.find({ email: email }).populate("orderedFoods");
  res.json({ message: "get user data", user: User });
};

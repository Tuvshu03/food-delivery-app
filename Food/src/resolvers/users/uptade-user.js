import { Users } from "../../models/user-schema.js";

export const createUser = async (req, res) => {
  const { name } = req.body;
  const newUser = await Person.updateOne({ name: name }, { ship: 'USS Enterprise' });
  res.json({
    message: "success",
    user: newUser,
  });
};

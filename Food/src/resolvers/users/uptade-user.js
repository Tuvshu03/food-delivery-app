import { Users } from "../../models/user-schema.js";

export const updateUser = async (req, res) => {
  try {
    const { email } = req.body;
    const updateUser = await Users.findOneAndUpdate(
      { email: email },
      { name: "jason bourne" }
    );
    res.json({
      message: "success",
      user: updateUser,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

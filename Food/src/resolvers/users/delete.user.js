import { Users } from "../../models/user-schema.js";

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;
    const deleteUser = await Users.deleteOne({ email: email });
    res.json({
      message: "success",
      user: deleteUser,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

import { Users } from "../../models/user-schema.js";

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const deleteUser = await Users.deleteOne({ _id });
    res.json({
      message: "success",
      user: deleteUser,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

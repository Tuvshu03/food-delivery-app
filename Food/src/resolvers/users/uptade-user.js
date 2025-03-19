import { Users } from "../../models/user-schema.js";

export const updateUser = async (req, res) => {
  try {
    const { _id } = req.user;
    const { address } = req.body;
    console.log(address);

    const updateUser = await Users.findByIdAndUpdate(_id, { address });
    res.json({
      message: "success",
      user: updateUser,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

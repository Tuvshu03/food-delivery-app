import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Users } from "../../models/user-schema.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ message: "Username or password did not match" });
    if (!bcrypt.compareSync(password, user.password))
      return res
        .status(400)
        .json({ message: "Username or password did not match" });
    // if(role===user._id)
    //   return res
    //     .status(400)
    //     .json({ message: "Username or password did not match" });
    var token = jwt.sign({ _id: user._id, role: user.role }, "uneheer nuuts");
    res.json({ token: token, role: user.role });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

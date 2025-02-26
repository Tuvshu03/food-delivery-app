import { Users } from "../../models/user-schema.js";

export const createUser = async (req, res) => {
  const { name, email, password, phoneNumber, address, role,  orderedFoods, ttl, isVerified} = req.body;
  const hashPassword = password + "0";
  const newUser = await Users.create({
    ...req.body,
    name,
    email,
    password: hashPassword,
    phoneNumber,
    address, 
    role,  
    orderedFoods, 
  });
  res.json({
    message: "success",
    user: newUser,
  });
};

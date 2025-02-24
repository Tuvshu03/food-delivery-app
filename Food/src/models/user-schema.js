import mongoose from "mongoose";


const { Schema, model, models } = mongoose;
const userSchema = Schema({
  name: String,
  email:{ type: String, required: true, unique:true},
  password: { type: String, required: true, unique:true},
  phoneNumber: String,
  address: String,
});
export const Users = models.Users || model("Users", userSchema);

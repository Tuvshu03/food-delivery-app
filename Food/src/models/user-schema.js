import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const userSchema = Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: String,
    address: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    orderedFoods: {
      type: [Schema.Types.ObjectId],
      ref: "ProductsOrder",
      default: [],
    },
    ttl: Date,
    isVerified: Boolean,
  },
  { timestamp: true }
);
export const Users = models.Users || model("Users", userSchema);

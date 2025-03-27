import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const foodOrderItemSchema = Schema(
  {
    foodId: {
      type: Schema.Types.ObjectId,
      ref: "Products",
      default: [],
    },
    quantity: Number,
  },
  { _id: false }
);

const productOrderSchema = Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    totalPrice: Number,
    foodOrderItems: [foodOrderItemSchema],
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIEVERED"],
      default: "PENDING",
    },
    createdAt: {type:Date, default: new Date()},
    isVerified: Boolean,
  },
);
export const ProductsOrder =
  models.ProductsOrder || model("ProductsOrder", productOrderSchema);

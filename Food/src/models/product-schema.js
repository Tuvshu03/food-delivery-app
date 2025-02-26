import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const productSchema = Schema(
  {
    foodName: String,
    price: Number,
    image: String,
    ingredients: String,
    categoryName: {
      type: [Schema.Types.ObjectId],
      ref: "ProductsCategory",
      default: [],
    },
  },
  { timestamp: true }
);
export const Products = models.Products || model("Products", productSchema);

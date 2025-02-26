import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const productCategorySchema = Schema(
  {
    categoryName: String,
  },
  { timestamp: true }
);
export const ProductsCategory =
  models.ProductsCategory || model("ProductsCategory", productCategorySchema);

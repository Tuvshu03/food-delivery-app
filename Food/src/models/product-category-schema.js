import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const productCategorySchema = Schema(
  {
    categoryName: {type:String, required:true},
    createdAt: {type:Date, default: new Date()},
    isVerified: Boolean,
  },
);
export const ProductsCategory =
  models.ProductsCategory || model("ProductsCategory", productCategorySchema);

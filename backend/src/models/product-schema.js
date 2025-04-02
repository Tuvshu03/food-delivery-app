import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const productSchema = Schema(
  {
    foodName:{type:String, required:true},
    price:{type:String, required:true},
    image: {type:String, required:true},
    ingredients:{type:String, required:true},
    categoryName: {
      type: [Schema.Types.ObjectId],
      ref: "ProductsCategory",
      default: [],
    },
    createdAt: {type:Date, default: new Date()},
    isVerified: Boolean,
  },
);
export const Products = models.Products || model("Products", productSchema);

import { ProductsCategory } from "../../models/product-category-schema.js";

export const getUser = async (req, res) => {
  try{
    const FoodCategory = await ProductsCategory.find()
    res.json({ message: "get Food Category", FoodCategory: FoodCategory });
  }
  catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

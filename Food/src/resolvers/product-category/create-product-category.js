import { ProductsCategory } from "../../models/product-category-schema.js";
import { Products } from "../../models/product-schema.js";

export const createProductCategory= async (req, res) => {
  const {categoryName} = req.body;
  const newProductCategory = await ProductsCategory.create({
    ...req.body,
    categoryName
  });
  res.json({
    message: "success",
    Products: newProductCategory,
  });
};

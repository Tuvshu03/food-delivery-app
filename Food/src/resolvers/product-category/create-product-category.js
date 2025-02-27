import { ProductsCategory } from "../../models/product-category-schema.js";

export const createProductCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const newProductCategory = await ProductsCategory.create({
      ...req.body,
      categoryName,
    });
    res.json({
      message: "success",
      Products: newProductCategory,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

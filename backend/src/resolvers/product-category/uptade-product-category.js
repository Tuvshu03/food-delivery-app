import { ProductsCategory } from "../../models/product-category-schema.js"

export const updateProductCategory = async (req, res) => {
  try {
    const { _id, categoryName } = req.body;
    const updateCategory = await ProductsCategory.findOneAndUpdate(_id, {categoryName});
    res.json({
      message: "success",
      Category: updateCategory,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};
import { ProductsCategory } from "../../models/product-category-schema.js"
export const deleteUser = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const deleteCategory = await ProductsCategory.deleteOne({ categoryName:categoryName });
    res.json({
      message: "success",
      Category: deleteCategory,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

import { ProductsCategory } from "../../models/product-category-schema.js"
export const deleteProductCategory = async (req, res) => {
  try {
    const { _id, categoryName } = req.body;
    const deleteCategory = await ProductsCategory.findByIdAndDelete(_id, { categoryName });
    res.json({
      message: "success",
      Category: deleteCategory,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

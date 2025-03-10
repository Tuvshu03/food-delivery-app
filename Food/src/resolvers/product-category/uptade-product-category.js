import { ProductsCategory } from "../../models/product-category-schema.js"

export const updateProductCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const updateCategory = await ProductsCategory.findOneAndUpdate(
      { categoryName: categoryName },
      { categoryName: "Breakfast" }
    );
    res.json({
      message: "success",
      Category: updateCategory,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};
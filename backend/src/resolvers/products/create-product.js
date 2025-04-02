import { Products } from "../../models/product-schema.js";

export const createProduct = async (req, res) => {
  const { foodName, price, image, ingredients, categoryName } = req.body;

  try {
    const newProduct = await Products.create({
      ...req.body,
      foodName,
      price,
      image,
      ingredients,
      categoryName,
    });
    res.json({
      message: "success",
      Products: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Error occured" });
  }
};

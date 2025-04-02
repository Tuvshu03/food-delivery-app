import { Products } from "../../models/product-schema.js";

export const getProduct = async (req, res) => {
  try {
    const Product = await Products.find().populate("categoryName");
    res.json({ message: "get product data", Product: Product });
  } catch (error) {
    console.log(error);
    res.status(403).json({ message: "Error occured" });
  }
};

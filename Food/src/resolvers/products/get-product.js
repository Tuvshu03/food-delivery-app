import { Products } from "../../models/product-schema.js";

export const getProduct = async (req, res) => {
  const Product = await Products.find().populate(
    "categoryName"
  );
  res.json({ message: "get product data", Product: Product });
};

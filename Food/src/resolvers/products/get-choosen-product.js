import { Products } from "../../models/product-schema.js";

export const getChoosenProduct = async (req, res) => {
  const { foodName } = req.body;
  const Product = await Products.find({ foodName: foodName }).populate(
    "categoryName"
  );
  res.json({ message: "get product data", Product: Product });
};

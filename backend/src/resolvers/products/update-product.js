import { Products } from "../../models/product-schema.js";

export const updateProducts = async (req, res) => {
  try {
    const { _id, foodName} = req.body;
    const updateProduct = await Products.findByIdAndUpdate(_id, {foodName});
    res.json({
      message: "success",
      Category: updateProduct,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};
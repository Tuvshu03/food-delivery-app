import { Products } from "../../models/product-schema.js";

export const updateProducts = async (req, res) => {
  try {
    const { foodName } = req.body;
    const updateProduct = await Products.findOneAndUpdate(
      { foodName: foodName },
      { foodName: "jasondbourne" }
    );
    res.json({
      message: "success",
      Category: updateProduct,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};
import { Products } from "../../models/product-schema.js";

export const deleteProduct = async (req, res) => {
  try {
    const { foodName } = req.body;
    const deleteProduct = await Products.deleteOne({ foodName:foodName });
    res.json({
      message: "success",
      Category: deleteProduct,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

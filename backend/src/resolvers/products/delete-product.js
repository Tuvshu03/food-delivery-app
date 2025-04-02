import { Products } from "../../models/product-schema.js";

export const deleteProduct = async (req, res) => {
  try {
    const {_id, foodName } = req.body;
    const deleteProduct = await Products.findByIdAndDelete(_id, {foodName});
    res.json({
      message: "success",
      Category: deleteProduct,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

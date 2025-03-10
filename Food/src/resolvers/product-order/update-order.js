import { ProductsOrder } from "../../models/product-order-schema.js";

export const updateProductOrder = async (req, res) => {
  try {
    const { foodName, quantity} = req.body;
    const updateProductOrder = await ProductsOrder.findOneAndUpdate(
      { foodName: foodName },
      { quantity: quantity}
    );
    res.json({
      message: "success",
      Category: updateProductOrder,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};
import { ProductsOrder } from "../../models/product-order-schema.js";
export const deleteProductOrder = async (req, res) => {
  try {
    const { foodOrderId } = req.body;
    const deleteOrder = await ProductsOrder.deleteOne({ foodOrderId:foodOrderId });
    res.json({
      message: "success",
      Category: deleteOrder,
    });
  } catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};

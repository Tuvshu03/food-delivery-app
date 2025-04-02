import { ProductsOrder } from "../../models/product-order-schema.js";

export const getAllOrder = async (req, res) => {
  try{
    const ProductOrder = await ProductsOrder.find().populate(["user", "foodOrderItems.foodId"])
    res.json({ message: "get productOrder data", ProductOrder: ProductOrder });
  }
  catch (err) {
    res.status(403).json({ message: "Error occured" });
  }
};
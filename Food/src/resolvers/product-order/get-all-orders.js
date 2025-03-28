import { ProductsOrder } from "../../models/product-order-schema.js";

export const getAllOrder = async (req, res) => {

  const ProductOrder = await ProductsOrder.find().populate(["user", "foodOrderItems.foodId"])

  res.json({ message: "get productOrder data", ProductOrder: ProductOrder });
};

import { ProductsOrder } from "../../models/product-order-schema.js";

export const getProductOrder = async (req, res) => {
  const { user } = req.body;
  const ProductOrder = await ProductsOrder.find({user:user}).populate(["user", "foodOrderItems.foodName"])

  res.json({ message: "get productOrder data", ProductOrder: ProductOrder });
};

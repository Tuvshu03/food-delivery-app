import { ProductsOrder } from "../../models/product-order-schema.js";

export const createProductOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems } = req.body;

  const newProductOrder = await ProductsOrder.create({
    user,
    totalPrice,
    foodOrderItems,
  });
  res.json({
    message: "success",
    Products: newProductOrder,
  });
};

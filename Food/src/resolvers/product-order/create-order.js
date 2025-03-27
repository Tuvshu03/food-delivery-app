import { ProductsOrder } from "../../models/product-order-schema.js";

export const createProductOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems, status } = req.body;

  const newProductOrder = await ProductsOrder.create({
    user,
    totalPrice,
    foodOrderItems,
    status,
    
  });
  res.json({
    message: "success",
    Products: newProductOrder,
  });
};

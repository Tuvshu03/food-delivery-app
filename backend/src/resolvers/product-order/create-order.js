import { ProductsOrder } from "../../models/product-order-schema.js";

export const createProductOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems, status } = req.body;

  try{
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
  }
  catch (error) {
    console.log(error);
    res.status(403).json({ message: "Error occured" });
  }
};
